import { BarLoader, ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-auto">
      <p className="text-lg font-semibold"><ClipLoader /></p>
    </div>
  );
}
