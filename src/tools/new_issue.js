import React, { Component } from 'react';
import {store, actions} from '../ctx/patientCtx.js';

class Index extends Component {
  componentWillMount(){
    actions.issueTemplates({});
  }

  onChange(ev) {
    actions.issueTemplates({query: ev.target.value});
  }

  render() {
    return (
      <div>
        <h1>New Issue</h1>
        <input onChange={this.onChange} className="search" placeholder="Search Issue"/>
        <pre>{ JSON.stringify(this.props.issueTemplates, null, 2) }</pre>
      </div>
    );
  }
}

export default store.bind(Index, ['patient', 'issueTemplates']);
