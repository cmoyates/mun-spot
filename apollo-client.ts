import { ApolloClient, InMemoryCache } from "@apollo/client";

const url = process.env.BACKEND_URL || "http://localhost:5000";

const client = new ApolloClient({
    uri: `${url}/graphql`,
    cache: new InMemoryCache(),
});

export default client;