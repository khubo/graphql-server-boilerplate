import { ApolloServer, gql } from 'apollo-server'
import schema from './schema'
import resolvers from './resolvers'
import 'dotenv/config'

// setup apollo server
const server = new ApolloServer({
  typeDefs: schema,
  resolvers
})

// start apollo server
server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`)
})
