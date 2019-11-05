import React, {Component, Fragment} from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

PURCHASES_LIST_QUERY = gql`
`;
class Purchases extends Component {
  render() {
    return (
      <Query query={PURCHASES_LIST_QUERY}>
        {({ loading, error, dataß }) => {
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

export default Purchases
