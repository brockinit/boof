export default function (db, Sequelize) {
  const InjuryModel = db.define('injury', {
    gid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    player: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    team: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    details: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    pstat: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    gstat: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return InjuryModel;
}
