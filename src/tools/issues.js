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
    let issues = props.issues;
    let issuesHx = props.issuesHx;

    let columns = [{attr: 'id'}, {attr: 'title'}, {attr: 'priority'}];
    let issTable = grid(columns, issues);
    let issHxTable = grid(columns, issuesHx);

    return (
      <div>
        <h1>Active Issues</h1>
        <a className="btn btn-success">New Issue</a>

        {issTable}

        <h1>Issues History</h1>
        {issHxTable}
      </div>
    );
  }
}

export default store.bind(Index, ['issues', 'issuesHx']);
