import { getAccountWithTransactions } from "@/actions/accounts";
import TransactionTable from "@/components/transaction-table";
import { formatCurrency } from "@/utils/currency-display";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";

const AccountIdPage = async ({ params }) => {
  const accountData = await getAccountWithTransactions(params.id);
  if (!accountData) notFound();
  const { transactions, ...account } = accountData;
  return (
    <div className="space-y-8 px-5">
      <div className="flex gap-4 items-end justify-between">
      <div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight gradient gradient-title capitalize">
          {account.name}
        </h1>
        <p className="text-muted-foreground">
          {account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account
        </p>
      </div>

      <div className="text-right pb-2">
        <div className="text-xl sm:text-2xl font-bold">
          {formatCurrency(account.balance)}
        </div>
        <p className="text-sm text-muted-foreground">
          {account._count.transactions} Transactions
        </p>
      </div>
    </div>

    {/* Chart Section */}
    {/* Transaction Table */}
   
      <TransactionTable transactions={transactions}/>
  
    </div>
    
  );
};
export default AccountIdPage;
