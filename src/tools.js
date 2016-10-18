import Meds from './tools/medications.js';
import Demog from './tools/demographics.js';
import Resources from './tools/resources.js';
import Issues from './tools/issues.js';
import Asses from './tools/assessments.js';
import Workflow from './tools/workflow.js';

const tools = {
  demographics: {title: 'Demographics', cmp: Demog},
  meds:  {title: 'Medications', path: 'meds', cmp: Meds},
  issues:  {title: 'Issues', path: 'issues', cmp: Issues},
  asses:  {title: 'Assessments', path: 'issues', cmp: Asses},
  "asses-new":  {title: 'Assessments', path: 'new-asses', cmp: Workflow},
  resources:  {title: 'Resources', path: 'resources', cmp: Resources}
};

export default tools;
