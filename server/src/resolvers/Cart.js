function items(parent, args, context) {
  return context.prisma.cartitems({cart: {id: parent.id }})
}

module.exports = {
  items,
}
