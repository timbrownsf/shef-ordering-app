import React, { Component, Fragment } from 'react'
import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { LINKS_PER_PAGE } from '../constants'

SHOP_LIST_QUERY = gql`
`;
class ShopList extends Component {
  render() {
    return (
      <Query query={SHOP_LIST_QUERY} variables={this._getQueryVariables()}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          return (
            <Fragment>
              {data.map((item, index) => (
                <Item
                  key={item.id}
                  item={item}
                />
              ))}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default ShopList
