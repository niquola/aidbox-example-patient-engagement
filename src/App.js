import React, { Component } from 'react';

import Patients from './tools/patients.js';
import Patient from './tools/patient.js';
import NewPatient from './tools/new_patient.js';
import Reporting from './tools/reporting.js';
import Account from './tools/account.js';

import ctx from './ctx/globalCtx.js';

class Navigation extends Component {

  navItem(i) {
    return (<a key={i.id} onClick={this.props.close} className="nav-item" href={i.href} > {i.title} </a>);
  }

  render() {
    return (
        <div className="navig">
        <a className="close" onClick={this.props.close}> Close </a>
        <div className="nav-group">
          <h3>Global</h3>
          {this.props.model.global.map((i)=> this.navItem(i))}
        </div>
        <div className="nav-group">
          <h3>Patient</h3>
          {this.props.model.patient.map((i)=> this.navItem(i))}
        </div>
      </div>
    );
  }
}


const ComponentsMap = {
  patients: Patients,
  account: Account,
  patient: Patient,
  reporting: Reporting,
  "new-patient": NewPatient
};

class App extends Component {
  onHashChange (hash) {
    let path = hash.replace(/^#\//, '').split('/');
    let model = ctx(path);
    this.setState(model);
  }

  componentWillMount()  {

    document.onkeyup = (function(e) {
      console.log('global', e);
      if(e.shiftKey && e.which === 13) {
        console.log('global!!!', e);
        this.setState({ nav: true });
      }
    }).bind(this);

    window.onhashchange = (function(event) {
      let hash = window.location.hash;
      this.onHashChange(hash);
    }).bind(this);

    let hash = window.location.hash;
    this.onHashChange(hash);
  }

  toggleNav() {
    this.setState({nav: !this.state.nav});
  }

  navigation() {
    return (<Navigation close={this.toggleNav.bind(this)} model={this.state.navigation} />);
  }

  breadcrump(items) {
    return items.map((i)=>(
        <a key={i.id} href={i.href} className="breadcrump"> { i.title } </a>
    ));
  }

  render() {
    let cmp = ComponentsMap[this.state.current.cmp];
    return (
      <div className="App">
        <div className="main-nav">
          <a className="global-nav" onClick={this.toggleNav.bind(this)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        Breadcrump: <span>{ this.breadcrump(this.state.breadcrump || []) }</span>
        </div>
        {this.state.nav && this.navigation()}
        <div className="main">
          {React.createElement(cmp, this.state)}
        </div>
      </div>
    );
  }
}

export default App;
