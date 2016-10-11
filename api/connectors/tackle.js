export default function (db, Sequelize) {
  const TackleModel = db.define('tackle', {
    uid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    pid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tck: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return TackleModel;
}
