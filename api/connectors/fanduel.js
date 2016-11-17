export default function (db, Sequelize) {
  const FanduelModel = db.define('fanduel', {
    gid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    fdpts: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    week: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pos: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    team: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    homeaway: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    oppt: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fdsalary: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return FanduelModel;
}
