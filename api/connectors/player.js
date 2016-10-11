export default function (db, Sequelize) {
  const PlayerModel = db.define('player', {
    player: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    fname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pos1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pos2: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    height: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    weight: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    yob: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    forty: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    bench: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    vertical: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    broad: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    shuttle: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    cone: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    arm: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    hand: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    dpos: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    col: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dv: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    start: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cteam: {
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

  return PlayerModel;
}
