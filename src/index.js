import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {ApolloProvider} from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

//The constructor for ApolloClient accepts an ApolloClientOptions object that supports the required and optional fields listed below. These fields make it easy to customize how Apollo works based on your application's needs. (https://www.apollographql.com/docs/react/api/apollo-client/#gatsby-focus-wrapper)
const client = new ApolloClient({
  //Caching is the term for storing reusable responses in order to make subsequent requests faster. ... Subsequent requests for cached content can then be fulfilled from a cache closer to the user instead of sending the request all the way back to the web server.
  cache: new InMemoryCache(),
  //By default, Apollo Client uses Apollo Link's HttpLink to send GraphQL operations to a remote server over HTTP. Apollo Client takes care of creating this default link.
  link: new HttpLink({
    url: 'https://basketball-court-rating-app.herokuapp.com/console/api-explorer',
  })
});

const App = () => {
  return(
    <ApolloProvider client={client}>
      <div>
        <h2>React basketball court yelp app</h2>
      </div>
  </ApolloProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
