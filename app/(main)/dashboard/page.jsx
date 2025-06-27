import { getuserAccounts } from "@/actions/dashboard";
import { AccountCard } from "@/components/account-card";
import AccountGridModal from "@/components/account-grid-modal";
export const dynamic = "force-dynamic";

const DashboardPage = async () => {
  const accounts = await getuserAccounts();
  return (
    <div className="px-5">
      {/* Budget Progress */}

      {/* Overview */}

      {/* Accounts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
