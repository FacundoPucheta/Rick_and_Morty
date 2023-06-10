const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,

      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,

      },
      status: {
         type: DataTypes.ENUM("Alive","Dead","Unknown"),
         defaultValue: "Alive",

      },
      species: {
         type: DataTypes.STRING,

      },
      gender: {
         type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
         defaultValue: "unknown",

      },
      origin: {
         type: DataTypes.TEXT,
         allowNull: false,

      },
      image: {
         type: DataTypes.STRING,
         
      },


   }, { timestamps: false });
};
