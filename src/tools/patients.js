import React, { Component } from 'react';
import { actions, store } from '../ctx/globalCtx.js';
import { grid } from '../components/grid.js'; 

class Index extends Component {

  componentWillMount(){
    actions.patients();
  }

  render() {
    let pts = this.props.patients || [];
    let table = grid([
      {attr: 'id'},
      {
        attr: 'name',
        fn: (pt)=>(<a href={`#/patient/${pt.id}`}> {pt.name} </a>)
      }
    ], pts);

    return (
      <div>
        <h1> Patients <a href="#/new-patient" className="btn btn-success">New Patient</a></h1>
        { table }
      </div>
    );
  }
}

export default store.bind(Index, ['patients']);
