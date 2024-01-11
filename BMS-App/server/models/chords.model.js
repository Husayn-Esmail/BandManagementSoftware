module.exports = (sequelize, Sequelize) => {
  const Chords = sequelize.define('chords', {
    note: {
      type: Sequelize.STRING,
    },
    interval: {
      type: Sequelize.INTEGER,
    },
  });

  return Chords;
};
