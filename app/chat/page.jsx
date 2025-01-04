"use client";
import { PhoneCallIcon, SearchIcon, SendHorizonal } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  function getInitials(name) {
    const names = name.split(" ");
    const firstInitial = names[0][0].toUpperCase();
    const lastInitial = names[1] ? names[1][0].toUpperCase() : "";
    return firstInitial + lastInitial;
  }

  const drivers = [
    { id: 1, name: "Miracle", status: "online" },
    { id: 2, name: "Tony", status: "offline" },
    { id: 3, name: "Sarah", status: "online" },
    { id: 4, name: "Emma", status: "online" },
    { id: 5, name: "EEdward", status: "offline" },
    { id: 6, name: "Samson", status: "offline" },
    { id: 7, name: "Medah", status: "offline" },
    { id: 8, name: "Caleb", status: "offline" },
    { id: 8, name: "Caleb", status: "offline" },
    { id: 8, name: "Caleb", status: "offline" },
    { id: 8, name: "Caleb", status: "offline" },
    { id: 8, name: "Caleb", status: "offline" },
  ];

  // Sample chat messages
  const initialMessages = {
    1: [
      { sender: "me", text: "Hey Daniel!" },
      { sender: "Daniel", text: "Hello! How can I help?" },
    ],
    2: [
      { sender: "me", text: "Hey Michael!" },
      { sender: "Michael", text: "Hi! I'll be there soon." },
    ],
    3: [
      { sender: "me", text: "Hi Sarah!" },
      { sender: "Sarah", text: "Good afternoon!" },
    ],
    4: [
      { sender: "me", text: "Hello Emma!" },
      { sender: "Emma", text: "Hi, how are you?" },
    ],
  };

  const [activeDriverId, setActiveDriverId] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add the new message to the messages array for the active driver
    setMessages((prevMessages) => ({
      ...prevMessages,
      [activeDriverId]: [
        ...(prevMessages[activeDriverId] || []),
        { sender: "me", text: newMessage },
      ],
    }));

    // Clear the input field
    setNewMessage("");
  };

  return (
    <div className="flex h-full">
      {/* Driver List */}
      <div className="lg:w-1/3 md:w-1/2 h-full px-1 py-3">
        <h1 className="text-3xl font-bold">Chat Box</h1>
        <div className="w-full border border-dispa8chRed-10 py-1 px-2 flex my-2 rounded">
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Start new chat from your driver list"
          />
          <SearchIcon className="text-dispa8chRed-10 text-sm" />
        </div>
        <div className="overflow-y-scroll h-[65vh] scrollbar-hide">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className={`flex items-center justify-between px-2 py-1 w-full gap-1 cursor-pointer hover:bg-dispa8chRed-100 ${
                activeDriverId === driver.id ? "bg-gray-300" : ""
              }`}
              onClick={() => setActiveDriverId(driver.id)}
            >
              <div className="flex items-center gap-1">
                <div className="flex items-center justify-center font-bold text-lg w-10 h-10 rounded-full bg-dispa8chRed-400 text-white">
                  {getInitials(driver.name)}
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">{driver.name}</p>
                  <p className="text-slate-500">{driver.status}</p>
                </div>
              </div>
              <span className="text-dispa8chRed-10 text-lg font-semibold">
                1
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-full chat-dm-bg relative">
        {/* Chat Header */}
        {activeDriverId && (
          <>
            <div className="flex justify-between items-center chat-dm-top text-white px-3 py-2 shadow-inne">
              <div className="flex items-center gap-1">
                <div className="flex items-center justify-center font-bold text-lg w-10 h-10 rounded-full bg-dispa8chRed-400 text-white">
                  {getInitials(
                    drivers.find((driver) => driver.id === activeDriverId)
                      ?.name || ""
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">
                    {
                      drivers.find((driver) => driver.id === activeDriverId)
                        ?.name
                    }
                  </p>
                </div>
              </div>
              <PhoneCallIcon />
            </div>

            {/* Messages */}
            <div className="overflow-y-scroll  scrollbar-hide h-[calc(100%-80px)] px-3 py-2">
              {messages[activeDriverId]?.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  } my-1`}
                >
                  <p
                    className={`px-3 py-2 rounded-lg ${
                      msg.sender === "me"
                        ? "bg-dispa8chRed-400 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="absolute bottom-1 w-full items-center px-4 py-2 bg-white rounded-sm flex justify-between border border-red-400">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="outline-none p-1 w-full"
                placeholder="Type a message..."
              />
              <button onClick={handleSendMessage}>
                <SendHorizonal className="text-black text-2xl" />
              </button>
            </div>
          </>
        )}

        {!activeDriverId && (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a driver to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
