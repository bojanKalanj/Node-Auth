function onlyDevelopment(_req, res, next) {
  if (process.env.NODE_ENV !== "production") {
    console.log("In development environment");
    next();
  } else {
    console.log("Not in development environment ", process.env.NODE_ENV);
    res
      .status(400)
      .send("This route is only available in development environment");
  }
}

module.exports = onlyDevelopment;
