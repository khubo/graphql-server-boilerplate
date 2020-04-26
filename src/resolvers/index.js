const resolvers = {
  Query: {
    isOdd: (_, { number }) => {
      return number % 2 !== 0
    },
    isEven: (_, { number }) => {
      return number % 2 !== 0
    }
  }
}

export default resolvers
