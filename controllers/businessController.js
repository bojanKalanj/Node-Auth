const asyncHandler = require("express-async-handler");
const businessModel = require("../models/businessModel");

// @desc    Creates new business
// @route   POST /api/business
// @access  Public
const createBusiness = asyncHandler(async (req, res) => {
  const { name, description, ownerId } = req.body;

  if (!name || !description || !ownerId) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const business = await businessModel.create({
    name,
    description,
    owner: ownerId,
  });

  if (business) {
    res.status(201).json({
      _id: business.id,
      name: business.name,
      description: business.description,
      owner: business.owner,
    });
  } else {
    res.status(400);
    throw new Error("Invalid business data");
  }
});

// @desc    Get all businesses
// @route   GET /api/business
// @access  Public
const getAllBusinesses = asyncHandler(async (_req, res) => {
  const businesses = await businessModel.find();
  res.json({
    success: true,
    count: businesses.length,
    data: businesses,
  });
});

// @desc    Delete business
// @route   DELETE /api/business/:id
// @access  Protected
const deleteBusiness = asyncHandler(async (req, res) => {
  const business = await businessModel.findById(req.params.id);
  if (!business)
    return res
      .status(404)
      .json({ success: false, message: "Business not found" });

  if (business.owner.toString() !== req.user.id)
    return res.status(401).json({ success: false, message: "Not authorized" });

  await business.remove();
  res.status(200).json({ success: true });
});

module.exports = {
  createBusiness,
  getAllBusinesses,
  deleteBusiness,
};
