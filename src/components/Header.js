import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Tim's excellent shop</div>
          <Link to="/" className="ml1 no-underline black">
            Home
          </Link>
          <div className="ml1">|</div>
          <Link to="cart" className="ml1 no-underline black">
            Cart
          </Link>
          {authToken && (
            <div className="flex">
              <div className="ml1">|</div>
              <Link to="/purchases" className="ml1 no-underline black">
                Purchases
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)