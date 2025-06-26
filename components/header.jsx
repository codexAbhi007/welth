import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
            alt="Logo"
          />
        </Link>
        <div className="flex space-x-4">
          <SignedIn>
            <Link
              href={"/dashboard"}
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              <Button variant="outline">
                <LayoutDashboard className="size-4" />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href={"/transaction/create"}>
              <Button variant="default">
                <PenBox className="size-4" />
                <span className="hidden md:inline text-sm">
                  Add Transaction
                </span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="default">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    "rounded-full shadow-sm border transition-all duration-200 hover:!border-blue-700 !size-9 !outline-none",
                  userButtonPopoverCard: "!rounded-xl !shadow-lg",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};
export default Header;
