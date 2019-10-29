import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  render() {
    return(
      <div className="Home">
        <header className="App-header">
          <div className="intro-text">
            <h3>Future home of jamesarmbrust.dev</h3>
            <br />
            <p>Currently having issue with Heroku and NameCheap playing well together. Once I get that sorted out I'll have this site on the proper URL.</p>
            <p>Until then it will simply be <a href="https://jamesarmbrust.herokuapp.com/">here</a>.</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;