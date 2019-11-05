function cart(parent, args, context) {
  return context.prisma.cart({user: {id: parent.id}})
}

module.exports = {
  cart
}
