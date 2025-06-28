import { getCurrentBudget } from "@/actions/budget";
import { getDashboardData, getuserAccounts } from "@/actions/dashboard";
import { AccountCard } from "@/components/account-card";
import AccountGridModal from "@/components/account-grid-modal";
import { BudgetProgress } from "@/components/BudgetProgress";
import { DashboardOverview } from "@/components/transaction-overview";

export const dynamic = "force-dynamic";

const DashboardPage = async () => {
  const [accounts, transactions] = await Promise.all([
    getuserAccounts(),
    getDashboardData(),
  ]);
  const defaultAccount = accounts?.find((account) => account.isDefault);
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }
  console.log("Budget Data", budgetData);
  return (
    <div className="px-5">
      {/* Budget Progress */}
      {defaultAccount && (
        <BudgetProgress
          initialBudget={budgetData?.budget}
          currentExpenses={budgetData?.currentExpenses || 0}
        />
      )}

      {/* Dashboard Overview */}
      <DashboardOverview
        accounts={accounts}
        transactions={transactions || []}
      />

      {/* Accounts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-10">
        <AccountGridModal />
        {accounts?.length > 0 &&
          accounts?.map((account) => {
            return <AccountCard key={account.id} account={account} />;
          })}
      </div>
    </div>
  );
};
export default DashboardPage;
