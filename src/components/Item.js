import React, {Component} from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($cartId: ID!, $itemId: ID!) {
    removeFromCart(cartId: $cartId, itemId: $itemId) {
      result
    }
  }
`
const ADD_TO_CART = gql`
  mutation AddToCart($cartId: ID!, $itemId: ID!) {
    addToCart(cartId: $cartId, itemId: $itemId) {
      result
    }
  }
`

class Item extends Component {
  render() {
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{{this.props.name}}</span>
          <span className="gray">{{this.props.description}}</span>
          {this.parent.isCart() && (
            <Mutation
              mutation={REMOVE_FROM_CART}
              variables={{ cartId: this.props.cartId, itemId: this.props.id}}
            >
              {removeFromCart => (
                <div className="ml1 gray f11" onClick={removeFromCart}>
                  ▲
                </div>
              )}
            </Mutation>
          )}
          {!this.parent.isCart() && (
        <div className="ml1">
          <div className="f6 lh-copy gray">
            <Mutation
              mutation={{ADD_TO_CART}}
              variables={{ cartId: this.props.cartId, itemId: this.props.id}}
            >
              <a href="#" onClick={addToCart}>Add to cart</a>a>
            </Mutation>
          </div>
        </div>
          }}
        </div>
      </div>
    )
  }
}

export default Item