"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "TShirtSize",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "Cart",
    embedded: false
  },
  {
    name: "CartItem",
    embedded: false
  },
  {
    name: "Purchase",
    embedded: false
  },
  {
    name: "PurchaseItems",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
