export default function (db, Sequelize) {
  const TouchdownModel = db.define('td', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    qtr: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    min: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sec: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dwn: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    yds: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pts: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    player: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return TouchdownModel;
}
