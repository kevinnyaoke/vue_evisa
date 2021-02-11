// yarn add vue-apollo graphql apollo-client apollo-link apollo-link-http apollo-cache-inmemory graphql-tag
//Then add .env file in the project name root with the following code:
// VUE_APP_STRAPI_API_URL=http://localhost:1337
// VUE_APP_GRAPHQL_URL="http://localhost:1337/graphql"

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: process.env.VUE_APP_GRAPHQL_URL || "http://localhost:1337/graphql"
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

export default apolloClient;