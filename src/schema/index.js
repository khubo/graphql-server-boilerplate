import { gql } from 'apollo-server'

const schema = gql`
  type Query {
    isOdd(number: Int!): Boolean!
    isEven(number: Int!): Boolean!
  }
`

export default schema
