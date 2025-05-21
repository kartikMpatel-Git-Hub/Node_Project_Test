require('dotenv').config()
const express = require('express') // Common JS
// import express from "express" -> new Pattern // Module JS 
const app = express()
// const port = process.env.PORT || 8080
const port = 2000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
  res.send('Hello Kartik!')
})

app.get('/login',(req,res)=>{
    res.send("<h1>You Are Not Logged In Yet..</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})