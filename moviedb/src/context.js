import React, { Component, createContext } from 'react';

const Context = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'SEARCH_TRACKS':
      return {
        ...state,
        track_list: action.payload,
        heading: 'Search Results'
      };
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    track_list: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return(
      <Context.Provider value={this.state}>
      {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
