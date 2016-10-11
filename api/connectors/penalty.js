export default function (db, Sequelize) {
  const PenaltyModel = db.define('penalty', {
    uid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    pid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pen: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    ptm: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    desc: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pey: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    act: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return PenaltyModel;
}
