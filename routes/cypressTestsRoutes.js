const express = require("express");
const {
  deleteLastUser,
  getLastUser,
} = require("../controllers/cypressTestsController");
const router = express.Router();

router.delete("/delete-last-user", deleteLastUser);
router.get("/get-last-user", getLastUser);

module.exports = router;
