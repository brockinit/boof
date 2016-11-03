import gql from 'graphql-tag';

export const scheduleQuery = gql`
  query scheduleQuery($seas: Int!, $wk: Int!) {
    schedule(seas: $seas, wk: $wk) {
      v
      h
    }
  }`;
