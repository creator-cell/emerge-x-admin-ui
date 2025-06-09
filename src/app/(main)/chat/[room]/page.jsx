import { ChatHeader } from "@/components/ChatHeader"
import { MessageInput } from "@/components/MessageInput"
import { MessageList } from "@/components/MessageList"

const chat_room = async (props) => {

    const params = await props.params;

    return (
        <div className="w-full h-full flex flex-col overflow-hidden hide-scrollbar rounded-lg">
            <ChatHeader name={decodeURI(params?.room)} />

            <div className="flex-1 flex flex-col gap-3 overflow-auto hide-scrollbar">
                <MessageList />
            </div>

            <MessageInput />


        </div>
    )
}

export default chat_room