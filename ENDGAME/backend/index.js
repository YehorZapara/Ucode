const express = require("express");

const app = require('express')()
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)
const cors = require("cors")
const mongoose = require("mongoose")

const routes = require("./routes")
const Game = require("./models/Game")


mongoose.connect('mongodb+srv://Yegor:12345@cluster0.z0pca.mongodb.net/app?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on("error", (error) => console.log(error))
db.once("open", () => console.log("Connected to the database"))

app.use(cors())
app.use(express.json())

app.use("/api", routes)


let port = 8000



io.on('connection', (socket) => {
    socket.on(' message', (msg) => {
      console.log('message: ' + msg);
    });
  });

server.listen(port, function () {
    console.log('app running on port ' + port)
})

