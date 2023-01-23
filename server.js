const path = require("path");
const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const cors = require("cors");
const onlyDevelopment = require("./middleware/onlyDevelopment");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use(
  "/api/cy-testing",
  onlyDevelopment,
  require("./routes/cypressTestsRoutes")
);
app.use("/api/business", require("./routes/businessRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
