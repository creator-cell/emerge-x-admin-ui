import { Bell, Logs, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "./Logo"
import { Sidebar } from "./Sidebar"


export const Navbar = () => {
    return (
        <nav className="h-16 px-4 md:px-6 flex items-center gap-6 justify-between border-b">
            <div className="flex items-center gap-4">

                <Sheet>
                    <SheetTrigger className="block lg:hidden" asChild>
                        <Logs className="w-6 h-6 md:h-8 md:w-8" />
                    </SheetTrigger>
                    <SheetContent side="left" className={'max-w-64 w-64'}>
                        <SheetHeader >
                            <SheetTitle className={'hidden'}>Sidebar</SheetTitle>
                            <Logo />
                        </SheetHeader>
                        <Sidebar />
                    </SheetContent>
                </Sheet>

                <Logo />
            </div>
            <div className="flex items-center justify-between gap-4">

                <Link href={'/settings'}>
                    <Settings className="w-9 h-9 border p-2 rounded-full" />
                </Link>

                <Bell className="w-9 h-9 border p-2 rounded-full" />

                <Avatar className={'w-10 h-10'}>
                    <AvatarImage src="/fallback-user-avatar.png" />
                    <AvatarFallback>MV</AvatarFallback>
                </Avatar>
            </div>

        </nav>
    )
}

