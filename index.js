import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/login', (req, res) => {
    res.send("This is Login Page")
})

app.listen(port, (req, res) => {
    console.log(`Listening on port http://localhost:${port}`)
})