import { ApolloClient, InMemoryCache } from "@apollo/client";

const url = process.env.BACKEND_URL || "http://localhost:5000"
console.log(process.env.BACKEND_URL)

const client = new ApolloClient({
    uri: `${url}/graphql`,
    cache: new InMemoryCache(),
});

export default client;