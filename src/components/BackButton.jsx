'use client'

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export const BackButton = ({ path = '/' }) => {

    const router = useRouter()

    return (
        <div onClick={() => router.replace(path)} className="flex items-center gap-3 cursor-pointer">
            <ArrowLeft className="border p-1 rounded-full bg-background w-7 h-7" />
            <p>Back</p>
        </div>
    )
}
