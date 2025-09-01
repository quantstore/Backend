// js have two ways to import a file : common js and module js
// this is common js : here the code comes synchronously;
// const express = require('express')
// this is module js: code comes asynchronously;
import express from 'express'
const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome Home!')
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Classic Dad Joke",
            "content": "Why don't skeletons fight each other? Because they don't have the guts."
        },
        {
            "id": 2,
            "title": "Math Joke",
            "content": "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
        },
        {
            "id": 3,
            "title": "Programming Joke",
            "content": "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            "id": 4,
            "title": "Animal Joke",
            "content": "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            "id": 5,
            "title": "Food Joke",
            "content": "Why don’t eggs tell jokes? Because they might crack up."
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})

