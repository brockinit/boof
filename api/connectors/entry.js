export default function (db, Sequelize) {
  const EntryModel = db.define('entry', {
    entryid: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    sport: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salarycap: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    score: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    postion: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    entries: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    opponent: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    entrycost: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    winnings: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return EntryModel;
}
