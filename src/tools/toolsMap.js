import Meds from './medications.js';
import Demog from './demographics.js';
import Resources from './resources.js';
import Issues from './issues.js';
import Asses from './assessments.js';
import Workflow from './workflow.js';
import NewIssue from './new_issue.js';

export default {
  demographics: {title: "Demographics", cmp: Demog},
  default: {title: "Demographics", cmp: Demog},
  meds:  {title: 'Medications', cmp: Meds},
  issues:  {title: 'Issues',  cmp: Issues},
  assessments:  {title: 'Assessments',  cmp: Asses},
  assessment:  {title: 'Assessments', cmp: Workflow},
  resources:  {title: 'Resources', cmp: Resources},
  "new-issue":  {title: 'New Issue', cmp: NewIssue}
};
