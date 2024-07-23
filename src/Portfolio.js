import React from 'react';
import Cards from './Cards';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <h1>My Portfolio</h1>
        <p>
          Welcome to my portfolio page. Here you can find a selection of my projects and work samples. Each project showcases different aspects of my skills and expertise, from ERP system development to web technologies. Feel free to explore and learn more about what I've accomplished.
        </p>
        <div className="row">
          <div className="col-md-4">
            <Cards pname="E-Commerce Platform" />
          </div>
          <div className="col-md-4">
            <Cards pname="Inventory Management System" />
          </div>
          <div className="col-md-4">
            <Cards pname="Customer Relationship Management (CRM)" />
          </div>
          <div className="col-md-4">
            <Cards pname="Task Management Application" />
          </div>
          <div className="col-md-4">
            <Cards pname="Portfolio Website" />
          </div>
          <div className="col-md-4">
            <Cards pname="Real-Time Chat Application" />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;