import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:8000/graphql'),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
