const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");

const User = require("./models/User");
const authenticateUser = require("./middlewares/authenticateUser");
const { app, io } = require("./server.js");

const {
    joinGame,
    startGame,
    handleDisconnect,
    openCard,
} = require("./controllers/gameController.js");

const { showHome } = require("./controllers/homeController.js");


io.on("connect", (socket) => {
    socket.on("gameId", (gameId) => startGame(socket, gameId));
    socket.on("openCard", (data) => openCard(socket, data));
    socket.on("disconnect", () => handleDisconnect(socket));
});

mongoose
  .connect("mongodb+srv://Yegor:12345@cluster0.z0pca.mongodb.net/app?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to mongodb cloud!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extened: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(
  cookieSession({
    keys: ["blablablaWOW"],
  })
);

app
  .get("/", (req, res) => {
    res.render("index");
  })
  .get("/login", (req, res) => {
    res.render("login");
  })
  .get("/register", (req, res) => {
    res.render("register");
  })

  .get("/home", authenticateUser, (req, res) => {
    res.render("home", { user: req.session.user });
  }, showHome)

  .get("/home:gameId", joinGame)

app
  .post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.send("Please enter all the fields");
      return;
    }

    const doesUserExits = await User.findOne({ email });

    if (!doesUserExits) {
      res.send("invalid username or password");
      return;
    }

    const doesPasswordMatch = await bcrypt.compare(
      password,
      doesUserExits.password
    );

    if (!doesPasswordMatch) {
      res.send("invalid useranme or password");
      return;
    }

    req.session.user = {
      email,
    };

    res.redirect("/home");
  })

  .post("/register", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.send("Please enter all the fields");
      return;
    }

    const doesUserExitsAlreay = await User.findOne({ email });

    if (doesUserExitsAlreay) {
      res.send("A user with that email already exits please try another one!");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const latestUser = new User({ email, password: hashedPassword });

    latestUser
      .save()
      .then(() => {
        res.send("You have register your account!");
        return;
      })
      .catch((err) => console.log(err));
  });

app.get("/logout", authenticateUser, (req, res) => {
  req.session.user = null;
  res.redirect("/login");
});

