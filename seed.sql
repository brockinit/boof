\c boof;

--
-- Table structure for table entry
--

CREATE TABLE IF NOT EXISTS entry (
  entryid    VARCHAR(30)  NOT NULL,
  sport      VARCHAR(7)   NOT NULL,
  date       DATE         NOT NULL,
  title      VARCHAR(128) NOT NULL,
  salarycap  VARCHAR(30)  NOT NULL,
  score      FLOAT8       NOT NULL,
  position   INTEGER      NOT NULL,
  entries    INTEGER      NOT NULL,
  opponent   VARCHAR(30)  NOT NULL,
  entrycost  INTEGER      NOT NULL,
  winnings   FLOAT8       NOT NULL,
  link       VARCHAR(128) NOT NULL
);
COMMENT ON TABLE entry IS 'FanDuel entries';

--
-- Table structure for table fanduel
--

CREATE TABLE IF NOT EXISTS fanduel (
  week      INTEGER     NOT NULL,
  year      INTEGER     NOT NULL,
  gid       INTEGER     NOT NULL,
  name      VARCHAR(30) NOT NULL,
  pos       VARCHAR(30) NOT NULL,
  team      VARCHAR(7)  NOT NULL,
  homeaway  VARCHAR(7)  NOT NULL,
  oppt      VARCHAR(7)  NOT NULL,
  fdpts     FLOAT8      NOT NULL,
  fdsalary  INTEGER     DEFAULT NULL
);
COMMENT ON TABLE fanduel IS 'FanDuel prices and scores for each player';

--
-- Table structure for table block
--

CREATE TABLE IF NOT EXISTS block (
  pid  INTEGER    NOT NULL,
  blk  VARCHAR(7) NOT NULL,
  brcv VARCHAR(7) DEFAULT NULL
);
COMMENT ON TABLE block IS 'Blocked Punts, Field Goal Attempts, etc.';

-- --------------------------------------------------------

--
-- Table structure for table conv
--

CREATE TABLE IF NOT EXISTS conv (
  pid  INTEGER    NOT NULL,
  type VARCHAR(4) NOT NULL,
  bc   VARCHAR(7) DEFAULT NULL,
  psr  VARCHAR(7) DEFAULT NULL,
  trg  VARCHAR(7) DEFAULT NULL,
  conv SMALLINT   NOT NULL
);
COMMENT ON TABLE conv IS '2 Point Conversion Attempts (Y=Success, N=Fail)';

-- --------------------------------------------------------

--
-- Table structure for table defense
--

CREATE TABLE IF NOT EXISTS defense (
  uid    INTEGER       NOT NULL,
  gid    INTEGER       NOT NULL,
  player VARCHAR(7)    NOT NULL,
  solo   DECIMAL(3, 1) NOT NULL,
  comb   DECIMAL(3, 1) NOT NULL,
  sck    DECIMAL(2, 1) NOT NULL,
  saf    SMALLINT      NOT NULL,
  blk    SMALLINT      NOT NULL,
  ints   SMALLINT      NOT NULL,
  pdef   SMALLINT      NOT NULL,
  frcv   SMALLINT      NOT NULL,
  forc   SMALLINT      NOT NULL,
  tdd    SMALLINT      NOT NULL,
  rety   INTEGER       NOT NULL,
  tdret  SMALLINT      NOT NULL,
  peny   SMALLINT      NOT NULL,
  snp    SMALLINT      NOT NULL,
  fp     DECIMAL(4, 2) NOT NULL,
  fp2    DECIMAL(4, 2) NOT NULL,
  game   SMALLINT      NOT NULL,
  seas   SMALLINT      NOT NULL,
  year   INTEGER       NOT NULL,
  team   VARCHAR(3)    NOT NULL,
  posd   VARCHAR(8)    NOT NULL,
  jnum   SMALLINT      NOT NULL,
  dcp    SMALLINT      NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table drive
--

CREATE TABLE IF NOT EXISTS drive (
  uid   INTEGER    NOT NULL,
  gid   INTEGER    NOT NULL,
  fpid  INTEGER    NOT NULL,
  tname VARCHAR(3) NOT NULL,
  drvn  SMALLINT   NOT NULL,
  obt   VARCHAR(4) DEFAULT NULL,
  qtr   SMALLINT   NOT NULL,
  min   SMALLINT   NOT NULL,
  sec   SMALLINT   NOT NULL,
  yfog  SMALLINT   NOT NULL,
  plays SMALLINT   NOT NULL,
  succ  SMALLINT   NOT NULL,
  rfd   SMALLINT   NOT NULL,
  pfd   SMALLINT   NOT NULL,
  ofd   SMALLINT   NOT NULL,
  ry    INTEGER    NOT NULL,
  ra    SMALLINT   NOT NULL,
  py    INTEGER    NOT NULL,
  pa    SMALLINT   NOT NULL,
  pc    SMALLINT   NOT NULL,
  peyf  SMALLINT   NOT NULL,
  peya  SMALLINT   NOT NULL,
  net   INTEGER    NOT NULL,
  res   VARCHAR(4) DEFAULT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table fgxp
--

CREATE TABLE IF NOT EXISTS fgxp (
  pid     INTEGER    NOT NULL,
  fgxp    VARCHAR(2) NOT NULL,
  fkicker VARCHAR(7) NOT NULL,
  dist    SMALLINT   NOT NULL,
  good    SMALLINT   NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table fumble
--

CREATE TABLE IF NOT EXISTS fumble (
  pid  INTEGER    NOT NULL,
  fum  VARCHAR(7) NOT NULL,
  frcv VARCHAR(7) DEFAULT NULL,
  fry  INTEGER    NOT NULL,
  forc VARCHAR(7) DEFAULT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table game
--

CREATE TABLE IF NOT EXISTS game (
  gid  INTEGER       NOT NULL,
  seas INTEGER       NOT NULL,
  wk   SMALLINT      NOT NULL,
  day  VARCHAR(3)    NOT NULL,
  v    VARCHAR(3)    NOT NULL,
  h    VARCHAR(3)    NOT NULL,
  stad VARCHAR(45)   NOT NULL,
  temp VARCHAR(4)    DEFAULT NULL,
  humd VARCHAR(4)    DEFAULT NULL,
  wspd VARCHAR(4)    DEFAULT NULL,
  wdir VARCHAR(4)    DEFAULT NULL,
  cond VARCHAR(15)   DEFAULT NULL,
  surf VARCHAR(30)   NOT NULL,
  ou   DECIMAL(3, 1) NOT NULL,
  sprv DECIMAL(3, 1) NOT NULL,
  ptsv SMALLINT      NOT NULL,
  ptsh SMALLINT      NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table injury
--

CREATE TABLE IF NOT EXISTS injury (
  gid     INTEGER     NOT NULL,
  player  VARCHAR(7)  NOT NULL,
  team    VARCHAR(3)  NOT NULL,
  details VARCHAR(25) DEFAULT NULL,
  pstat   VARCHAR(35) DEFAULT NULL,
  gstat   VARCHAR(15) DEFAULT NULL
);

COMMENT ON TABLE injury IS 'Player injury status from official league reports';

-- --------------------------------------------------------

--
-- Table structure for table intercpt
--

CREATE TABLE IF NOT EXISTS intercpt (
  pid  INTEGER     NOT NULL,
  psr  VARCHAR(7)  NOT NULL,
  ints VARCHAR(7)  NOT NULL,
  iry  SMALLINT    NOT NULL
);

COMMENT ON TABLE intercpt IS 'Interceptions';

-- --------------------------------------------------------

--
-- Table structure for table kicker
--

CREATE TABLE IF NOT EXISTS kicker (
  uid    INTEGER        NOT NULL,
  gid    INTEGER        NOT NULL,
  player VARCHAR(7)     NOT NULL,
  pat    SMALLINT       NOT NULL,
  fgs    SMALLINT       NOT NULL,
  fgm    SMALLINT       NOT NULL,
  fgl    SMALLINT       NOT NULL,
  fp     DECIMAL(3, 1)  NOT NULL,
  game   SMALLINT       NOT NULL,
  seas   SMALLINT       NOT NULL,
  year   INTEGER        NOT NULL,
  team   VARCHAR(3)     NOT NULL
);

COMMENT ON TABLE kicker IS 'FGS: 0 - 39 yds; FGM: 40 - 49 yds; FGL: 50+ yds';

-- --------------------------------------------------------

--
-- Table structure for table koff
--

CREATE TABLE IF NOT EXISTS koff (
  pid    INTEGER     NOT NULL,
  kicker VARCHAR(7)  NOT NULL,
  kgro   SMALLINT    NOT NULL,
  knet   SMALLINT    NOT NULL,
  ktb    SMALLINT    NOT NULL,
  kr     VARCHAR(7)  DEFAULT NULL,
  kry    SMALLINT    NOT NULL
);

-- --------------------------------------------------------

--
-- Table structure for table offense
--

CREATE TABLE IF NOT EXISTS offense (
  uid    INTEGER        NOT NULL,
  gid    INTEGER        NOT NULL,
  player VARCHAR(7)     NOT NULL,
  pa     SMALLINT       NOT NULL,
  pc     SMALLINT       NOT NULL,
  py     INTEGER        NOT NULL,
  ints   SMALLINT       NOT NULL,
  tdp    SMALLINT       NOT NULL,
  ra     SMALLINT       NOT NULL,
  sra    SMALLINT       NOT NULL,
  ry     INTEGER        NOT NULL,
  tdr    SMALLINT       NOT NULL,
  trg    SMALLINT       NOT NULL,
  rec    SMALLINT       NOT NULL,
  recy   INTEGER        NOT NULL,
  tdrec  SMALLINT       NOT NULL,
  ret    SMALLINT       NOT NULL,
  rety   INTEGER        NOT NULL,
  tdret  SMALLINT       NOT NULL,
  fuml   SMALLINT       NOT NULL,
  peny   SMALLINT       NOT NULL,
  conv   SMALLINT       NOT NULL,
  snp    SMALLINT       NOT NULL,
  fp     DECIMAL(4, 2)  NOT NULL,
  fp2    DECIMAL(4, 2)  NOT NULL,
  fp3    DECIMAL(4, 2)  NOT NULL,
  game   SMALLINT       NOT NULL,
  seas   SMALLINT       NOT NULL,
  year   INTEGER        NOT NULL,
  team   VARCHAR(3)     NOT NULL,
  posd   VARCHAR(8)     NOT NULL,
  jnum   SMALLINT       NOT NULL,
  dcp    SMALLINT       NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table oline
--

CREATE TABLE IF NOT EXISTS oline (
  olid INTEGER    NOT NULL,
  lt   VARCHAR(7) NOT NULL,
  lg   VARCHAR(7) NOT NULL,
  c    VARCHAR(7) NOT NULL,
  rg   VARCHAR(7) NOT NULL,
  rt   VARCHAR(7) NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table pass
--

CREATE TABLE IF NOT EXISTS pass (
  pid  INTEGER    NOT NULL,
  psr  VARCHAR(7) NOT NULL,
  trg  VARCHAR(7) DEFAULT NULL,
  loc  VARCHAR(2) NOT NULL,
  yds  SMALLINT   NOT NULL,
  comp SMALLINT   NOT NULL,
  succ SMALLINT   NOT NULL,
  spk  SMALLINT   NOT NULL,
  dfb  VARCHAR(7) DEFAULT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table penalty
--

CREATE TABLE IF NOT EXISTS penalty (
  uid    INTEGER     NOT NULL,
  pid    INTEGER     NOT NULL,
  ptm    VARCHAR(3)  NOT NULL,
  pen    VARCHAR(7)  DEFAULT NULL,
  "desc" VARCHAR(40) NOT NULL,
  cat    SMALLINT    NOT NULL,
  pey    SMALLINT    NOT NULL,
  act    VARCHAR(1)  NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table play
--

CREATE TABLE IF NOT EXISTS play (
  gid  INTEGER    NOT NULL,
  pid  INTEGER    NOT NULL,
  off  VARCHAR(3) NOT NULL,
  def  VARCHAR(3) NOT NULL,
  type VARCHAR(4) NOT NULL,
  dseq SMALLINT   NOT NULL,
  len  SMALLINT   NOT NULL,
  qtr  SMALLINT   NOT NULL,
  min  SMALLINT   NOT NULL,
  sec  SMALLINT   NOT NULL,
  ptso SMALLINT   NOT NULL,
  ptsd SMALLINT   NOT NULL,
  timo SMALLINT   NOT NULL,
  timd SMALLINT   NOT NULL,
  dwn  SMALLINT   NOT NULL,
  ytg  SMALLINT   NOT NULL,
  yfog SMALLINT   NOT NULL,
  zone SMALLINT   NOT NULL,
  fd   SMALLINT   NOT NULL,
  sg   SMALLINT   NOT NULL,
  nh   SMALLINT   NOT NULL,
  pts  SMALLINT   NOT NULL,
  tck  SMALLINT   NOT NULL,
  sk   SMALLINT   NOT NULL,
  pen  SMALLINT   NOT NULL,
  ints SMALLINT   NOT NULL,
  fum  SMALLINT   NOT NULL,
  saf  SMALLINT   NOT NULL,
  blk  SMALLINT   NOT NULL,
  olid INTEGER    NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table player
--

CREATE TABLE IF NOT EXISTS player (
  player   VARCHAR(7)    NOT NULL,
  fname    VARCHAR(20)   NOT NULL,
  lname    VARCHAR(25)   NOT NULL,
  pname    VARCHAR(25)   NOT NULL,
  pos1     VARCHAR(2)    NOT NULL,
  pos2     VARCHAR(2)    DEFAULT NULL,
  height   SMALLINT      NOT NULL,
  weight   INTEGER       NOT NULL,
  yob      INTEGER       NOT NULL,
  forty    DECIMAL(3, 2) NOT NULL,
  bench    SMALLINT      NOT NULL,
  vertical DECIMAL(3, 1) NOT NULL,
  broad    INTEGER       NOT NULL,
  shuttle  DECIMAL(3, 2) NOT NULL,
  cone     DECIMAL(3, 2) NOT NULL,
  arm      DECIMAL(5, 3) NOT NULL,
  hand     DECIMAL(5, 3) NOT NULL,
  dpos     INTEGER       NOT NULL,
  col      VARCHAR(35)   NOT NULL,
  dv       VARCHAR(35)   DEFAULT NULL,
  start    INTEGER       NOT NULL,
  cteam    VARCHAR(3)    NOT NULL,
  posd     VARCHAR(8)    NOT NULL,
  jnum     SMALLINT      NOT NULL,
  dcp      SMALLINT      NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table punt
--

CREATE TABLE IF NOT EXISTS punt (
  pid    INTEGER    NOT NULL,
  punter VARCHAR(7) NOT NULL,
  pgro   SMALLINT   NOT NULL,
  pnet   SMALLINT   NOT NULL,
  ptb    SMALLINT   NOT NULL,
  pr     VARCHAR(7) DEFAULT NULL,
  pry    SMALLINT   NOT NULL,
  pfc    SMALLINT   NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table redzone
--

CREATE TABLE IF NOT EXISTS redzone (
  uid    INTEGER    NOT NULL,
  gid    INTEGER    NOT NULL,
  player VARCHAR(7) NOT NULL,
  pa     SMALLINT   NOT NULL,
  pc     SMALLINT   NOT NULL,
  py     INTEGER    NOT NULL,
  ints   SMALLINT   NOT NULL,
  ra     SMALLINT   NOT NULL,
  sra    SMALLINT   NOT NULL,
  ry     INTEGER    NOT NULL,
  trg    SMALLINT   NOT NULL,
  rec    SMALLINT   NOT NULL,
  recy   INTEGER    NOT NULL,
  fuml   SMALLINT   NOT NULL,
  peny   SMALLINT   NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table rush
--

CREATE TABLE IF NOT EXISTS rush (
  pid  INTEGER    NOT NULL,
  bc   VARCHAR(7) NOT NULL,
  dir  VARCHAR(2) NOT NULL,
  yds  SMALLINT   NOT NULL,
  succ SMALLINT   NOT NULL,
  kne  SMALLINT   NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table sack
--

CREATE TABLE IF NOT EXISTS sack (
  uid   INTEGER       NOT NULL,
  pid   INTEGER       NOT NULL,
  qb    VARCHAR(7)    NOT NULL,
  sk    VARCHAR(7)    NOT NULL,
  value DECIMAL(2, 1) NOT NULL,
  ydsl  INTEGER       NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table safety
--

CREATE TABLE IF NOT EXISTS safety (
  pid INTEGER     NOT NULL,
  saf VARCHAR(7)  NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table schedule
--

CREATE TABLE IF NOT EXISTS schedule (
  gid  INTEGER     NOT NULL,
  seas INTEGER     NOT NULL,
  wk   SMALLINT    NOT NULL,
  day  VARCHAR(3)  NOT NULL,
  date DATE        NOT NULL,
  v    VARCHAR(3)  NOT NULL,
  h    VARCHAR(3)  NOT NULL,
  stad VARCHAR(45) NOT NULL,
  surf VARCHAR(30) NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table tackle
--

CREATE TABLE IF NOT EXISTS tackle (
  uid   INTEGER       NOT NULL,
  pid   INTEGER       NOT NULL,
  tck   VARCHAR(7)    NOT NULL,
  value DECIMAL(2, 1) NOT NULL
);

COMMENT ON TABLE tackle IS 'Special teams tackles are not counted (ie, kickoffs, punts)';

-- --------------------------------------------------------

--
-- Table structure for table td
--

CREATE TABLE IF NOT EXISTS td (
  pid    INTEGER    NOT NULL,
  qtr    SMALLINT   NOT NULL,
  min    SMALLINT   NOT NULL,
  sec    SMALLINT   NOT NULL,
  dwn    SMALLINT   NOT NULL,
  yds    SMALLINT   NOT NULL,
  pts    SMALLINT   NOT NULL,
  player VARCHAR(7) DEFAULT NULL,
  type   VARCHAR(4) NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table team
--

CREATE TABLE IF NOT EXISTS team (
  tid   INTEGER       NOT NULL,
  gid   INTEGER       NOT NULL,
  tname VARCHAR(3)    NOT NULL,
  pts   SMALLINT      NOT NULL,
  q1p   SMALLINT      NOT NULL,
  q2p   SMALLINT      NOT NULL,
  q3p   SMALLINT      NOT NULL,
  q4p   SMALLINT      NOT NULL,
  rfd   SMALLINT      NOT NULL,
  pfd   SMALLINT      NOT NULL,
  ifd   SMALLINT      NOT NULL,
  ry    INTEGER       NOT NULL,
  ra    SMALLINT      NOT NULL,
  py    INTEGER       NOT NULL,
  pa    SMALLINT      NOT NULL,
  pc    SMALLINT      NOT NULL,
  sk    SMALLINT      NOT NULL,
  ints  SMALLINT      NOT NULL,
  fum   SMALLINT      NOT NULL,
  pu    SMALLINT      NOT NULL,
  gpy   INTEGER       NOT NULL,
  pr    SMALLINT      NOT NULL,
  pry   INTEGER       NOT NULL,
  kr    SMALLINT      NOT NULL,
  kry   INTEGER       NOT NULL,
  ir    SMALLINT      NOT NULL,
  iry   INTEGER       NOT NULL,
  pen   INTEGER       NOT NULL,
  top   DECIMAL(3, 1) NOT NULL,
  td    SMALLINT      NOT NULL,
  tdr   SMALLINT      NOT NULL,
  tdp   SMALLINT      NOT NULL,
  tdt   SMALLINT      NOT NULL,
  fgm   SMALLINT      NOT NULL,
  fgat  SMALLINT      NOT NULL,
  fgy   INTEGER       NOT NULL,
  rza   SMALLINT      NOT NULL,
  rzc   SMALLINT      NOT NULL,
  bry   INTEGER       NOT NULL,
  bpy   INTEGER       NOT NULL,
  srp   SMALLINT      NOT NULL,
  s1rp  SMALLINT      NOT NULL,
  s2rp  SMALLINT      NOT NULL,
  s3rp  SMALLINT      NOT NULL,
  spp   SMALLINT      NOT NULL,
  s1pp  SMALLINT      NOT NULL,
  s2pp  SMALLINT      NOT NULL,
  s3pp  SMALLINT      NOT NULL,
  lea   SMALLINT      NOT NULL,
  ley   INTEGER       NOT NULL,
  lta   SMALLINT      NOT NULL,
  lty   INTEGER       NOT NULL,
  lga   SMALLINT      NOT NULL,
  lgy   INTEGER       NOT NULL,
  mda   SMALLINT      NOT NULL,
  mdy   INTEGER       NOT NULL,
  rga   SMALLINT      NOT NULL,
  rgy   INTEGER       NOT NULL,
  rta   SMALLINT      NOT NULL,
  rty   INTEGER       NOT NULL,
  rea   SMALLINT      NOT NULL,
  rey   INTEGER       NOT NULL,
  r1a   SMALLINT      NOT NULL,
  r1y   INTEGER       NOT NULL,
  r2a   SMALLINT      NOT NULL,
  r2y   INTEGER       NOT NULL,
  r3a   SMALLINT      NOT NULL,
  r3y   INTEGER       NOT NULL,
  qba   SMALLINT      NOT NULL,
  qby   INTEGER       NOT NULL,
  sla   SMALLINT      NOT NULL,
  sly   INTEGER       NOT NULL,
  sma   SMALLINT      NOT NULL,
  smy   INTEGER       NOT NULL,
  sra   SMALLINT      NOT NULL,
  sry   INTEGER       NOT NULL,
  dla   SMALLINT      NOT NULL,
  dly   INTEGER       NOT NULL,
  dma   SMALLINT      NOT NULL,
  dmy   INTEGER       NOT NULL,
  dra   SMALLINT      NOT NULL,
  dry   INTEGER       NOT NULL,
  wr1a  SMALLINT      NOT NULL,
  wr1y  INTEGER       NOT NULL,
  wr3a  SMALLINT      NOT NULL,
  wr3y  INTEGER       NOT NULL,
  tea   SMALLINT      NOT NULL,
  tey   INTEGER       NOT NULL,
  rba   SMALLINT      NOT NULL,
  rby   INTEGER       NOT NULL,
  sga   SMALLINT      NOT NULL,
  sgy   INTEGER       NOT NULL,
  p1a   SMALLINT      NOT NULL,
  p1y   INTEGER       NOT NULL,
  p2a   SMALLINT      NOT NULL,
  p2y   INTEGER       NOT NULL,
  p3a   SMALLINT      NOT NULL,
  p3y   INTEGER       NOT NULL,
  spc   SMALLINT      NOT NULL,
  mpc   SMALLINT      NOT NULL,
  lpc   SMALLINT      NOT NULL,
  q1ra  SMALLINT      NOT NULL,
  q1ry  INTEGER       NOT NULL,
  q1pa  SMALLINT      NOT NULL,
  q1py  INTEGER       NOT NULL,
  lcra  SMALLINT      NOT NULL,
  lcry  INTEGER       NOT NULL,
  lcpa  SMALLINT      NOT NULL,
  lcpy  INTEGER       NOT NULL,
  rzra  SMALLINT      NOT NULL,
  rzry  INTEGER       NOT NULL,
  rzpa  SMALLINT      NOT NULL,
  rzpy  INTEGER       NOT NULL,
  sky   INTEGER       NOT NULL,
  lbs   DECIMAL(3, 1) NOT NULL,
  dbs   DECIMAL(3, 1) NOT NULL,
  sfpy  INTEGER       NOT NULL,
  drv   SMALLINT      NOT NULL,
  npy   INTEGER       NOT NULL,
  tb    SMALLINT      NOT NULL,
  i20   SMALLINT      NOT NULL,
  rtd   SMALLINT      NOT NULL,
  lnr   DECIMAL(3, 1) NOT NULL,
  lnp   DECIMAL(3, 1) NOT NULL,
  lbr   DECIMAL(3, 1) NOT NULL,
  lbp   DECIMAL(3, 1) NOT NULL,
  dbr   DECIMAL(3, 1) NOT NULL,
  dbp   DECIMAL(3, 1) NOT NULL,
  nha   SMALLINT      NOT NULL,
  s3a   SMALLINT      NOT NULL,
  s3c   SMALLINT      NOT NULL,
  l3a   SMALLINT      NOT NULL,
  l3c   SMALLINT      NOT NULL,
  stf   SMALLINT      NOT NULL,
  dp    SMALLINT      NOT NULL,
  fsp   SMALLINT      NOT NULL,
  ohp   SMALLINT      NOT NULL,
  pbep  SMALLINT      NOT NULL,
  dlp   SMALLINT      NOT NULL,
  dsp   SMALLINT      NOT NULL,
  dum   SMALLINT      NOT NULL,
  pfn   SMALLINT      NOT NULL,
  snpo  SMALLINT      NOT NULL,
  snpd  SMALLINT      NOT NULL
);

/* Seed Script */
\COPY entry FROM './fanduel_history_1222.csv' DELIMITER ',' CSV HEADER;

\COPY fanduel FROM './fan_duel_16/wk1.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk2.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk3.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk4.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk5.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk6.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk7.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk8.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk9.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk10.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk11.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk12.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk13.csv' DELIMITER ',' CSV HEADER;
\COPY fanduel FROM './fan_duel_16/wk14.csv' DELIMITER ',' CSV HEADER;

\COPY block FROM './nfl_00-15/csv/BLOCK.csv' DELIMITER ',' CSV HEADER;
\COPY conv FROM './nfl_00-15/csv/conv.csv' DELIMITER ',' CSV HEADER;
\COPY defense FROM './nfl_00-15/csv/defense.csv' DELIMITER ',' CSV HEADER;
\COPY drive FROM './nfl_00-15/csv/drive.csv' DELIMITER ',' CSV HEADER;
\COPY fgxp FROM './nfl_00-15/csv/fgxp.csv' DELIMITER ',' CSV HEADER;
\COPY fumble FROM './nfl_00-15/csv/fumble.csv' DELIMITER ',' CSV HEADER;
\COPY game FROM './nfl_00-15/csv/game.csv' DELIMITER ',' CSV HEADER;
\COPY injury FROM './nfl_00-15/csv/injury.csv' DELIMITER ',' CSV HEADER;
\COPY intercpt FROM './nfl_00-15/csv/intercpt.csv' DELIMITER ',' CSV HEADER;
\COPY kicker FROM './nfl_00-15/csv/kicker.csv' DELIMITER ',' CSV HEADER;
\COPY koff FROM './nfl_00-15/csv/koff.csv' DELIMITER ',' CSV HEADER;
\COPY offense FROM './nfl_00-15/csv/offense.csv' DELIMITER ',' CSV HEADER;
\COPY oline FROM './nfl_00-15/csv/oline.csv' DELIMITER ',' CSV HEADER;
\COPY pass FROM './nfl_00-15/csv/pass.csv' DELIMITER ',' CSV HEADER;
-- \COPY pbp FROM './nfl_00-15/csv/pbp.csv' DELIMITER ',' CSV HEADER;
\COPY penalty FROM './nfl_00-15/csv/penalty.csv' DELIMITER ',' CSV HEADER;
\COPY play FROM './nfl_00-15/csv/play.csv' DELIMITER ',' CSV HEADER;
\COPY player FROM './nfl_00-15/csv/player.csv' DELIMITER ',' CSV HEADER;
\COPY punt FROM './nfl_00-15/csv/punt.csv' DELIMITER ',' CSV HEADER;
\COPY redzone FROM './nfl_00-15/csv/redzone.csv' DELIMITER ',' CSV HEADER;
\COPY rush FROM './nfl_00-15/csv/rush.csv' DELIMITER ',' CSV HEADER;
\COPY sack FROM './nfl_00-15/csv/sack.csv' DELIMITER ',' CSV HEADER;
\COPY safety FROM './nfl_00-15/csv/safety.csv' DELIMITER ',' CSV HEADER;
\COPY tackle FROM './nfl_00-15/csv/tackle.csv' DELIMITER ',' CSV HEADER;
\COPY td FROM './nfl_00-15/csv/td.csv' DELIMITER ',' CSV HEADER;
\COPY team FROM './nfl_00-15/csv/team.csv' DELIMITER ',' CSV HEADER;

\COPY block FROM './nfl_16/csv/block.csv' DELIMITER ',' CSV HEADER;
\COPY conv FROM './nfl_16/csv/conv.csv' DELIMITER ',' CSV HEADER;
\COPY defense FROM './nfl_16/csv/defense.csv' DELIMITER ',' CSV HEADER;
\COPY drive FROM './nfl_16/csv/drive.csv' DELIMITER ',' CSV HEADER;
\COPY fgxp FROM './nfl_16/csv/fgxp.csv' DELIMITER ',' CSV HEADER;
\COPY fumble FROM './nfl_16/csv/fumble.csv' DELIMITER ',' CSV HEADER;
\COPY game FROM './nfl_16/csv/game.csv' DELIMITER ',' CSV HEADER;
\COPY injury FROM './nfl_16/csv/injury.csv' DELIMITER ',' CSV HEADER;
\COPY intercpt FROM './nfl_16/csv/intercpt.csv' DELIMITER ',' CSV HEADER;
\COPY kicker FROM './nfl_16/csv/kicker.csv' DELIMITER ',' CSV HEADER;
\COPY koff FROM './nfl_16/csv/koff.csv' DELIMITER ',' CSV HEADER;
\COPY offense FROM './nfl_16/csv/offense.csv' DELIMITER ',' CSV HEADER;
\COPY oline FROM './nfl_16/csv/oline.csv' DELIMITER ',' CSV HEADER;
\COPY pass FROM './nfl_16/csv/pass.csv' DELIMITER ',' CSV HEADER;
-- \COPY pbp FROM './nfl_16/csv/pbp.csv' DELIMITER ',' CSV HEADER;
\COPY penalty FROM './nfl_16/csv/penalty.csv' DELIMITER ',' CSV HEADER;
\COPY play FROM './nfl_16/csv/play.csv' DELIMITER ',' CSV HEADER;
\COPY player FROM './nfl_16/csv/player.csv' DELIMITER ',' CSV HEADER;
\COPY punt FROM './nfl_16/csv/punt.csv' DELIMITER ',' CSV HEADER;
\COPY redzone FROM './nfl_16/csv/redzone.csv' DELIMITER ',' CSV HEADER;
\COPY rush FROM './nfl_16/csv/rush.csv' DELIMITER ',' CSV HEADER;
\COPY sack FROM './nfl_16/csv/sack.csv' DELIMITER ',' CSV HEADER;
\COPY safety FROM './nfl_16/csv/safety.csv' DELIMITER ',' CSV HEADER;
\COPY schedule FROM './nfl_16/csv/schedule.csv' DELIMITER ',' CSV HEADER;
\COPY tackle FROM './nfl_16/csv/tackle.csv' DELIMITER ',' CSV HEADER;
\COPY td FROM './nfl_16/csv/td.csv' DELIMITER ',' CSV HEADER;
\COPY team FROM './nfl_16/csv/team.csv' DELIMITER ',' CSV HEADER;