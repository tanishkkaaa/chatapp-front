import React, { useEffect, useState } from "react";
import { useProfile } from "../context/profileContext";
import axios from "axios";
import ChatMessages from "../components/Chat/ChatMessages";
import MessageInputForm from "../components/Chat/MessageInputForm";
import Nav from "../components/Chat/Nav";
import OnlineUserList from "../components/Chat/OnlineUserList";
import TopBar from "../components/Chat/TopBar";
import { socketUrl } from "../../apiConfig";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const ChatHome = () => {
  const ws = new WebSocket(socketUrl);
  const [setWs] = useState(null);
  const [onlinePeople, setOnlinePeople] = useState({});
  const [offlinePeople, setOfflinePeople] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { userDetails } = useProfile();
  const { isAuthenticated, checkAuth } = useAuth();
  const navigate = useNavigate();

  // 🔗 Connect to WebSocket
  const connectToWebSocket = () => {
    const socket = new WebSocket(socketUrl);
    socket.addEventListener("message", handleMessage);
    socket.addEventListener("close", () => {
      console.warn("WebSocket closed. Reconnecting...");
      setTimeout(connectToWebSocket, 1000); // avoid infinite tight loop
    });
    setWs(socket);
  };

  // 📡 Fetch Messages for Selected User
  const fetchMessages = async () => {
    if (!selectedUserId) return;
    try {
      const res = await axios.get(`/api/user/messages/${selectedUserId}`);
      setMessages(res.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // 🔥 Handle WS Messages
  const handleMessage = (ev) => {
    const data = JSON.parse(ev.data);

    if (data.online) {
      showOnlinePeople(data.online);
    } else if (data.text) {
      setMessages((prev) => [...prev, data]);
    }
  };

  // 👥 Show Online People
  const showOnlinePeople = (peopleArray) => {
    const people = {};
    peopleArray.forEach(({ userId, username, avatarLink }) => {
      if (userId !== userDetails?._id) {
        people[userId] = { username, avatarLink };
      }
    });
    setOnlinePeople(people);
  };

  // ✉️ Send Message
  const sendMessage = (e) => {
    e?.preventDefault();
    if (!newMessage.trim() || !selectedUserId) return;

    const message = {
      text: newMessage,
      recipient: selectedUserId,
      sender: userDetails._id,
      _id: Date.now(),
    };

    ws?.send(JSON.stringify(message));
    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  // 🔍 Fetch Offline People
  const fetchOfflinePeople = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/user/people`, { withCredentials: true });
      const offline = res.data
        .filter((p) => p._id !== userDetails?._id)
        .filter((p) => !onlinePeople[p._id])
        .map((p) => ({ ...p, avatarLink: p.avatarLink }));

      const offlineMap = offline.reduce((acc, p) => {
        acc[p._id] = p;
        return acc;
      }, {});
      setOfflinePeople(offlineMap);
    } catch (err) {
      console.error("Error fetching offline people:", err);
    }
  };

  // 🧩 Effects
  useEffect(() => {
    connectToWebSocket();
    checkAuth();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  useEffect(() => {
    fetchMessages();
  }, [selectedUserId]);

  useEffect(() => {
    fetchOfflinePeople();
  }, [onlinePeople, userDetails]);

  return (
    <div className="flex min-h-screen bg-background">
      <Nav />
      <OnlineUsersList
        onlinePeople={onlinePeople}
        offlinePeople={offlinePeople}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
      <section className="w-[71%] lg:w-[62%] relative pb-10">
        {selectedUserId && (
          <TopBar
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
            onlinePeople={onlinePeople}
            offlinePeople={offlinePeople}
          />
        )}
        <ChatMessages
          messages={messages}
          userDetails={userDetails}
          selectedUserId={selectedUserId}
        />
        <div className="absolute bottom-0 w-full flex justify-center">
          <MessageInputForm
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            sendMessage={sendMessage}
            selectedUserId={selectedUserId}
          />
        </div>
      </section>
    </div>
  );
};

export default ChatHome;
