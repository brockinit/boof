export default function (db, Sequelize) {
  const PuntModel = db.define('punt', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    punter: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pgro: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pnet: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ptb: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pr: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    pry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pfc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return PuntModel;
}
