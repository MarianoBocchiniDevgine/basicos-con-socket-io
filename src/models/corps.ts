import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";
import Products from "./products";

class Corps extends Model {}

Corps.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Products,
        key: "id",
      },
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Corps",
    timestamps: false,
  }
);

Products.belongsTo(Corps, { foreignKey: "productId" });
Corps.hasMany(Products, { foreignKey: "productId" });

export default Corps;
