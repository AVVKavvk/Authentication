"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const { saltRounds } = require("../config/server");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
    },

    User.beforeCreate(async user => {
      const salt = bcrypt.genSalt(saltRounds);
      const encryptedPassword = bcrypt.hashSync(user.passwors, salt);
      user.password = encryptedPassword;
    }),
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};