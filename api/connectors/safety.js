export default function (db, Sequelize) {
  const SafetyModel = db.define('safety', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    saf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return SafetyModel;
}
