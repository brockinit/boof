import gql from 'graphql-tag';

export const cbQuery = gql`
  query cbQuery($team: String!, $seas: Int!, $wk: [Int]!) {
    home:games(seas: $seas, wk: $wk, h: $team) {
      plays(def: $team) {
        passPlays {
          pid
          yds
          loc
          succ
          comp
          dfb
        }
        touchdowns {
          pid
          yds
          pts
          player
          type
        }
      }
    }
    away:games(seas: $seas, wk: $wk, v: $team) {
      plays(def: $team) {
        passPlays {
          pid
          yds
          loc
          succ
          comp
          dfb
        }
        touchdowns {
          pid
          yds
          pts
          player
          type
        }
      }
    }
  }`;