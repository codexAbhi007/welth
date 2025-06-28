import { getuserAccounts } from "@/actions/dashboard";
import { getTransaction } from "@/actions/transaction";
import AddTransactionForm from "@/components/forms/create-transaction-form";
import { defaultCategories } from "@/data/categories";

const AddTransaction = async ({ searchParams }) => {
  const accounts = await getuserAccounts();
  const editId = searchParams?.edit;
  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }
  return (
    <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
      <h1 className="text-5xl gradient gradient-title">{editId ? "Update" : "Add"} Transaction</h1>

      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
};
export default AddTransaction;
