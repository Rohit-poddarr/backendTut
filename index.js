require('dotenv').config()

const express = require('express')
const app = express()
const port = 500

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/twitter',(req,res)=>{
    res.send("hitesh.com")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai.com</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai or code</h2>')
})

app.listen(process.env.port, ()=>{
    console.log(`app listening on port ${port}`)
})
