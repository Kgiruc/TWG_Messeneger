import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// Twój adres URL serwera GraphQL
const GRAPHQL_API_URL = process.env.EXPO_PUBLIC_API_URL;

// Twój token autoryzacyjny
const AUTH_TOKEN =`Bearer ${process.env.EXPO_PUBLIC_API_KEY}` ;
const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL,
  headers: {
    Authorization: AUTH_TOKEN,
  },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default client;