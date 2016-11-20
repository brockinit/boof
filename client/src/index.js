import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BoofRouter from './routes';
import './index.css';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

injectTapEventPlugin();
const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:8000/graphql'),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <BoofRouter />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
