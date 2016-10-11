export default function (db, Sequelize) {
  const FumbleModel = db.define('fumble', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    fum: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    frcv: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    fry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    forc: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return FumbleModel;
}
