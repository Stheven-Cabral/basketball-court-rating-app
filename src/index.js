import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import App from './App';


// By default, Apollo Client uses Apollo Link's HttpLink to send GraphQL operations to the Hasura graphQL engine over HTTP. 
// The Hasura graphQL enginer takes care of creating this default link.
const httpLink = new HttpLink({
  uri: `https://basketball-court-rating-app.herokuapp.com/v1/graphql`,
});


// WEbSocketLink allows the application to send sucription requests over WebSockets to the provided Hasura graphQL link.
const wsLink = new WebSocketLink({
  uri: `wss://basketball-court-rating-app.herokuapp.com/v1/graphql`,
  options: {
    reconnect: true
  }
});


// The splitLink method allows the application to split connections between `httpLink` and `wsLink`.
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


//The constructor for ApolloClient accepts an ApolloClientOptions object that supports the required and optional fields listed below. 
// These fields make it easy to customize how Apollo works based on your application's needs. (https://www.apollographql.com/docs/react/api/apollo-client/#gatsby-focus-wrapper)
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
});

// `ApolloProvider`component wraps to the `App` component to provide sub components with `client` prop.
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
