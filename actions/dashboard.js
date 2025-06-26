"use server";

import { db } from "@/lib/prisma";
import { serializeTransaction } from "@/utils/serialize-account";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";



export async function createAccount(data) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) throw new Error("User not Found");

    //Convert balance to float
    const balanceFloat = parseFloat(data.balance);
    if (isNaN(balanceFloat)) {
      throw new Error("Invalid balance amount");
    }

    //Check if this is the user's first account
    const existingAccounts = await db.account.findMany({
      where: { userId: user.id },
    });

    const shouldBeDefault =
      existingAccounts.length === 0 ? true : data.isDefault;
    // If this account should be default, unset other default accounts
    if (shouldBeDefault) {
      await db.account.updateMany({
        where: { userId: user.id, isDefault: true },
        data: { isDefault: false },
      });
    }

    const account = await db.account.create({
      data: {
        ...data,
        balance: balanceFloat,
        userId: user.id,
        isDefault: shouldBeDefault,
      },
    });

    const serializedAccount = serializeTransaction(account);

    revalidatePath("/dashboard");
    return { success: true, data: serializedAccount };
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function getuserAccounts() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not Found");

  const accounts = await db.account.findMany({
    where: {userId: user.id},
    orderBy :{createdAt: "desc"},
    include: {
        _count: {
            select: {
                transactions: true,
            }
        }
    }
  })
  const serializedAccounts = accounts.map(serializeTransaction)
  return serializedAccounts
}
