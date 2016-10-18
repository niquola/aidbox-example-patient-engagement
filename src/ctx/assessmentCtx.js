import data from './data.js';

function build(model, path){
  let [aid, tool, ...more] =  path;
  console.log('assessment', aid, 'tool', tool, more);
  model.workflow = data.workflow;
  model.workflow.tool = tool;

  model.breadcrump.pop();

  model.breadcrump.push({
    id: 'assessments',
    href: `#/patient/${model.patient.id}/assessments`,
    title: 'Assessments'
  });

  model.breadcrump.push({
    id: 'assessment',
    title: 'Home'
  });

  return model;
}

export default build;
