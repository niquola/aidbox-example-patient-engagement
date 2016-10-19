import assessmentCtx from './assessmentCtx.js';
import data from './data.js';
import Store from './store.js';

const store = Store();
module.exports.store = store;

let ctxs = {
  assessment: assessmentCtx
};

let tools = [
  {id: 'demographics', title: 'Demographics'},
  {id: 'meds', title: 'Medications'},
  {id: 'issues', title: 'Issues'},
  {id: 'assessments', title: 'Assessments'},
  {id: 'new-issue', title: 'New Issue'}
];

function build(model, path){
  let [pid, tool, ...childPath] = path;
  let pt = data.patients.filter((p)=> p.id === pid)[0];
  console.log(pt);
  model.patient = pt;

  store.setState({ patient: pt });

  model.tool = tool;

  model.breadcrump = [
    {id:'patients', href: '#/patients', title: 'Patients'},
    {id: 'patient', href: `#/patient/${pt.id}`, title: pt.name},
    {id: tool, title: tool}
  ];

  model.navigation.patient = tools.map((e)=>(
    {id: e.id, href: `#/patient/${pid}/${e.id}`, title: e.title || e.id}
  ));

  let ctx = ctxs[tool];
  if(ctx){
    model = ctx(model, childPath);
  }
  return model;
}

export default build;

const loadMedications = () => {
  store.setState({ medications: [
    {id: '1', title: 'Morphine'},
    {id: '2', title: 'Aspirine'}
  ]});
};

const loadAssessments = () => {
  store.setState({ assessments: [
    {id: '1', title: 'Home Visit', time: '1 day ago'},
    {id: '2', title: 'Phone Visit', time: '1 week ago'}
  ]});
};

function loadIssues(){
  store.setState({ issues: [
    {id: '1', title: 'Issue 1'},
    {id: '2', title: 'Issues 2'}
  ]});
}

function loadIssuesHx(){
  store.setState({ issuesHx: [
    {id: '3', title: 'Issue 3'},
    {id: '4', title: 'Issues 4'},
    {id: '5', title: 'Issues 4'},
    {id: '6', title: 'Issues 4'},
    {id: '7', title: 'Issues 4'},
    {id: '8', title: 'Issues 4'}
  ]});
}

function issueTemplates(opts) {
  store.setState({
    issueTemplates: [
      {id: 5, title: 'Help patient to do something'},
      {id: 1, title: 'Make patient to do something'},
      {id: 6, title: 'Help patiento...'}
    ]
  });

}


module.exports.actions = {
  medications:  loadMedications,
  assessments:  loadAssessments,
  issues: loadIssues,
  issuesHx: loadIssuesHx,
  issueTemplates: issueTemplates
};
