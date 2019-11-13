module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define('todo', {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
  });
  return Todo;
};
