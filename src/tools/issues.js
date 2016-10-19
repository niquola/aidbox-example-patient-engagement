import React, { Component } from 'react';
import {store, actions} from '../ctx/patientCtx.js';
import {grid} from '../components/grid.js';

class Index extends Component {
  componentWillMount (){
    actions.issues();
    actions.issuesHx();
  }

  render() {
    let props = this.props;
    let pt = props.patient;
    let issues = props.issues;
    let issuesHx = props.issuesHx;
    console.log('Patient', pt);

    let columns = [{attr: 'id'}, {attr: 'title'}, {attr: 'priority'}];
    let issTable = grid(columns, issues);
    let issHxTable = grid(columns, issuesHx);

    return (
      <div>
        <h1>
           Active Issues
           <span> </span>
           <a href={`#/patient/${pt.id}/new-issue`}>New Issue</a>
        </h1>
        {issTable}

        <h1>Issues History</h1>
        {issHxTable}
      </div>
    );
  }
}

export default store.bind(Index, ['patient', 'issues', 'issuesHx']);
