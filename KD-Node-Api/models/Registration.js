const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Registration = sequelize.define(
  "Registration",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    formData: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    version: true,
  },
  {
    timestamps: true,
  }
);

Registration.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
User.hasMany(Registration, { foreignKey: "userId" });

module.exports = Registration;
