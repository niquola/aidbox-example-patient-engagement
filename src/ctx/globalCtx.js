import patientCtx from './patientCtx.js';
import data from './data.js';
import Store from './store.js';

const store = Store();

const routes = {
  patients: {title: 'Patients', cmp: 'patients'},
  patient: {title: 'Patient', cmp: 'patient', ctx: patientCtx , skip: true},
  "new-patient": {title: 'New Patient', cmp: 'new-patient'},
  account: {title: 'Account', cmp: 'account' },
  reporting: {title: 'Reporting', cmp: 'reporting' },
  default: {title: 'Patients', cmp: 'patients'}
};


module.exports.store = store;

function build(path, cookies){
  let item = path[0];

  let route = routes[item] || routes['default']; 
  route.id = item;

  let global = [];

  for(let k in routes) {
    if(routes.hasOwnProperty(k)){
      let it = routes[k];
      if(!it.skip){
        global.push(
          {id: k, href: `#/${k}`, title: it.title}
        );
      }
    }
  }

  let model = {
    path: path,
    current: route,
    breadcrump: [route],
    navigation: {
      global: global,
      patient: []
    }
  };

  if(route.ctx) {
    let [_, ...ctxPath] = path;
    model = route.ctx(model, ctxPath);
  }

  return model;
}

export default build;

const loadPatients = ()=> {
  store.setState({ patients: data.patients });
};

module.exports.actions = {
  patients: loadPatients
};
