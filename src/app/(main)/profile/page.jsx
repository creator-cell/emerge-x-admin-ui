'use client'

import { FlexInput } from "@/components/FlexInput"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import { useMemo, useRef, useState } from "react"

const profile = () => {

    const [avatar, setAvatar] = useState(null);
    const avatarRef = useRef(null)

    const avatarPreview = useMemo(() => {
        if (avatar instanceof File) return URL.createObjectURL(avatar);
        return avatar
    }, [avatar]) || '/fallback-user-avatar.png'

    return (
        <div className="space-y-10">
            <h2 className="text-2xl font-bold capitalize">Profile</h2>

            <div className="flex flex-col gap-10 max-w-3xl">
                <div className="flex flex-col">

                    <div className="relative w-fit">

                        <Avatar className={'w-40 h-40 relative border overflow-hidden'}>
                            <AvatarImage src={avatarPreview} className={'object-cover object-center overflow-hidden'} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Pencil onClick={() => avatarRef?.current?.click()} className="absolute bottom-4 right-0 border bg-muted rounded-full p-2 w-8 h-8" />
                        <input ref={avatarRef} type="file" accept="image/*" className="hidden" onChange={(e) => setAvatar(e.target.files[0])} />
                    </div>

                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <FlexInput label={'Name'} isRequired={true} className="md:w-96" placeholder="Enter Name" />
                        <FlexInput label={'Email'} isRequired={true} className="md:w-96" placeholder="Enter Email" type="email" />
                        <FlexInput label={'Contact Number'} isRequired={true} className="md:w-96" placeholder="Enter Contact Number" type="number" />
                        <FlexInput label={'Designation'} isRequired={true} className="md:w-96" placeholder="Enter Designation" />
                    </div>

                    <div className="w-full flex">

                        <Button className={'px-6'}>Save</Button>

                    </div>
                </form>
            </div>


        </div>
    )
}

export default profile