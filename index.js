require('dotenv').config()
const express = require('express') // Common JS
// import express from "express" -> new Pattern // Module JS 
const app = express()
const port = process.env.PORT || 8080
// const port = 2000

const gitData = {
  "login": "kartikMpatel-Git-Hub",
  "id": 156219383,
  "node_id": "U_kgDOCU-39w",
  "avatar_url": "https://avatars.githubusercontent.com/u/156219383?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kartikMpatel-Git-Hub",
  "html_url": "https://github.com/kartikMpatel-Git-Hub",
  "followers_url": "https://api.github.com/users/kartikMpatel-Git-Hub/followers",
  "following_url": "https://api.github.com/users/kartikMpatel-Git-Hub/following{/other_user}",
  "gists_url": "https://api.github.com/users/kartikMpatel-Git-Hub/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kartikMpatel-Git-Hub/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kartikMpatel-Git-Hub/subscriptions",
  "organizations_url": "https://api.github.com/users/kartikMpatel-Git-Hub/orgs",
  "repos_url": "https://api.github.com/users/kartikMpatel-Git-Hub/repos",
  "events_url": "https://api.github.com/users/kartikMpatel-Git-Hub/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kartikMpatel-Git-Hub/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Kartik_Patel",
  "company": null,
  "blog": "",
  "location": "nadiad,Gujrat",
  "email": null,
  "hireable": null,
  "bio": "Currently I'm pursuing My MCA From DDIT , Nadiad",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-01-10T15:50:41Z",
  "updated_at": "2025-04-06T16:53:56Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
  res.send('Hello Kartik!')
})

app.get('/login',(req,res)=>{
    res.send("<h1>You Are Not Logged In Yet..</h1>")
})

app.get('/test',(req,res)=>{
  res.send("Testing For Next Commit !!")
})

app.get('/gitData',(req,res)=>{
  res.json(gitData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})