export default function (db, Sequelize) {
  const ConvModel = db.define('conv', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bc: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    psr: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    trg: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    conv: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return ConvModel;
}
