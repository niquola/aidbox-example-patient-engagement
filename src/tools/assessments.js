import React, { Component } from 'react';
import {store, actions} from '../ctx/patientCtx.js';
import {grid} from '../components/grid.js';

class Index extends Component {
  componentWillMount(){
    actions.assessments();
  }

  render() {
    let pt = this.props.patient || {};
    let ass = this.props.assessments;

    console.log("PROPS!!!", this.props);
    let table = grid([
      {attr: 'id'},
      {attr: 'title'},
      {attr: 'time'}
    ], ass);

    return (
      <div>
        <h3>
          Assessments 
          <span> </span>
          <a href={`#/patient/${pt.id}/assessment/1`} className="btn btn-success">
            <i className="fa fa-plus"></i> Phone
          </a>
          <span> </span>
          <a href={`#/patient/${pt.id}/assessment/1`} className="btn btn-success">
            <i className="fa fa-plus"></i> Home
          </a>
        </h3>
        { table }
      </div>
    );
  }
}

export default store.bind(Index, ['assessments', 'patient']);
