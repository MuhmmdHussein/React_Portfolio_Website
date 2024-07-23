import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SkillBar extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <p>{this.props.skillName}</p>
        <div className="progress">
          <div 
            className="progress-bar bg-primary" 
            role="progressbar" 
            style={{ width: `${this.props.percent}%` }} 
          >
            {this.props.percent}%
          </div>
        </div>
      </div>
    );
  }
}

export default SkillBar;