const UserService = require("../services/user-service");
const userService = new UserService();
const create = async (req, res) => {
  try {
    const user = await userService.createUser({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      err: {},
      message: "User Created Successfully",
      success: false,
      result: user,
    });
  } catch (error) {
    return res.status(500).json({
      err: error,
      message: "something went wrong",
      success: false,
      result: {},
    });
  }
};
const destroy = async (req, res) => {
  try {
    const response = await userService.destroyUser(req.params.id);
    return res.status(200).json({
      err: {},
      message: "User Deleted Successfully",
      success: true,
      result: response,
    });
  } catch (error) {
    return res.status(500).json({
      err: error,
      message: "something went wrong",
      success: false,
      result: {},
    });
  }
};

module.exports = {
  create,
  destroy,
};
