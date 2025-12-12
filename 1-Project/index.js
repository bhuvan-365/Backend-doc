require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData =
  {
  "login": "bhuvan-365",
  "id": 178712828,
  "node_id": "U_kgDOCqbw_A",
  "avatar_url": "https://avatars.githubusercontent.com/u/178712828?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/bhuvan-365",
  "html_url": "https://github.com/bhuvan-365",
  "followers_url": "https://api.github.com/users/bhuvan-365/followers",
  "following_url": "https://api.github.com/users/bhuvan-365/following{/other_user}",
  "gists_url": "https://api.github.com/users/bhuvan-365/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/bhuvan-365/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/bhuvan-365/subscriptions",
  "organizations_url": "https://api.github.com/users/bhuvan-365/orgs",
  "repos_url": "https://api.github.com/users/bhuvan-365/repos",
  "events_url": "https://api.github.com/users/bhuvan-365/events{/privacy}",
  "received_events_url": "https://api.github.com/users/bhuvan-365/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Bhuvan Bhattarai ",
  "company": null,
  "blog": "https://www.bhuvanbhattarai07.com.np/",
  "location": "Kathmandu,Nepal",
  "email": null,
  "hireable": true,
  "bio": "Web Development Enthusiast | Solving Problems with Code",
  "twitter_username": null,
  "public_repos": 24,
  "public_gists": 0,
  "followers": 11,
  "following": 12,
  "created_at": "2024-08-18T12:28:13Z",
  "updated_at": "2025-12-09T06:40:27Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Bhuvan bhattrai")
})
app.get("/login",(req,res)=>{
    res.send("<h1>Login Page</h1>")
})
app.get("/youtube",(req,res)=>{
  res.send("</h2>Welcome to my Youtube")
})
app.get('/github',(req,res)=>{
  res.json(githubData)
})
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})