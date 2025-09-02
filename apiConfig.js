let baseUrl, socketUrl;

if (import.meta.env.VITE_NODE_ENV === "production") {
  // ⬇ replace with your deployed server domain
  baseUrl = "https://chatapp-server-irx4.onrender.com";
  socketUrl = "wss://chatapp-server-irx4.onrender.com";
} else {
  baseUrl = "http://localhost:4000";
  socketUrl = "wss://localhost:4000";
}

export { baseUrl, socketUrl };
