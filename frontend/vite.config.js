import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Bind to 0.0.0.0 for external access
    port: 3000,
    proxy: {
      "/api": {
        target: "https://x-clone-10.onrender.com", // Your production backend URL
        changeOrigin: true,
        secure: true, // Make sure to use secure connections in production
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: removes "/api" from the request
      },
    },
  },
});
