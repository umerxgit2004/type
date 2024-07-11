import express from "express"

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/hellp',(req,res)=>{
    res.send("Hello World")
})

app.listen(5000,()=>{
    console.log("Server is running on Port 5000")
})