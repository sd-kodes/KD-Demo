const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Mna = sequelize.define(
  "Mna",
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
    mnaScore: {
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

Mna.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
User.hasOne(Mna, { foreignKey: "userId" });

module.exports = Mna;
