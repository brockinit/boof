import gql from 'graphql-tag';

export const fanduelQuery = gql`
  query fanduelQuery($week: [Int]!, $pos: [String]!) {
    fanDuel(week: $week, pos: $pos) {
      gid
      fdpts
      week
      name
      pos
      team
      homeaway
      oppt
      fdsalary
    }
  }`;
