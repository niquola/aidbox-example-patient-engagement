export default {
  patients: [
    {id: '3', name: 'Ivan', gender: 'Male'},
    {id: '4', name: 'Grisha', gender: 'Male'},
    {id: '5', name: 'John', gender: 'Male'},
    {id: '6', name: 'Mary', gender: 'Female'}
  ],
  workflow: {
    title: '2+visit',
    steps: [
      {
        tool: 'issues',
        title: 'Issues',
        status: 'fixed',
        editor: 'issues'
      },
      {
        tool: 'demographics',
        title: 'Demographics',
        status: 'todo'
      },
      {
        tool: 'meds',
        title: 'Medications',
        status: 'todo',
        issuesCount: 3
      },
      {
        tool: 'resources',
        title: 'Resources',
        status: 'todo'
      },
      {
        tool: 'report',
        title: 'Sign Report',
        status: 'fixed'
      }
    ]
  }
};
