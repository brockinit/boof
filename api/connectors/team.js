export default function (db, Sequelize) {
  const TeamModel = db.define('team', {
    tid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    gid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    tname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    q1p: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    q2p: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    q3p: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    q4p: {
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
    ifd: {
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
    sk: {
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
    pu: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    gpy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pr: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    kr: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    kry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ir: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    iry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pen: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    top: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    td: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tdr: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tdp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tdt: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fgm: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fgat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fgy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rza: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rzc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    bry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    bpy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    srp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    s1rp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    s2rp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    s3rp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    spp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    s1pp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    s2pp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    s3pp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lea: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ley: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lta: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lga: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lgy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mda: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mdy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rga: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rgy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rta: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rea: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rey: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    r1a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    r1y: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    r2a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    r2y: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    r3a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    r3y: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    qba: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    qby: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sla: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sly: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sma: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    smy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sra: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dla: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dly: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dma: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dra: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    wr1a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    wr1y: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    wr3a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    wr3y: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tea: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tey: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rba: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rby: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sga: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sgy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    p1a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    p1y: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    p2a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    p2y: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    p3a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    p3y: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    spc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mpc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lpc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    q1ra: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    q1ry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    q1pa: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    q1py: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lcra: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lcry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lcpa: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lcpy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rzra: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rzry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rzpa: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rzpy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sky: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lbs: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    dbs: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    sfpy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    drv: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    npy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tb: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    i20: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rtd: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lnr: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    lnp: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    lbr: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    lbp: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    dbr: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    dbp: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    nha: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    s3a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    s3c: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    l3a: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    l3c: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    stf: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    dp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fsp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ohp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pbep: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dlp: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    dsp: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    dum: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pfn: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    snpo: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    snpd: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return TeamModel;
}
