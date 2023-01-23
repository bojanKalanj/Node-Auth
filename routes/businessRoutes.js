const express = require("express");
const router = express.Router();
const {
  createBusiness,
  getAllBusinesses,
  deleteBusiness,
} = require("../controllers/businessController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createBusiness);
router.get("/", getAllBusinesses);
router.delete("/:id", protect, deleteBusiness);

module.exports = router;
