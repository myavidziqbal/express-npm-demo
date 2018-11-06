// const PORT = 3000
const express = require("express")

const app = express()
app.get("/", (req,res) => {
    res.send("This is api demo")
})

app.get("/todos", (req,res) => {
    res.send("Get All Todos")
} )

app.listen(3000, () => console.log("application running on port 3000"))
