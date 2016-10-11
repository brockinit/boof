export default function (db, Sequelize) {
  const KickerModel = db.define('kicker', {
    uid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    gid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    player: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fgs: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fgm: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fgl: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fp: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    game: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    seas: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    team: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return KickerModel;
}
