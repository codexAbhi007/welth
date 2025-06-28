import { getuserAccounts } from "@/actions/dashboard"
import AddTransactionForm from "@/components/forms/create-transaction-form"
import { defaultCategories } from "@/data/categories"




const AddTransaction = async() => {
    const accounts = await getuserAccounts()
  return (
    <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
        <h1 className="text-5xl gradient gradient-title">Add Transaction</h1>

        <AddTransactionForm accounts={accounts} categories={defaultCategories}/>
    </div>
  )
}
export default AddTransaction