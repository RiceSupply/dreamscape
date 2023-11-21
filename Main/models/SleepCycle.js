const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SleepCycle extends Model {}

SleepCycle.init(
  {
    // primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // hours of sleep user inputted implicit gives sleep condition
    hours_of_sleep: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // when user inputted sleep
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // user fk, foreign key
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sleepcycle',
  }
);

module.exports = SleepCycle;
