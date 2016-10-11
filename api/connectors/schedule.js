export default function (db, Sequelize) {
  const ScheduleModel = db.define('schedule', {
    gid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    seas: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    wk: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    day: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    v: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    h: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    stad: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    surf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return ScheduleModel;
}
