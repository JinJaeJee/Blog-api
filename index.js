import express from "express";
import authRouter from "./routes/auth.js"
import userRouter from "./routes/user.js"
import postRouter from "./routes/posts.js"


const app = express()

app.use(express.json())

app.use("/api/auths", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)

app.listen(8080,()=>{
    console.log("Server is running")
})