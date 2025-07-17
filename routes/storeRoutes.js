const express = require("express");
const { createStore, getMyStore } = require("../controllers/storeController");
const router = express.Router();

router.post("/store", createStore);
router.get("/store/me", getMyStore);

module.exports = router;