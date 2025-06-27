import { getAccountWithTransactions } from "@/actions/accounts";
import AccountChart from "@/components/account-chart";
import TransactionTable from "@/components/transaction-table";
import { formatCurrency } from "@/utils/currency-display";
import { notFound } from "next/navigation";

const AccountIdPage = async (context) => {
  const params = await context.params
  const accountData = await getAccountWithTransactions(params.id);
  if (!accountData) notFound();
  const { transactions, ...account } = accountData;
  return (
    <div className="w-11/12 md:w-3/4 space-y-8 mx-auto">
      <div className="flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight gradient gradient-title capitalize">
            {account.name}
          </h1>
          <p className="text-muted-foreground">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
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
      <AccountChart transactions={transactions}/>
      {/* Transaction Table */}

      <TransactionTable transactions={transactions} />
    </div>
  );
};
export default AccountIdPage;
