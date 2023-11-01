const authRequestVaildator = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      data: {},
      success: false,
      error: "Please provide email and password",
      message: "something went wrong",
    });
  }
  next();
};

module.exports = {authRequestVaildator};
