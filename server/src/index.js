const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
// const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Cart = require('./resolvers/Cart')
const { find, filter } = require('lodash');


const resolvers = {
  Query: {
    items: (parent, args, context) => context.prisma.items(),
    item: (parent, args, context) => context.prisma.item({id: args.id}),
    cart: (parent, args, context) => find(carts, {user_id: args.userId}),
  },
  Cart,
  Mutation,
  User,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
