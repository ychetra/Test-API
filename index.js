const express = require("express");
const data = require("./MOCK_DATA.json")


const app = express()
app.get("/usrs", (req, res)=>{
    return res.json(data)
})

app.listen(3000, console.log('KDMH'))