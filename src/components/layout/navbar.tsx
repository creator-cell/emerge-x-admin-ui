"use client";

import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "@/assets/icons/svg-icons";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 border-b bg-white flex items-center px-6 z-[90]">
      <Link href="/dashboard" className="flex items-center mr-8">
        <Image
          height={100}
          width={100}
          alt="navbarLogo"
          src={"/images/Vector.png"}
        />
      </Link>
      <div className="flex-1 rounded-[16px]">
        <div className="relative w-[400px] rounded-[16px]">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <SearchIcon />
          </span>
          <Input placeholder="Search" className="pl-10 w-full bg-gray-50" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-gray-500" />
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
