export default function (db, Sequelize) {
  const IntercptModel = db.define('intercpt', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    psr: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ints: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    iry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return IntercptModel;
}
