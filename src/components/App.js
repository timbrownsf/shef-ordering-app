import React, {Component} from 'react'
import Header from './Header'
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from './Login'
import Cart from './Cart'
import ShopList from './ShopList'
import Purchases from './Purchases'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/items" />} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/items" component={ShopList} />
            <Route exact path="/purchases" component={Purchases} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
