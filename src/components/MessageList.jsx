import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const dummyMessages = [
    {
        sid: "1",
        author: "user_123",
        body: "Hey team, any updates on the emergency drill?",
        dateCreated: new Date().toISOString(),
        attributes: {
            attributes: {
                firstName: "Gilbert",
                lastName: "Lambert",
                team: "Emergency Response",
            },
        },
    },
    {
        sid: "2",
        author: "user_456",
        body: "Yes, the schedule is finalized for tomorrow 10 AM.",
        dateCreated: new Date(Date.now() - 5 * 60000).toISOString(),
        attributes: {
            attributes: {
                firstName: "Charlotte",
                lastName: "King",
                team: "HSE",
            },
        },
    },
    {
        sid: "3",
        author: "user_789",
        body: "Medical team will be on standby as discussed.",
        dateCreated: new Date(Date.now() - 10 * 60000).toISOString(),
        attributes: {
            attributes: {
                firstName: "Jasmine",
                lastName: "Morton",
                team: "Medical",
            },
        },
    },
    {
        sid: "4",
        author: "user_123",
        body: "Perfect. Let’s make sure communication is clear during the event.",
        dateCreated: new Date(Date.now() - 12 * 60000).toISOString(),
        attributes: {
            attributes: {
                firstName: "Gilbert",
                lastName: "Lambert",
                team: "Emergency Response",
            },
        },
    },
    {
        sid: "5",
        author: "user_456",
        body: "I'll circulate the checklist shortly.",
        dateCreated: new Date(Date.now() - 15 * 60000).toISOString(),
        attributes: {
            attributes: {
                firstName: "Charlotte",
                lastName: "King",
                team: "HSE",
            },
        },
    },
    {
        sid: "6",
        author: "user_789",
        body: "And we’ll have two ambulances on site just in case.",
        dateCreated: new Date(Date.now() - 20 * 60000).toISOString(),
        attributes: {
            attributes: {
                firstName: "Jasmine",
                lastName: "Morton",
                team: "Medical",
            },
        },
    },
];



export const MessageList = ({
    messages,
    loading,
    clientUser,
    messagesEndRef,
}) => {

    return (
        <div className="flex-1 flex flex-col p-4 gap-3 overflow-auto hide-scrollbar">
            {loading ? (
                Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"} h-full`}
                    >
                        <Skeleton className="h-16 w-2/3 bg-gray-200 rounded-tr-xl rounded-l-xl" />
                    </div>
                ))
            ) : (
                <>
                    {dummyMessages.map((msg) => {
                        const attributes = Object(msg?.attributes)?.attributes;
                        const isOwnMessage = msg?.author === 'user_123';

                        return (
                            <div
                                key={msg?.sid}
                                className={`max-w-[70%] flex gap-1 text-white ${isOwnMessage ? "self-end" : "self-start"
                                    }`}
                            >
                                {!isOwnMessage && (
                                    <Avatar className="w-8 h-8 self-end">
                                        <AvatarImage src="" alt="" />
                                        <AvatarFallback
                                            className={`bg-green-800 text-white`}
                                        >
                                            {attributes?.firstName?.[0] || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                )}

                                <div
                                    className={`${isOwnMessage
                                        ? "bg-[rgba(55,55,55,1)] rounded-tr-xl rounded-l-xl"
                                        : "bg-[#177604] rounded-tl-xl rounded-r-xl"
                                        } px-3 py-2 w-full`}
                                >
                                    {!isOwnMessage && (
                                        <p className="text-white font-medium text-xs my-1">
                                            ~ {`${attributes?.firstName || "Unknown"} ${attributes?.lastName ?? ""
                                                }`}
                                        </p>
                                    )}

                                    {msg?.body && <p className="text-xs">{msg.body}</p>}

                                    {/* <MediaRenderer msg={msg} /> */}

                                    <span
                                        className={`text-xs block mt-1 ${isOwnMessage
                                            ? "text-gray-400 text-right"
                                            : "text-gray-200 text-left"
                                            }`}
                                    >
                                        {new Date(msg?.dateCreated ?? "").toLocaleString("en-IN", {
                                            timeStyle: "short",
                                        })}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                    <div ref={messagesEndRef} />
                </>
            )}
        </div>
    );
};