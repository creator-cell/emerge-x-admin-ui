import { ChatList } from "@/components/ChatList"

const chat = () => {
    return (
        <div className="h-full ">
            <div className="block md:hidden h-full overflow-auto md:overflow-x-hidden hide-scrollbar">
                <ChatList />
            </div>

            <div className=" hidden bg-muted md:flex gap-2 flex-col rounded-lg justify-center items-center h-full">
                <img src="/chat.png" alt="chat" className="w-20" />
                <p className="text-gray-400">Start chatting with your team mates</p>
            </div>
        </div>
    )
}

export default chat