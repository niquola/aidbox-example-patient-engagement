import React, { Component } from 'react';
import {store, actions } from '../ctx/patientCtx.js';
import {grid} from '../components/grid.js';

class Index extends Component {
  componentWillMount() {
    actions.medications();
  }

  render() {
    let meds = this.props.medications || [];
    return (
      <div>
        <h3> Meds </h3>
        {grid([{attr: 'id'}, {attr: 'title'}], meds)}
      </div>
    );
  }
}

export default store.bind(Index, ['medications']);
