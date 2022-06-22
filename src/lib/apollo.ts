import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS,
  cache: new InMemoryCache()
})