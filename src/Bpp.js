import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Bpp extends Component {

  state = {
    interest_number: 100
  }

  render() {
    return (
      <div className="Bpp">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
        <input
          type = 'number'
          placeholder = 'Interest number'
          value = { this.state.interest_number }
          onChange = {value => this.setState({interest_number: parseInt(value.target.value)}) }
          autoFocus
        />
        {this.state.interest_number && <button ref = "submit_button" onClick = {this.handlePost}> Post </button>}

      </div>
    );
  }

  handlePost = async () => {
    const { interest_number } = this.state
    await this.props.updateInterestMutation({variables: {interest_number}})
    this.refs.submit_button.setAttribute("disabled", "disabled")
  }
}

// Mutate operation for GraphCool
const UPDATE_INTEREST_MUTATION = gql`
  mutation UpdateInterestMutation ($interest_number: Int){
    updateInterest(id: "cjgcgrcof6ps00104rxq9i5lb", number: $interest_number) {
      number
    }
  }
`
const UpdateInterestMutation = graphql(UPDATE_INTEREST_MUTATION, {name: 'updateInterestMutation'})(Bpp)

export default UpdateInterestMutation;
