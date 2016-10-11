export default function (db, Sequelize) {
  const GameModel = db.define('game', {
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
    temp: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    humd: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    wspd: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    wdir: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    cond: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    surf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ou: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    sprv: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    ptsv: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ptsh: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return GameModel;
}
