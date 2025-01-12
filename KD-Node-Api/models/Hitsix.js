const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Hitsix = sequelize.define(
  "Hitsix",
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
    hitSixScore: {
      type: DataTypes.INTEGER,
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

Hitsix.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
User.hasOne(Hitsix, { foreignKey: "userId" });

module.exports = Hitsix;
