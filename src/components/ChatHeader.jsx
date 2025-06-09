'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Phone, Video } from "lucide-react";
import { BackButton } from "./BackButton";

export const ChatHeader = ({ name = "John Doe", designation, backRoute = '/', hasBack, videoCallRoute = '/', audioCallRoute = '/', conversationId = "" }) => {

    return (
        <header className="border-b py-3 flex items-center justify-between px-4 bg-muted">
            <div className="flex items-center gap-3">
                {hasBack && <BackButton path="/chat" />}

                <Avatar className="w-8 h-8 bg-emerald-50">
                    <AvatarImage src="" alt={name} />
                    <AvatarFallback className="bg-[#cff7d3] text-emerald-600">{name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-md font-semibold text-[14px]">{name}</h1>
                    <p className="text-xs text-muted-foreground text-[12px]">{designation}</p>
                </div>
            </div>

            <div className="flex gap-2">
                <Button variant="ghost" size="icon" className=" border border-black-700 p-2 w-10 h-10 rounded-full">
                    <Video className="h-5 w-5" />
                </Button>

                <Button variant="ghost" size="icon" className=" border border-black-700 p-2 w-10 h-10 rounded-full">
                    <Phone className="h-5 w-5" />
                </Button>

            </div>


        </header>
    );
};