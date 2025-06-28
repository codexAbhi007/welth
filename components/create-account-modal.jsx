"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "@/lib/schema";

import useFetch from "@/hooks/use-fetch";
import { createAccount } from "@/actions/dashboard";
import { toast } from "sonner";
import CreateAccountForm from "./forms/create-account-form";

const CreateAccountModal = ({ children, extraStyles }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      type: "CURRENT",
      balance: "",
      isDefault: false,
    },
  });
  const {
    data: newAccount,
    error,
    fn: createAccountFn,
    loading: createAccountLoading,
  } = useFetch(createAccount);

  const onSubmit = async (data) => {
    await createAccountFn(data);
  };

  useEffect(() => {
    if (newAccount) {
      toast.success("Account created successfully");
      reset();
      setOpen(false);
    }
  }, [newAccount, reset]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to create account");
    }
  }, [error]);

  return (
    <>
      {isMobile ? (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger className={`${extraStyles}`}>{children}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Create new Account</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-16">
              <CreateAccountForm
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
                register={register}
                watch={watch}
                createAccountLoading={createAccountLoading}
                type="mobile"
                setValue={setValue}
              />
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a new Account</DialogTitle>
            </DialogHeader>
            <div className="px-4 pb-10">
              <CreateAccountForm
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
                register={register}
                watch={watch}
                createAccountLoading={createAccountLoading}
                type="desktop"
                setValue={setValue}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
export default CreateAccountModal;
