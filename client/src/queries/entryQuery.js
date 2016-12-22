import gql from 'graphql-tag';

export const entryQuery = gql`
  query entryQuery {
    entries {
      sport
      date
      title
      salarycap
      score
      postion
      entries
      opponent
      entrycost
      winnings
      link
    }
  }`;
