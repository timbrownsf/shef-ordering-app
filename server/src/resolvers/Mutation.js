const { prisma } = require('../generated/prisma-client')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
const SPECIAL_USER_EMAIL = 'timothybrownsf@gmail.com';

function post(parent, args, context) {
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
  })
}

async function signup(parent, args, context) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function login(parent, args, context) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  }
}

async function vote(parent, args, context) {
  const userId = getUserId(context)
  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId },
  })
  if (linkExists) {
    throw new Error(`Already voted for link: ${args.linkId}`)
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } },
  })
}


async function createItem(parent, args, context) {
  const item = context.prisma.createItem({
      name: args.name,
      description: args.description,
      priceMinor: args.priceMinor,
    }
  );
  return item;
}

async function createCart(parent, args, context) {
  return context.prisma.createCart({
      user: { connect: {email: SPECIAL_USER_EMAIL}},
    }
  );
}

async function addItemToCart(parent, args, context) {
  const item = context.prisma.item({id: args.itemId});
  return context.prisma.updateCart({
    data: {},
    where:{id: args.cartId}
  })
}

async function createSpecialUser(parent, args, context) {
  return context.prisma.createUser({
    name: "Tim Brown",
    email: SPECIAL_USER_EMAIL,
    }
  );
}

async function purchaseCart(parent, args, context) {
  // Transfer cart items to Purchase
  console.log(args.cartId);
  const cart = await context.prisma.cart({id: args.cartId});

  console.log(cart);
  const cartItems = await cart.items;
  if (!cartItems) {
    console.warn("User must put items in cart first!")
    return null;
  }

  console.log(cartItems);
  var totalPrice = 0;
  var items = [];
  for (cartItem of cartItems) {
    item = cartItem.item;
    items.push(item);
    totalPrice += item.priceMinor;
  }
  var purchase = context.prisma.createPurchase({
    user: args.cart.user,
    totalMinor: totalPrice
  })

  for (item of items){
    context.prisma.createPurchaseItem({
      purchase: purchase,
      item: item
    })
  }

  // Empty cart
  for (cartItem of cartItems){
    cartItem.delete();
  }
  return purchase;
}

async function removeFromCart(parent, args, context) {
  return Boolean(context.prisma.cart({id: args.cartId}).items.remove({id: args.itemId}));
}
module.exports = {
  post,
  signup,
  login,
  vote,
  createItem,
  createCart,
  createSpecialUser,
  addItemToCart,
  purchaseCart,
  removeFromCart,
}
