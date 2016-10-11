export default function (db, Sequelize) {
  const OffenseModel = db.define('offense', {
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
    pa: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    py: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ints: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tdp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ra: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sra: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tdr: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    trg: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rec: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    recy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tdrec: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ret: {
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
    fuml: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    peny: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    conv: {
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
    fp3: {
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
    posd: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    jnum: {
      type: Sequelize.INTEGER,
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

  return OffenseModel;
}
