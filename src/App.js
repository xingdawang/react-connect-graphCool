import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.allInterestsQuery.allInterests && this.props.allInterestsQuery.allInterests.map(interest => (
          <p key={interest.id}> {interest.name} / {parseInt(interest.number)} / {interest.id}</p>

        ))}
      </div>
    );
  }
}


// Quer for reading data from graphcool
const ALL_INTERESTS_QUERY = gql`
  query AllInterestsQuery {
  allInterests{
    id
    name
    number
  }
}
`

const ListAllInterestsQuery = graphql(ALL_INTERESTS_QUERY, {
  name: 'allInterestsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(App)

export default ListAllInterestsQuery;
