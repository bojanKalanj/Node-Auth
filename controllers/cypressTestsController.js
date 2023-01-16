const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const deleteLastUser = expressAsyncHandler(async (_req, res) => {
  User.findOneAndDelete({})
    .sort({ createdAt: -1 })
    .exec(function (err, _user) {
      if (err) {
        res.status(400).json({ message: "No user" });
      } else {
        res.status(204).end();
        console.log("User deleted");
      }
    });
});

module.exports = {
  deleteLastUser,
};
