import React from "react";

const MessageInputForm = ({
  selectedUserId,
  newMessage,
  setNewMessage,
  sendMessage,
}) => {
  return (
    <>
      {!!selectedUserId && (
        <form
          onSubmit={sendMessage}
          className="relative m-4 w-full"
        >
          <input
            type="text"
            id="message-input"
            className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-400 text-white focus:outline-none"
            placeholder="Your Message"
            value={newMessage}
            onChange={(ev) => setNewMessage(ev.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg bg-primary hover:bg-primary/80 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3 4l18 8-18 8 3-8zm0 0h12"
              />
            </svg>
          </button>
        </form>
      )}
    </>
  );
};

export default MessageInputForm;
