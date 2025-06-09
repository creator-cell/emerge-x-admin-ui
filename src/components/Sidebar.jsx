'use client'

import { usePage } from "@/hooks/usePage.hook"
import { LogOut } from "lucide-react";
import Link from "next/link"


export const Sidebar = ({ SheetClose }) => {

    const { pages, isActive } = usePage();

    return (
        <div className="w-64 p-6 flex-col justify-between flex gap-10">

            <div className="space-y-4">
                {pages?.map(({ path, label, Icon }) => <Link className="block" href={path} key={label + path}>
                    {SheetClose ? <SheetClose asChild>
                        <div className={`flex items-center hover:bg-muted px-4 py-2 gap-4 transition-colors duration-300 rounded-full ${isActive(path) && 'bg-linear-to-r from-primary to-[#247814] text-white font-medium'}`}>
                            <Icon />
                            <p className="capitalize">{label}</p>
                        </div>
                    </SheetClose> :
                        <div className={`flex items-center hover:bg-muted px-4 py-2 gap-4 transition-colors duration-300 rounded-full ${isActive(path) && 'bg-linear-to-r from-primary to-[#247814] text-white font-medium'}`}>
                            <Icon />
                            <p className="capitalize">{label}</p>
                        </div>
                    }

                </Link>)}
            </div>

            <footer className="px-4">
                <Link href={'/auth/login'}>
                    <div className="flex items-center gap-4  cursor-pointer">
                        <LogOut className="text-destructive" />
                        <p className="capitalize">Logout</p>
                    </div>
                </Link>
            </footer>
        </div>
    )
}
