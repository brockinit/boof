export default function (db, Sequelize) {
  const OLineModel = db.define('oline', {
    olid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    lt: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lg: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    c: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    rg: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    rt: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return OLineModel;
}
