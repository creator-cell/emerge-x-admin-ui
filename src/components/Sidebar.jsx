'use client'

import { usePage } from "@/hooks/usePage.hook"
import Link from "next/link"

export const Sidebar = () => {

    const { pages, isActive } = usePage();
    return (
        <div className="w-64 min-w-64 p-6">

            <div className="space-y-6">
                {pages?.map(({ path, label, Icon }) => <Link className="block" href={path} key={label + path}>
                    <div className={`flex items-center gap-4 ${isActive(path) && 'text-primary font-medium'}`}>
                        <Icon />
                        <p className="capitalize">{label}</p>
                    </div>
                </Link>)}
            </div>
        </div>
    )
}
