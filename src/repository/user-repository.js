const ValidationError  = require( "../utils/validation-error" );
const { User, Role } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      if(error.name=="SequelizeValidationError"){
        throw new ValidationError(error)
      }
      throw error;
    }
  }
  async destroyUser(userId) {
    try {
      const response = await User.destroy({
        where: {
          id: userId,
        },
      });
      return response;
    } catch (error) {
      console.log("somrthing went wrong on repository layer");
      throw error;
    }
  }
  async getUser(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (error) {
      console.log("somrthing went wrong on repository layer");
      throw error;
    }
  }
  async getUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email: email } });
      return user;
    } catch (error) {
      console.log("somrthing went wrong on repository layer");
      throw error;
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const role = await Role.findOne({ where: { name: "ADMIN" } });
      return user.hasRole(role);
    } catch (error) {
      console.log("somrthing went wrong on repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
