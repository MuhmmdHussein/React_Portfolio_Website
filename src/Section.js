import React from 'react';
import img from './Home.png';

class Section extends React.Component {
  render() {
      return (
          <header>
              <dev className={"position-relative text-center"}>
                  <img src={img} width={"100%"}/>
                  <div className={"position-absolute top-0 translate-middle text-white"} style={{
                      left: "20%",
                  }}>
                      
                  </div>

              </dev>

          </header>

      );
  }
}

export default Section;