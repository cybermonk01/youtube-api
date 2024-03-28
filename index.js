import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express, { Router } from "express";
import { Server } from "socket.io";
import { registerUser } from "./controllers/user.controller.js";
import connectDB from "./db/index.js";
import { upload } from "./middlewares/multer.middleware.js";
import userRouter from "./routes/user.router.js";
const app = express();

const PORT = 5000;

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

connectDB();

const router = Router();

// const io = new Server(app);

// io.on('connection', (socket)=>{
//   console.log(`socket io connected`);

// socket.on('chat message', (msg)=>{
//   console.log('message received', msg);
//       io.emit(`server emiting`,msg)
// });

// socket.on('disconnect', ()=>{
// console.log(`disconnected`);
// })

// })

// router.route("/").get((req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
// router.route("/api/v1").get((req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.get("/api/v1", (req, res) => {
  res.json({ success: true, message: "chal" });
});
app.use("/api/v1/user", userRouter);
app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});
