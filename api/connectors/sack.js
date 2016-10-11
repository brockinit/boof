export default function (db, Sequelize) {
  const SackModel = db.define('sack', {
    uid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    pid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    qb: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sk: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    ydsl: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return SackModel;
}
