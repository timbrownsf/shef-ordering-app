module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCart {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregatePurchase {
  count: Int!
}

type AggregatePurchaseItems {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Cart {
  id: ID!
  user: User!
  createdAt: DateTime!
  updatedAt: DateTime!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
}

type CartConnection {
  pageInfo: PageInfo!
  edges: [CartEdge]!
  aggregate: AggregateCart!
}

input CartCreateInput {
  id: ID
  user: UserCreateOneWithoutCartInput!
  items: ItemCreateManyWithoutCartsInput
}

input CartCreateManyWithoutItemsInput {
  create: [CartCreateWithoutItemsInput!]
  connect: [CartWhereUniqueInput!]
}

input CartCreateOneWithoutUserInput {
  create: CartCreateWithoutUserInput
  connect: CartWhereUniqueInput
}

input CartCreateWithoutItemsInput {
  id: ID
  user: UserCreateOneWithoutCartInput!
}

input CartCreateWithoutUserInput {
  id: ID
  items: ItemCreateManyWithoutCartsInput
}

type CartEdge {
  node: Cart!
  cursor: String!
}

enum CartOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CartPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CartScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CartScalarWhereInput!]
  OR: [CartScalarWhereInput!]
  NOT: [CartScalarWhereInput!]
}

type CartSubscriptionPayload {
  mutation: MutationType!
  node: Cart
  updatedFields: [String!]
  previousValues: CartPreviousValues
}

input CartSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CartWhereInput
  AND: [CartSubscriptionWhereInput!]
  OR: [CartSubscriptionWhereInput!]
  NOT: [CartSubscriptionWhereInput!]
}

input CartUpdateInput {
  user: UserUpdateOneRequiredWithoutCartInput
  items: ItemUpdateManyWithoutCartsInput
}

input CartUpdateManyWithoutItemsInput {
  create: [CartCreateWithoutItemsInput!]
  delete: [CartWhereUniqueInput!]
  connect: [CartWhereUniqueInput!]
  set: [CartWhereUniqueInput!]
  disconnect: [CartWhereUniqueInput!]
  update: [CartUpdateWithWhereUniqueWithoutItemsInput!]
  upsert: [CartUpsertWithWhereUniqueWithoutItemsInput!]
  deleteMany: [CartScalarWhereInput!]
}

input CartUpdateOneWithoutUserInput {
  create: CartCreateWithoutUserInput
  update: CartUpdateWithoutUserDataInput
  upsert: CartUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: CartWhereUniqueInput
}

input CartUpdateWithoutItemsDataInput {
  user: UserUpdateOneRequiredWithoutCartInput
}

input CartUpdateWithoutUserDataInput {
  items: ItemUpdateManyWithoutCartsInput
}

input CartUpdateWithWhereUniqueWithoutItemsInput {
  where: CartWhereUniqueInput!
  data: CartUpdateWithoutItemsDataInput!
}

input CartUpsertWithoutUserInput {
  update: CartUpdateWithoutUserDataInput!
  create: CartCreateWithoutUserInput!
}

input CartUpsertWithWhereUniqueWithoutItemsInput {
  where: CartWhereUniqueInput!
  update: CartUpdateWithoutItemsDataInput!
  create: CartCreateWithoutItemsInput!
}

input CartWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  AND: [CartWhereInput!]
  OR: [CartWhereInput!]
  NOT: [CartWhereInput!]
}

input CartWhereUniqueInput {
  id: ID
}

scalar DateTime

type Item {
  id: ID!
  name: String!
  description: String!
  availableSizes: [TShirtSize!]!
  priceMinor: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart!]
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateavailableSizesInput {
  set: [TShirtSize!]
}

input ItemCreateInput {
  id: ID
  name: String!
  description: String!
  availableSizes: ItemCreateavailableSizesInput
  priceMinor: Int!
  carts: CartCreateManyWithoutItemsInput
}

input ItemCreateManyWithoutCartsInput {
  create: [ItemCreateWithoutCartsInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateOneInput {
  create: ItemCreateInput
  connect: ItemWhereUniqueInput
}

input ItemCreateWithoutCartsInput {
  id: ID
  name: String!
  description: String!
  availableSizes: ItemCreateavailableSizesInput
  priceMinor: Int!
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  priceMinor_ASC
  priceMinor_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  name: String!
  description: String!
  availableSizes: [TShirtSize!]!
  priceMinor: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  priceMinor: Int
  priceMinor_not: Int
  priceMinor_in: [Int!]
  priceMinor_not_in: [Int!]
  priceMinor_lt: Int
  priceMinor_lte: Int
  priceMinor_gt: Int
  priceMinor_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ItemScalarWhereInput!]
  OR: [ItemScalarWhereInput!]
  NOT: [ItemScalarWhereInput!]
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateavailableSizesInput {
  set: [TShirtSize!]
}

input ItemUpdateDataInput {
  name: String
  description: String
  availableSizes: ItemUpdateavailableSizesInput
  priceMinor: Int
  carts: CartUpdateManyWithoutItemsInput
}

input ItemUpdateInput {
  name: String
  description: String
  availableSizes: ItemUpdateavailableSizesInput
  priceMinor: Int
  carts: CartUpdateManyWithoutItemsInput
}

input ItemUpdateManyDataInput {
  name: String
  description: String
  availableSizes: ItemUpdateavailableSizesInput
  priceMinor: Int
}

input ItemUpdateManyMutationInput {
  name: String
  description: String
  availableSizes: ItemUpdateavailableSizesInput
  priceMinor: Int
}

input ItemUpdateManyWithoutCartsInput {
  create: [ItemCreateWithoutCartsInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutCartsInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutCartsInput!]
  deleteMany: [ItemScalarWhereInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemUpdateOneRequiredInput {
  create: ItemCreateInput
  update: ItemUpdateDataInput
  upsert: ItemUpsertNestedInput
  connect: ItemWhereUniqueInput
}

input ItemUpdateWithoutCartsDataInput {
  name: String
  description: String
  availableSizes: ItemUpdateavailableSizesInput
  priceMinor: Int
}

input ItemUpdateWithWhereUniqueWithoutCartsInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutCartsDataInput!
}

input ItemUpsertNestedInput {
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemUpsertWithWhereUniqueWithoutCartsInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutCartsDataInput!
  create: ItemCreateWithoutCartsInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  priceMinor: Int
  priceMinor_not: Int
  priceMinor_in: [Int!]
  priceMinor_not_in: [Int!]
  priceMinor_lt: Int
  priceMinor_lte: Int
  priceMinor_gt: Int
  priceMinor_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  carts_every: CartWhereInput
  carts_some: CartWhereInput
  carts_none: CartWhereInput
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCart(data: CartCreateInput!): Cart!
  updateCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart
  upsertCart(where: CartWhereUniqueInput!, create: CartCreateInput!, update: CartUpdateInput!): Cart!
  deleteCart(where: CartWhereUniqueInput!): Cart
  deleteManyCarts(where: CartWhereInput): BatchPayload!
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createPurchase(data: PurchaseCreateInput!): Purchase!
  updatePurchase(data: PurchaseUpdateInput!, where: PurchaseWhereUniqueInput!): Purchase
  updateManyPurchases(data: PurchaseUpdateManyMutationInput!, where: PurchaseWhereInput): BatchPayload!
  upsertPurchase(where: PurchaseWhereUniqueInput!, create: PurchaseCreateInput!, update: PurchaseUpdateInput!): Purchase!
  deletePurchase(where: PurchaseWhereUniqueInput!): Purchase
  deleteManyPurchases(where: PurchaseWhereInput): BatchPayload!
  createPurchaseItems(data: PurchaseItemsCreateInput!): PurchaseItems!
  updatePurchaseItems(data: PurchaseItemsUpdateInput!, where: PurchaseItemsWhereUniqueInput!): PurchaseItems
  upsertPurchaseItems(where: PurchaseItemsWhereUniqueInput!, create: PurchaseItemsCreateInput!, update: PurchaseItemsUpdateInput!): PurchaseItems!
  deletePurchaseItems(where: PurchaseItemsWhereUniqueInput!): PurchaseItems
  deleteManyPurchaseItemses(where: PurchaseItemsWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Purchase {
  id: ID!
  user: User!
  totalMinor: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PurchaseConnection {
  pageInfo: PageInfo!
  edges: [PurchaseEdge]!
  aggregate: AggregatePurchase!
}

input PurchaseCreateInput {
  id: ID
  user: UserCreateOneInput!
  totalMinor: Int!
}

input PurchaseCreateOneInput {
  create: PurchaseCreateInput
  connect: PurchaseWhereUniqueInput
}

type PurchaseEdge {
  node: Purchase!
  cursor: String!
}

type PurchaseItems {
  id: ID!
  purchase: Purchase!
  item: Item!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PurchaseItemsConnection {
  pageInfo: PageInfo!
  edges: [PurchaseItemsEdge]!
  aggregate: AggregatePurchaseItems!
}

input PurchaseItemsCreateInput {
  id: ID
  purchase: PurchaseCreateOneInput!
  item: ItemCreateOneInput!
}

type PurchaseItemsEdge {
  node: PurchaseItems!
  cursor: String!
}

enum PurchaseItemsOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PurchaseItemsPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PurchaseItemsSubscriptionPayload {
  mutation: MutationType!
  node: PurchaseItems
  updatedFields: [String!]
  previousValues: PurchaseItemsPreviousValues
}

input PurchaseItemsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PurchaseItemsWhereInput
  AND: [PurchaseItemsSubscriptionWhereInput!]
  OR: [PurchaseItemsSubscriptionWhereInput!]
  NOT: [PurchaseItemsSubscriptionWhereInput!]
}

input PurchaseItemsUpdateInput {
  purchase: PurchaseUpdateOneRequiredInput
  item: ItemUpdateOneRequiredInput
}

input PurchaseItemsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  purchase: PurchaseWhereInput
  item: ItemWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PurchaseItemsWhereInput!]
  OR: [PurchaseItemsWhereInput!]
  NOT: [PurchaseItemsWhereInput!]
}

input PurchaseItemsWhereUniqueInput {
  id: ID
}

enum PurchaseOrderByInput {
  id_ASC
  id_DESC
  totalMinor_ASC
  totalMinor_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PurchasePreviousValues {
  id: ID!
  totalMinor: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PurchaseSubscriptionPayload {
  mutation: MutationType!
  node: Purchase
  updatedFields: [String!]
  previousValues: PurchasePreviousValues
}

input PurchaseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PurchaseWhereInput
  AND: [PurchaseSubscriptionWhereInput!]
  OR: [PurchaseSubscriptionWhereInput!]
  NOT: [PurchaseSubscriptionWhereInput!]
}

input PurchaseUpdateDataInput {
  user: UserUpdateOneRequiredInput
  totalMinor: Int
}

input PurchaseUpdateInput {
  user: UserUpdateOneRequiredInput
  totalMinor: Int
}

input PurchaseUpdateManyMutationInput {
  totalMinor: Int
}

input PurchaseUpdateOneRequiredInput {
  create: PurchaseCreateInput
  update: PurchaseUpdateDataInput
  upsert: PurchaseUpsertNestedInput
  connect: PurchaseWhereUniqueInput
}

input PurchaseUpsertNestedInput {
  update: PurchaseUpdateDataInput!
  create: PurchaseCreateInput!
}

input PurchaseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  totalMinor: Int
  totalMinor_not: Int
  totalMinor_in: [Int!]
  totalMinor_not_in: [Int!]
  totalMinor_lt: Int
  totalMinor_lte: Int
  totalMinor_gt: Int
  totalMinor_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PurchaseWhereInput!]
  OR: [PurchaseWhereInput!]
  NOT: [PurchaseWhereInput!]
}

input PurchaseWhereUniqueInput {
  id: ID
}

type Query {
  cart(where: CartWhereUniqueInput!): Cart
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart]!
  cartsConnection(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartConnection!
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  purchase(where: PurchaseWhereUniqueInput!): Purchase
  purchases(where: PurchaseWhereInput, orderBy: PurchaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Purchase]!
  purchasesConnection(where: PurchaseWhereInput, orderBy: PurchaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PurchaseConnection!
  purchaseItems(where: PurchaseItemsWhereUniqueInput!): PurchaseItems
  purchaseItemses(where: PurchaseItemsWhereInput, orderBy: PurchaseItemsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PurchaseItems]!
  purchaseItemsesConnection(where: PurchaseItemsWhereInput, orderBy: PurchaseItemsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PurchaseItemsConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  purchase(where: PurchaseSubscriptionWhereInput): PurchaseSubscriptionPayload
  purchaseItems(where: PurchaseItemsSubscriptionWhereInput): PurchaseItemsSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

enum TShirtSize {
  S
  M
  L
  XL
}

type User {
  id: ID!
  name: String!
  email: String!
  cart: Cart
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  cart: CartCreateOneWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCartInput {
  id: ID
  name: String!
  email: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  cart: CartUpdateOneWithoutUserInput
}

input UserUpdateInput {
  name: String
  email: String
  cart: CartUpdateOneWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutCartInput {
  create: UserCreateWithoutCartInput
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCartDataInput {
  name: String
  email: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput!
  create: UserCreateWithoutCartInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  cart: CartWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    