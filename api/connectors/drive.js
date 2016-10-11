export default function (db, Sequelize) {
  const DriveModel = db.define('drive', {
    uid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    gid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fpid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    drvn: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    obt: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    qtr: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    min: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sec: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    yfog: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    plays: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    succ: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rfd: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pfd: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ofd: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ra: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    py: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pa: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    peyf: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    peya: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    net: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    res: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return DriveModel;
}
