const UserRepository = require("../repository/user-repository");
const { JWT_Token } = require("../config/server");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
class UserSrevices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("something went wrong in service layer ");
      throw error;
    }
  }
  async destroyUser(userId) {
    try {
      const response = await this.userRepository.destroyUser(userId);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer ");
      throw error;
    }
  }
  async getUser(userId) {
    try {
      const response = await this.userRepository.getUser(userId);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer ");
      throw error;
    }
  }

  async signIn({email, password:plainPassword}) {
    try {
      const user = await this.userRepository.getUserByEmail(email);
      const checkPassword = this.verifyPassword(plainPassword, user.password);
      if (!checkPassword) {
        console.log("something went wrong");
        thorw({ error: "Invaild Password" });
      }
      const token = this.createToken({ email: user.email, id: user.id });
      return token;
    } catch (error) {
      console.log("something went wrong on Signed In", error);
      throw error;
    }
  }
  createToken(user) {
    try {
      const token = jwt.sign(user, JWT_Token, { expiresIn: "30d" });
      return token;
    } catch (error) {
      console.log("something went wrong on token creation", error);
      throw error;
    }
  }
  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_Token);
      return response;
    } catch (error) {
      console.log("something went wrong on token vaildation", error);
      throw error;
    }
  }
  verifyPassword(plainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(plainPassword, encryptedPassword);
    } catch (error) {
      console.log("something went wrong on check password");
      throw error;
    }
  }
}

module.exports = UserSrevices;
