import { useState } from "react";
import {
  FiSearch,
  FiSend,
  FiMoreVertical,
  FiPaperclip,
  FiSmile,
  FiPhone,
  FiVideo,
  FiArrowLeft,
//   FiMessageCircle,
  FiHome,
} from "react-icons/fi";

const OwnerMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      name: "Samuel Adeleke",
      avatar: "SA",
      message: "Is the apartment still available?",
      time: "10:42 AM",
      unread: 2,
      property: "Modern 3 Bedroom Apartment",
    },
    {
      name: "Grace Okafor",
      avatar: "GO",
      message: "I'd like to schedule an inspection.",
      time: "Yesterday",
      unread: 1,
      property: "Luxury 2 Bedroom Flat",
    },
    {
      name: "Daniel Williams",
      avatar: "DW",
      message: "Can the rent be negotiated?",
      time: "Yesterday",
      unread: 0,
      property: "4 Bedroom Duplex",
    },
    {
      name: "Michael Johnson",
      avatar: "MJ",
      message: "Thank you for the information.",
      time: "Sep 10",
      unread: 0,
      property: "Modern 3 Bedroom Apartment",
    },
  ];

  const activeConversation = conversations[selectedMessage];

  const handleSelectConversation = (index: number) => {
    setSelectedMessage(index);
    setShowChat(true);
  };

  const handleSend = () => {
    if (!message.trim()) return;

    // Connect this to your API later
    console.log("Sending:", message);

    setMessage("");
  };

  return (
    <div className="h-[calc(100vh-2rem)] min-h-150 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

      {/* Header */}
      <div className="flex h-20 items-center justify-between border-b border-gray-100 px-5 sm:px-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Messages
          </h1>
          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Communicate with potential tenants and customers.
          </p>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl
          text-gray-500 transition hover:bg-gray-50 hover:text-green-600"
        >
          <FiMoreVertical size={20} />
        </button>
      </div>


      {/* Messages Layout */}
      <div className="flex h-[calc(100%-80px)]">

        {/* Conversation List */}
        <div
          className={`w-full border-r border-gray-100 md:w-85 lg:w-95
          ${showChat ? "hidden md:block" : "block"}`}
        >

          {/* Search */}
          <div className="border-b border-gray-100 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
              <FiSearch
                size={18}
                className="shrink-0 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full bg-transparent text-sm text-gray-700 outline-none
                placeholder:text-gray-400"
              />
            </div>
          </div>


          {/* Inbox title */}
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Conversations
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                {conversations.length} conversations
              </p>
            </div>

            <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
              {conversations.filter((item) => item.unread > 0).length} unread
            </span>
          </div>


          {/* Conversations */}
          <div className="h-[calc(100%-125px)] overflow-y-auto">

            {conversations.map((conversation, index) => (
              <button
                key={conversation.name}
                onClick={() => handleSelectConversation(index)}
                className={`flex w-full gap-3 border-b border-gray-50 px-5 py-4
                text-left transition
                ${
                  selectedMessage === index
                    ? "bg-green-50/70"
                    : "hover:bg-gray-50"
                }`}
              >

                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700">
                    {conversation.avatar}
                  </div>

                  {conversation.unread > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-green-600 px-1 text-[9px] font-bold text-white">
                      {conversation.unread}
                    </span>
                  )}
                </div>


                {/* Conversation info */}
                <div className="min-w-0 flex-1">

                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`truncate text-sm ${
                        conversation.unread > 0
                          ? "font-semibold text-gray-900"
                          : "font-medium text-gray-700"
                      }`}
                    >
                      {conversation.name}
                    </h3>

                    <span className="shrink-0 text-[10px] text-gray-400">
                      {conversation.time}
                    </span>
                  </div>

                  <p className="mt-1 truncate text-xs text-gray-500">
                    {conversation.message}
                  </p>

                  <div className="mt-2 flex items-center gap-1.5">
                    <FiHome
                      size={12}
                      className="text-green-500"
                    />

                    <span className="truncate text-[10px] text-gray-400">
                      {conversation.property}
                    </span>
                  </div>

                </div>
              </button>
            ))}

          </div>
        </div>


        {/* Chat */}
        <div
          className={`flex min-w-0 flex-1 flex-col
          ${showChat ? "flex" : "hidden md:flex"}`}
        >

          {/* Chat Header */}
          <div className="flex h-18.25 items-center justify-between border-b border-gray-100 px-4 sm:px-6">

            <div className="flex min-w-0 items-center gap-3">

              {/* Mobile back */}
              <button
                onClick={() => setShowChat(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center
                rounded-lg text-gray-500 hover:bg-gray-50 md:hidden"
              >
                <FiArrowLeft size={19} />
              </button>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700">
                {activeConversation.avatar}
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold text-gray-900">
                  {activeConversation.name}
                </h2>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-400">
                    Online
                  </span>
                </div>
              </div>

            </div>


            {/* Actions */}
            <div className="flex items-center gap-1">
              <button
                className="hidden h-9 w-9 items-center justify-center rounded-lg
                text-gray-500 transition hover:bg-gray-50 hover:text-green-600 sm:flex"
              >
                <FiPhone size={17} />
              </button>

              <button
                className="hidden h-9 w-9 items-center justify-center rounded-lg
                text-gray-500 transition hover:bg-gray-50 hover:text-green-600 sm:flex"
              >
                <FiVideo size={18} />
              </button>

              <button
                className="flex h-9 w-9 items-center justify-center rounded-lg
                text-gray-500 transition hover:bg-gray-50 hover:text-green-600"
              >
                <FiMoreVertical size={18} />
              </button>
            </div>

          </div>


          {/* Property Context */}
          <div className="border-b border-gray-100 bg-gray-50/70 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <FiHome size={17} />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wide text-gray-400">
                  Property enquiry
                </p>

                <p className="truncate text-xs font-medium text-gray-700">
                  {activeConversation.property}
                </p>
              </div>

              <button className="ml-auto shrink-0 text-xs font-medium text-green-600 hover:text-green-700">
                View
              </button>

            </div>
          </div>


          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50/40 px-4 py-6 sm:px-6">

            <div className="mb-6 text-center">
              <span className="rounded-full bg-white px-3 py-1 text-[10px] text-gray-400 shadow-sm">
                Today
              </span>
            </div>


            {/* User message */}
            <div className="mb-5 flex justify-start">
              <div className="max-w-[80%] sm:max-w-[65%]">
                <div className="rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6 text-gray-700">
                    Hello, I'm interested in the property. Is it
                    still available?
                  </p>
                </div>

                <span className="mt-1 block px-1 text-[10px] text-gray-400">
                  10:38 AM
                </span>
              </div>
            </div>


            {/* Owner message */}
            <div className="mb-5 flex justify-end">
              <div className="max-w-[80%] sm:max-w-[65%]">
                <div className="rounded-2xl rounded-tr-md bg-green-600 px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6 text-white">
                    Hi Samuel, yes it is still available. Would you
                    like to schedule an inspection?
                  </p>
                </div>

                <span className="mt-1 block px-1 text-right text-[10px] text-gray-400">
                  10:40 AM · Read
                </span>
              </div>
            </div>


            {/* User message */}
            <div className="flex justify-start">
              <div className="max-w-[80%] sm:max-w-[65%]">
                <div className="rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6 text-gray-700">
                    Is the apartment still available?
                  </p>
                </div>

                <span className="mt-1 block px-1 text-[10px] text-gray-400">
                  10:42 AM
                </span>
              </div>
            </div>

          </div>


          {/* Message Composer */}
          <div className="border-t border-gray-100 bg-white p-3 sm:p-4">

            <div className="flex items-end gap-2">

              <button
                className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center
                rounded-lg text-gray-400 transition hover:bg-gray-50 hover:text-green-600"
              >
                <FiPaperclip size={18} />
              </button>


              <div className="flex min-h-10.5 flex-1 items-center rounded-xl bg-gray-50 px-3">

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a message..."
                  rows={1}
                  className="max-h-28 flex-1 resize-none bg-transparent py-2.5
                  text-sm text-gray-700 outline-none
                  placeholder:text-gray-400"
                />

                <button
                  className="ml-2 shrink-0 text-gray-400 hover:text-green-600"
                >
                  <FiSmile size={18} />
                </button>

              </div>


              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center
                rounded-xl bg-green-600 text-white transition
                hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <FiSend size={17} />
              </button>

            </div>

            <p className="mt-2 hidden text-center text-[10px] text-gray-400 sm:block">
              Keep conversations professional and never share sensitive
              information.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default OwnerMessages;