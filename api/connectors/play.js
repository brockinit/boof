export default function (db, Sequelize) {
  const PlayModel = db.define('play', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    gid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    off: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    def: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dseq: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    len: {
      type: Sequelize.INTEGER,
      allowNull: false,
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
    ptso: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ptsd: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    timo: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    timd: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dwn: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ytg: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    yfog: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    zone: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fd: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sg: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nh: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pts: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tck: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sk: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pen: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ints: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fum: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    saf: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    blk: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    olid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return PlayModel;
}
