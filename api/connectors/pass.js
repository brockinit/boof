export default function (db, Sequelize) {
  const PassModel = db.define('pass', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    psr: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    trg: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    loc: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    yds: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    comp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    succ: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    spk: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dfb: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return PassModel;
}
