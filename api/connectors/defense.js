export default function (db, Sequelize) {
  const DefenseModel = db.define('defense', {
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
    solo: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    comb: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    sck: {
      type: Sequelize.DECIMAL,
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
    ints: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pdef: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    frcv: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    forc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tdd: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rety: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tdret: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    peny: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    snp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fp: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    fp2: {
      type: Sequelize.DECIMAL,
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
    posd: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    jnum: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    dcp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return DefenseModel;
}
