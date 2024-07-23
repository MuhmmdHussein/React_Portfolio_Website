import React from 'react';
import SkillBar from './SkillBar';

class Skills extends React.Component {
  render() {
    return (
      <div className="container mt-5 bg-light p-4 rounded">
        <h1>My Skills</h1>
        <p>
          With a strong foundation in accounting principles and ERP system development, Mohamed possesses valuable expertise in managing and enhancing ERP systems. His commitment to advancing his skills is evident through his current studies in Python at ITI, which complement his background in ERP systems and accounting. This blend of practical experience and ongoing education equips him to contribute effectively to innovative projects, leveraging his knowledge in both ERP solutions and programming to drive success and improve system efficiencies.
        </p>
        <SkillBar skillName="CSS" percent={80} />
        <SkillBar skillName="HTML" percent={60} />
        <SkillBar skillName="JavaScript" percent={75} />
      </div>
    );
  }
}

export default Skills;