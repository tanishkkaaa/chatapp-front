import React, { useEffect, useRef } from "react";

const ChatMessages = ({ messages, userDetails, selectedUserId }) => {
  const messagesContainerRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div
      className="absolute bottom-24 w-full px-7 lg:px-20 left-1/2 transform -translate-x-1/2 overflow-y-auto max-h-[75vh]"
      ref={messagesContainerRef}
    >
      {!!selectedUserId && (
        <div className="flex flex-col gap-2">
          {messages.map((message) => {
            const isSender = message.sender === userDetails?._id;
            return (
              <div
                key={message._id}
                className={`text-white relative group rounded-b-2xl px-5 py-3 max-w-[500px] ${
                  isSender
                    ? "bg-primarySecond self-end rounded-l-2xl"
                    : "bg-primary self-start rounded-r-2xl"
                }`}
              >
                <div
                  style={{ wordWrap: "break-word" }}
                  className="flex flex-wrap break-words"
                >
                  {message.text}
                </div>

                {/* Message Bubble Tail */}
                <div
                  className={`absolute top-0 w-0 h-0 border-b-[20px] border-b-transparent ${
                    isSender
                      ? "-right-4 border-l-[20px] border-l-primarySecond"
                      : "-left-4 border-r-[20px] border-r-primary"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      )}

      {selectedUserId && !messages.length && (
        <div className="text-gray-500 flex items-end justify-center mt-4">
          Start a conversation
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
