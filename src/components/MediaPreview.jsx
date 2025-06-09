'use client'

import { X } from "lucide-react";

export const MediaPreview = ({ mediaFiles, onRemove }) => {
    return (
        <div className="flex items-center flex-wrap gap-2">
            {mediaFiles?.map((file, index) => {
                if (!file) return null;

                const url = URL.createObjectURL(file);
                const isImage = file.type.startsWith("image/");
                const isPDF = file.type === "application/pdf";
                const isWord = file.type.includes("word") || file.name.endsWith(".docx");
                const isVideo = file.type.startsWith("video/");
                const isAudio = file.type.startsWith("audio/");

                return (
                    <div
                        key={`${index}-${file.name}`}
                        className="relative w-20 h-20 m-1 rounded-lg flex flex-col items-center justify-center border bg-white px-1 py-2 text-center text-xs text-gray-600 overflow-hidden"
                    >
                        <button
                            onClick={() => onRemove(index)}
                            className="absolute top-0 right-0 m-0.5 p-0.5 bg-white rounded-full shadow hover:bg-red-100"
                        >
                            <X className="w-4 h-4 text-red-500" />
                        </button>

                        {isImage ? (
                            <img
                                className="rounded-md w-full h-full object-cover"
                                src={url}
                                alt="preview"
                            />
                        ) : isPDF ? (
                            <img
                                className="rounded-md h-full object-contain w-8"
                                src={"/pdf.png"}
                                alt="pdf"
                            />
                        ) : isWord ? (
                            <img
                                className="rounded-md h-full object-contain w-8"
                                src={"/doc.png"}
                                alt="doc"
                            />
                        ) : isVideo ? (
                            <img
                                className="rounded-md h-full object-contain w-8"
                                src={"/video.png"}
                                alt="video"
                            />
                        ) : isAudio ? (
                            <img
                                className="rounded-md h-full object-contain w-8"
                                src={"/audio.png"}
                                alt="audio"
                            />
                        ) : (
                            <span className="text-gray-500 font-medium">File</span>
                        )}

                        <span className="text-[10px] w-full truncate mt-1">{file.name}</span>
                    </div>
                );
            })}
        </div>
    );
};
