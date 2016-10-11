export default function (db, Sequelize) {
  const KickoffModel = db.define('koff', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    kicker: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    kgro: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    knet: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ktb: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    kr: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    kry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return KickoffModel;
}
