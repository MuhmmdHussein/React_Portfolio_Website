import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Cards.css'; 

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mb-4 text-center card-black">
        <div className="card-body">
          <h1 className="card-title text-white">{this.props.pname}</h1> {/* White text color */}
        </div>
      </div>
    );
  }
}

export default Cards;