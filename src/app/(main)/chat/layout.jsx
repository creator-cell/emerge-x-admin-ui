import { ChatList } from "@/components/ChatList"


const chat_layout = ({ children }) => {
    return (
        <div className="space-y-4">

            <h2 className="text-lg lg:text-2xl font-bold capitalize">Chat</h2>

            <div className="w-full flex gap-4 h-[calc(100vh-195px)] lg:h-[calc(100vh-195px)]">

                <div className="w-full border h-full md:w-96 min-w-72 rounded-lg hidden md:block overflow-auto hide-scrollbar">
                    <ChatList />
                </div>

                <div className="w-full border rounded-lg">
                    {children}
                </div>

            </div>

        </div>
    )
}

export default chat_layout