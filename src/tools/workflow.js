import React  from 'react';
import ComponentsMap from './toolsMap.js';

class Navigation extends React.Component {
  renderStepStatus(s) {
    return <span className={['wf-status', s].join(' ')}></span>;
  }

  renderIssuesCounter(n) {
    return <span className="wf-issues-badge">{n}</span>;
  }

  render() {
    const { workflow } = this.props;

    const steps = workflow.steps.map((step, stepIndex) => {
      return (
       <a href={`${this.props.path}/${step.tool}`}
          key={step.tool}
          className={['wf-item', (this.props.current === step.tool ? 'active' : 'nop') ].join(' ')} >
          {this.renderStepStatus(step.status || 'todo')}
          <span className="wf-title">{step.title}</span>
          {step.issuesCount && this.renderIssuesCounter(step.issuesCount)}
        </a>
      );
    });

    return (
      <div className='navigation'>
        <h3 className='nav-title'>{workflow.title}</h3>
        <div className='status-line'></div>
        {steps}
      </div>
    );
  }
}

class Workflow extends React.Component {
  render() {
    const wf = this.props.workflow;
    const path = `#/patient/${this.props.patient.id}/assessment/${this.props.assessment || 1}`;
    const editor = ComponentsMap[wf.tool] || ComponentsMap[wf.steps[0].tool];

    const buttons = [
      (<button className='btn btn-success' key="a"> Save & Next </button>),
      (<button className='btn btn-success'  key="b"> Next </button>)
    ];

    let editorEl = null;

    if (editor) {
      editorEl = React.createElement(editor.cmp, this.props);
    } else {
      editorEl = <pre>No editor found for step: {JSON.stringify(wf.tool)}</pre>;
    }

    return (
      <div className='workflow'>
        <Navigation current={wf.tool} path={path} workflow={wf} />
        <div className='workspace'>
            <div className='ws-body'>{editorEl}</div>
            <div className='ws-footer'>
            <div className='ws-spacer'></div>
            <div className='ws-btns'>{buttons}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workflow;
