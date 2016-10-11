export default function (db, Sequelize) {
  const FGXPModel = db.define('fgxp', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    fgxp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fkicker: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dist: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    good: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return FGXPModel;
}
