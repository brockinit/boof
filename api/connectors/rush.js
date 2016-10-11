export default function (db, Sequelize) {
  const RushModel = db.define('rush', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    bc: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dir: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    yds: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    succ: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    kne: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return RushModel;
}
