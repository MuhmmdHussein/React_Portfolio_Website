import React from "react";

class Bio extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <h1>About Me</h1>
        <p>
          I’m Mohamed, a commerce graduate with a certificate in accounting and ERP systems. I have a keen interest in developing ERP systems and am currently expanding my skills by learning Python at ITI.
        </p>
        <a
          href="https://drive.google.com/file/d/1bU8JMgqgqMVrCpsmx0xU3WxnfuY_Uw38/view?usp=sharing"
          className="btn btn-primary mt-3"
          download
        >
          Download CV
        </a>
      </div>
    );
  }
}

export default Bio;