require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT
const githubData = {
  "login": "quantstore",
  "id": 176746815,
  "node_id": "U_kgDOCojxPw",
  "avatar_url": "https://avatars.githubusercontent.com/u/176746815?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/quantstore",
  "html_url": "https://github.com/quantstore",
  "followers_url": "https://api.github.com/users/quantstore/followers",
  "following_url": "https://api.github.com/users/quantstore/following{/other_user}",
  "gists_url": "https://api.github.com/users/quantstore/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/quantstore/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/quantstore/subscriptions",
  "organizations_url": "https://api.github.com/users/quantstore/orgs",
  "repos_url": "https://api.github.com/users/quantstore/repos",
  "events_url": "https://api.github.com/users/quantstore/events{/privacy}",
  "received_events_url": "https://api.github.com/users/quantstore/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Bhavesh Chauhan",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-07-27T10:03:50Z",
  "updated_at": "2025-02-04T10:50:16Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) =>{
    res.send('Welcome to Twitter!')
})
// you have to stop and rerun the server again before running new route
app.get('/login',(req,res) =>{
    res.send('<h1>Please Login at Bhavesh.com</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h1>The Programming Adept !</h1>')
})

app.get('/github',(req,res)=>{
    // res.send(`${githubData.login}`)
    res.json(githubData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
