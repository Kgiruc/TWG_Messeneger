import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// Twój adres URL serwera GraphQL
const GRAPHQL_API_URL = 'https://chat.thewidlarzgroup.com/api/graphql';

// Twój token autoryzacyjny
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2OTQwNDI3NjEsImlhdCI6MTY5MTYyMzU2MSwiaXNzIjoiY2hhdGx5IiwianRpIjoiOTAzNTkwMmItNjVlNS00NTM5LTk2NjUtMTk5YWU4OGQ1YmZmIiwibmJmIjoxNjkxNjIzNTYwLCJzdWIiOiJkY2Y2YmZkYy03YzBiLTQ5YzktYTYzNS0xMmUxY2ZjNDIzZDIiLCJ0eXAiOiJhY2Nlc3MifQ.pAMJW46U0rs-S1P6vVbOdZJfkdoZwyv7k9mwKChg4XU6ZWOxVhw5l5_xZGGCphZhItetksOZQTJqFTO1B-biew';

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