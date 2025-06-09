'use client'

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const teamData = [
    {
        teamName: "Emergency Response team",
        members: [
            {
                name: "Gilbert Lambert",
                role: "Onsite Emergency Response Manager",
            },
            {
                name: "Joshua Thomas",
                role: "Onsite Emergency Response Manager",
            },
            {
                name: "Harriso Thomas",
                role: "Onsite ERT Leader",
            },
            {
                name: "Mason Lee",
                role: "Onsite ERT Leader",
            },
        ],
    },
    {
        teamName: "HSE team",
        members: [
            {
                name: "Charlotte King",
                role: "HSE Supervisor",
            },
            {
                name: "Ella Smith",
                role: "HSE Supervisor",
            },
            {
                name: "Amelia Harris",
                role: "HSE Coordinator",
            },
        ],
    },
    {
        teamName: "Medical team",
        members: [
            {
                name: "Jasmine Morton",
                role: "Medical Officer",
            },
            {
                name: "Benjamin Thompson",
                role: "Medical Officer",
            },
            {
                name: "Zoe Nguyen",
                role: "Medical Officer",
            },
            {
                name: "Sophie Davis",
                role: "Nurse",
            },
            {
                name: "Ethan Martinez",
                role: "Surgeon",
            },
            {
                name: "Kai Harper",
                role: "Pediatrician",
            },
        ],
    },
];


export const ChatList = () => {

    const router = useRouter()

    return (
        <div className="rounded-lg">
            {teamData?.map(({ teamName, members }, index) => <div className="overflow-hidden" key={teamName}>
                <p onClick={() => router.push(`/chat/${teamName}`)} className={`${index === 0 && 'rounded-t-lg'} text-sm cursor-pointer bg-muted hover:bg-emerald-50 hover:dark:text-black font-semibold text-muted-foreground px-2 py-3`}>{teamName}</p>

                <div className="space-y-2 my-2">
                    {members?.map(({ name, role }) => <div onClick={() => router.push(`/chat/${name}`)} key={name} className="flex cursor-pointer hover:bg-emerald-50 hover:dark:text-black items-center gap-3 p-2">
                        <Avatar>
                            <AvatarFallback className={'uppercase bg-green-50 text-primary font-medium'}>{name.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div>
                            <p className="text-sm font-medium">{name}</p>
                            <p className="text-xs text-muted-foreground">{role}</p>
                        </div>
                    </div>)}
                </div>
            </div>)}
        </div>
    )
}
