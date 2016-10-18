import React, { Component } from 'react';
import ComponentsMap from './toolsMap.js';

class Index extends Component {
  render() {
    let cmp = ComponentsMap[this.props.tool] || ComponentsMap['default'];
    return (
      <div>
        <div className="patient-banner">
          <div className="photo"></div>
          <h3>{this.props.patient.name}</h3>
        </div>
        <div className="pane">
          {React.createElement(cmp.cmp, this.props)}
        </div>
      </div>
    );
  }
}

export default Index;
