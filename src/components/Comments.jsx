import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

export const Comments = () => {
    return (
        <div className="w-full space-y-4">
            <form className="space-y-4">

                <Textarea required placeholder="Add your comments here" className={'rounded-lg w-full pt-4 text-sm'} />

                <div className="flex items-center gap-4">

                    <Button type="submit" className={'px-4'}>
                        Save
                    </Button>

                    <Button variant={'secondary'} type="reset" className={'px-4'}>
                        Cancel
                    </Button>

                </div>
            </form>

            <div className="space-y-6 mt-6">
                {new Array(2).fill(0)?.map((_, index) => <div key={index} className="space-y-2 ">
                    <div className="flex items-center gap-3">
                        <Avatar className={'w-10 h-10'}>
                            <AvatarImage src="" alt="@shadcn" />
                            <AvatarFallback className={'text-sm bg-green-100 text-green-800 p-1'}>M</AvatarFallback>
                        </Avatar>

                        <div>
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs font-medium text-gray-500">Tech Support Manager</p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-muted text-sm p-4 space-y-2 rounded-lg text-muted-foreground w-full">
                        <p>Connected with the client and scheduled the time for demo</p>
                        <p className="text-xs">10:35 AM, 13 Nov</p>
                    </div>
                </div>)}
            </div>


        </div>
    )
}
