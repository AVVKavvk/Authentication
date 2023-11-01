const { User } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("somrthing went wrong on repository layer");
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
}

module.exports = UserRepository;
