import { BackButton } from "@/components/BackButton"
import { Comments } from "@/components/Comments"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tasks_view = async (props) => {

    const params = await props.params

    return (
        <div className="rounded-lg max-w-7xl space-y-4">
            <BackButton path="/tasks" />

            <div className="rounded-lg shadow-md border">

                <div className="bg-muted rounded-t-lg w-full p-4 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="font-bold text-lg">Demo Request</p>
                            <p className="uppercase text-gray-500 text-sm font-medium">COM-93HS</p>
                        </div>
                    </div>

                    <div>
                        <p className="px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700">In Progress</p>
                    </div>
                </div>

                <div className="p-4 rounded-b-lg ">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div>
                            <p className="text-sm font-medium text-gray-500">Assigned To</p>
                            <p>John Doe</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Role</p>
                            <p>Tech support Manager</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Timer</p>
                            <p>23:05:283</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Description</p>
                            <p>Give demo to Skyline</p>
                        </div>

                    </div>

                </div>
            </div>

            <div className="rounded-lg w-full shadow-lg p-4 max-h-[700px] overflow-auto border">

                <Tabs defaultValue="comments" className="w-full">
                    <TabsList className={'bg-background'}>
                        <TabsTrigger
                            value="comments"
                            className="px-4 py-4 text-md text-muted-foreground cursor-pointer rounded-full
             data-[state=active]:text-green-600
             dark:data-[state=active]:text-green-400
             data-[state=active]:font-medium
             data-[state=active]:opacity-100
             data-[state=active]:bg-green-50
             dark:data-[state=active]:bg-green-900/20"
                        >
                            Comments
                        </TabsTrigger>

                        <TabsTrigger
                            value="history"
                            className="px-4 py-4 text-md text-muted-foreground cursor-pointer rounded-full
             data-[state=active]:text-green-600
             dark:data-[state=active]:text-green-400
             data-[state=active]:font-medium
             data-[state=active]:opacity-100
             data-[state=active]:bg-green-50
             dark:data-[state=active]:bg-green-900/20"
                        >
                            History
                        </TabsTrigger>


                    </TabsList>
                    <TabsContent value="comments" className={'py-6 w-full'}>

                        <Comments />

                    </TabsContent>
                    <TabsContent value="history" className={'py-6 w-full space-y-4'}>

                        {new Array(3).fill(0)?.map((_, index) => <div key={index} className="p-4 bg-muted text-muted-foreground rounded-lg text-sm">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim voluptatum minus porro dolore dolorum placeat corporis eveniet incidunt rem quo.</p>
                        </div>)}

                    </TabsContent>
                </Tabs>


            </div>

        </div>
    )
}

export default tasks_view