const express = require("express");
const { deleteLastUser } = require("../controllers/cypressTestsController");
const router = express.Router();

router.delete("/delete-last-user", deleteLastUser);

module.exports = router;
