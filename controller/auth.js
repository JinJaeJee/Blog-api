import {db} from "../db"

export const register = (req,res)=>{

    ///Check is email or username has  been used

    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q, [req.body.email, req.body.username], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exits")


    })

}


export const login = (req,res)=>{

}


export const logout = (req,res)=>{
    
}

