export default function (db, Sequelize) {
  const RedzoneModel = db.define('redzone', {
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
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ints: {
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
    fuml: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    peny: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return RedzoneModel;
}
