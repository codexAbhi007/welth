import { Plus } from "lucide-react";
import CreateAccountModal from "./create-account-modal";
import { Card, CardContent } from "./ui/card";

const AccountGridModal = () => {
  return (
    <CreateAccountModal>
      <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
        <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
          <Plus className="h-10 w-10 mb-2" />
          <p className="text-sm font-medium">Add new Account</p>
        </CardContent>
      </Card>
    </CreateAccountModal>
  );
};
export default AccountGridModal;
