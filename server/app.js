const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/type-defs');
const resolvers = require('./graphql/resolvers');

const app = express();

// mongoDB connection
mongoose.connect('mongodb+srv://kaushalchandrapal:abc123123@cluster0.6lezevc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
  });
};

startServer();
