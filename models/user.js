'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true },
    firstname: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false},
    publickey: {
      type: DataTypes.STRING,
      allowNull: true,
      },
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Wallet, { through: 'UserWallet' });
  };
  return User;
};