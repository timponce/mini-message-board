const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

// GET new message form
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

// POST the message
router.post("/new", function (req, res) {
  var messageText = req.body.messageText;
  var messageUser = req.body.messageUser;
  messages.unshift({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;
