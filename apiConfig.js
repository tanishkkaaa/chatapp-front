let baseUrl;
let socketUrl;

if (import.meta.env.VITE_NODE_ENV === "production") {
  // Production URLs
  baseUrl = import.meta.env.VITE_API_URL || "https://chatapp-server-irx4.onrender.com";
  socketUrl = import.meta.env.VITE_WS_URL || "wss://chatapp-server-irx4.onrender.com";
} else {
  // Local development URLs
  baseUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";
  socketUrl = import.meta.env.VITE_WS_URL || "ws://localhost:4000";
}

export { baseUrl, socketUrl };
