const workflow = {
  workflow: {
    title: '2+visit',
    steps: [
      {
        title: 'Issues',
        status: 'fixed',
        editor: 'issues'
      },
      {
        title: 'Demographics',
        status: 'todo'
      },
      {
        title: 'Medical Team',
        status: 'todo'
      },
      {
        title: 'Medications',
        status: 'todo',
        issuesCount: 3
      },
      {
        title: 'Immunizations',
        status: 'todo',
        issuesCount: 3
      },
      {
        title: 'Allergies',
        status: 'todo'
      },
      {
        title: 'Review Of Systems',
        status: 'skiped',
        issuesCount: 3
      },
      {
        title: 'Resources',
        status: 'todo'
      },
      {
        title: 'Sign Report',
        status: 'fixed'
      }
    ]
  },
  issues: [
    {
      category: 'logistic',
      title: 'Help patient to find way home',
      question: 'Could you get home by yourself?',
      status: 'active'
    },
    {
      category: 'logistic',
      title: 'Help patient to find way home',
      question: 'Could you get home by yourself?',
      status: 'complete'
    },
    {
      category: 'logistic',
      title: 'Help patient to find way home',
      question: 'Could you get home by yourself?',
      status: 'active'
    }
  ]
};


export default {
  getWorkflow: (()=> data),
  getIssues: ((toolId)=> [])
};
