import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class Products extends Model {
  id: any;
}

Products.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    sequelize,
    modelName: "products",
    timestamps: false,
  }
);

export default Products;
