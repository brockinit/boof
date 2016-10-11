export default function (db, Sequelize) {
  const BlockModel = db.define('block', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    blk: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    brcv: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return BlockModel;
}
