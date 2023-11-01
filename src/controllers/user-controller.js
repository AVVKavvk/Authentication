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
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      err: error,
      message: "something went wrong",
      success: false,
      data: {},
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
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      err: error,
      message: "something went wrong",
      success: false,
      data: {},
    });
  }
};
const get = async (req, res) => {
  try {
    const response = await userService.getUser(req.params.id);
    return res.status(200).json({
      err: {},
      message: "User Fetched Successfully",
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      err: error,
      message: "something went wrong",
      success: false,
      data: {},
    });
  }
};
const signIn = async (req, res) => {
  try {
    const user = await userService.signIn({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      err: {},
      message: "User Signed In Successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      err: error,
      message: "something went wrong",
      success: false,
      data: {},
    });
  }
};

const isAuthnetication = async (req, res) => {
  try {
    const token= req.headers['x-access-token'];
    const response= await userService.isAuthnetication(token);
    return res.status(201).json({
      err: {},
      message: "User is Authneticated",
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      err: error,
      message: "something went wrong",
      success: false,
      data: {},
    });
  }
};
module.exports = {
  create,
  destroy,
  get,
  signIn,
  isAuthnetication,
};
