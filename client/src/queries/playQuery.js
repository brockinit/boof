import gql from 'graphql-tag';

export const playQuery = gql`
  query playQuery($team: String!, $seas: Int!, $wk: [Int]!) {
    home:games(seas: $seas, wk: $wk, h: $team) {
      plays(def: $team) {
        rushPlays {
          pid
          bc
          yds
        }
        passPlays {
          pid
          yds
        }
        sacks {
          uid
          pid
          sk
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
        rushPlays {
          pid
          bc
          yds
        }
        passPlays {
          pid
          yds
        }
        sacks {
          uid
          pid
          sk
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