// Header.jsx
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, CreditCard } from "lucide-react";

function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow">
      <div className="container mx-auto flex items-center px-4 py-2">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="wealth logo"
            height={25}
            width={100}
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Navbar Controls */}
        <div className="flex items-center gap-3 ml-auto">

          {/* Dashboard */}
          <SignedIn>
            <Link href="/dashboard">
              <Button className="flex items-center gap-2 h-8 px-4 bg-[#000053] text-white hover:bg-[#2a3445]">
                <LayoutDashboard size={16} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button className="flex items-center gap-2 h-8 px-4 bg-[#000053] text-white hover:bg-[#2a3445]">
                <LayoutDashboard size={16} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </SignInButton>
          </SignedOut>

          {/* Transactions */}
          <SignedIn>
            <Link href="/transactions">
              <Button className="flex items-center gap-2 h-8 px-4 bg-[#000053] text-white hover:bg-[#2a3445]">
                <CreditCard size={16} />
                <span className="hidden md:inline">Transactions</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/transactions">
              <Button className="flex items-center gap-2 h-8 px-4 bg-[#000053] text-white hover:bg-[#2a3445]">
                <CreditCard size={16} />
                <span className="hidden md:inline">Transactions</span>
              </Button>
            </SignInButton>
          </SignedOut>

          {/* Auth Controls */}
          {/* Auth Controls */}
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button className="flex items-center gap-2 h-8 px-4 bg-gray-300 text-black hover:bg-gray-400">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton forceRedirectUrl="/dashboard">
              {/* <Button className="flex items-center gap-2 h-8 px-4 bg-[#1B2430] text-white hover:bg-[#2a3445]"> */}
              <Button className="flex items-center gap-2 h-8 px-4 bg-[#000053] text-white hover:bg-[#2a3445]">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>


          {/* User Avatar */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: { width: "2.5rem", height: "2.5rem" },
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Header;
