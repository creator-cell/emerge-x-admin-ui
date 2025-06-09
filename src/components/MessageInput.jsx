'use client'

import { MediaPreview } from "./MediaPreview";
import { Button } from "./ui/button";
import { Loader2, Paperclip, SendHorizontal } from "lucide-react";

export const MessageInput = ({
    text,
    setText = function () { },
    mediaFiles,
    handleRemoveFile = function () { },
    mediaRef,
    handleFileUpload = function () { },
    sendingMedia,
    handleSendMessage = function () { }
}) => {
    return (
        <div
            className={`w-full border-t flex ${mediaFiles?.length > 0 ? "items-end" : "items-center"
                } p-4 justify-between gap-4`}
        >
            <div className="flex w-full items-end justify-between rounded-lg bg-muted">
                <div className="flex-1">
                    <MediaPreview mediaFiles={mediaFiles} onRemove={handleRemoveFile} />
                    <textarea
                        name="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type your message"
                        className="rounded-lg w-full border-0 focus:outline-none focus:ring-0 focus:border-transparent bg-muted resize-none overflow-auto max-h-40 p-2"
                        rows={1}
                    />
                </div>
                <div
                    onClick={() => mediaRef?.current?.click()}
                    className="p-1 m-3 rounded-lg items-center justify-center border-gray-400 border cursor-pointer"
                >
                    <Paperclip className="text-muted-foreground w-4 h-4" />
                    <input
                        type="file"
                        multiple
                        accept="image/*,application/pdf,.doc,.docx,video/*,audio/*"
                        onChange={handleFileUpload}
                        ref={mediaRef}
                        className="hidden"
                    />
                </div>
            </div>
            <Button
                disabled={sendingMedia}
                onClick={handleSendMessage}
                className={`${mediaFiles?.length > 0 ? "mb-2" : "mt-0"
                    } bg-gradient-to-r from-[rgba(36,120,20,1)] to-[rgba(61,162,41,1)] hover:bg-green-700 text-white p-2 w-10 h-10 rounded-full flex items-center justify-center`}
            >
                {sendingMedia ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    <SendHorizontal />
                )}
            </Button>
        </div>
    );
};
