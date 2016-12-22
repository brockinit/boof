import React, { Component, PropTypes } from 'react';
import { entryQuery } from '../../queries';
import { withApollo } from 'react-apollo';
import ApolloClient from 'apollo-client';

const initialState = {
  sortField: '',
};

class EntryHistory extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.changeSortBy = this.changeSortBy.bind(this);
    this.sortResult = this.sortResult.bind(this);
  }

  componentDidMount() {
    /* Query fanduel entry data */
    this.props.client.query({
      query: entryQuery,
    })
    .then(({ data: { entries } }) => {
      const averagePositions = entries.map(({ position, entries }) => {
        return +((position / entries) * 100).toFixed(2);
      });

      console.log(averagePositions, 'averagePositions');
      const topFifty = averagePositions.filter((position) => position < 50);
      console.log(topFifty.length, 'top half finishes');
      console.log(topFifty.length / entries.length, 'percentage in the top half');
    });
  }

  changeSortBy(e, i, value) {
    this.setState({ sortField: value });
  }

  sortResult(fpPer) {
    return fpPer
      .sort((a, b) => a[this.state.sortField] - b[this.state.sortField])
      .filter(({ opponent }) => opponent !== 'BYE');
  }

  render() {
    return (
      <div className="container">

      </div>
    );
  }
}

EntryHistory.propTypes = {
  client: PropTypes.instanceOf(ApolloClient).isRequired,
}

export default withApollo(EntryHistory);
