// server.js

import express from "express";
import http from "http";
import { Server } from "socket.io";
import swaggerUi from "swagger-ui-express";

import swaggerSpec from "./config/swagger.js";

const port = 3000;
const app = express();

// Middleware
app.use(express.json());

// Create HTTP server
const server = http.createServer(app);

// Socket setup
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// ==============================
// ROUTES
// ==============================
import userRoutes from "./routes/userRoutes.js";

app.use("/api", userRoutes);

// Swagger
app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Home route
app.get("/", (req, res) => {
  console.log("Hello from the server");
  res.send("Home Page");
});

// ==============================
// SOCKET CONNECTION
// ==============================
io.on("connection", (socket) => {
  console.log("User is connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// ==============================
// START SERVER (IMPORTANT)
// ==============================
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});