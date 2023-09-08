import express from "express"
import { register, login, logout } from "../controller/auth.js"


const router = express.Router()

app.post("/register", register)
app.post("/login", login)
app.post("/logout", logout)


export default router