const express = require("express");
const { findChat, userChats, createChat } = require("../Controllers/ChatController");
const router = express.Router()

router.post("/", createChat);
router.get("/:userId", userChats)
router.get("/find/:firstId/:secondId", findChat)

module.exports= router;