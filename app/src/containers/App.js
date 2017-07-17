import React, { Component } from 'react';
import './app.scss';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * @class App 
 * This is the app shell. 
 */
export default class App extends Component {
  render() {
    return (
        <div className="App" >
            <header className='App-header'>
              <nav>
                <LinkContainer to="/todo"><a>My List</a></LinkContainer>
                <LinkContainer to="/about"><a>About</a></LinkContainer>
              </nav>
            </header>
            <div role="main" className='app-content' onScroll={ this.onContentScroll }>
              <div className='content-inner'>
                { this.props.children }
              </div>
            </div>
        </div>
    );
  }

  onContentScroll(e) {
    var el = document.getElementsByClassName('App-header');

     if(e.target.scrollTop > 50) {
        el[0].classList.add('scrolled');
     } else {
        el[0].classList.remove('scrolled');
     }

     if(e.target.scrollTop > 100) {
        el[0].classList.add('scrolled2');
     } else {
        el[0].classList.remove('scrolled2');
     }
  }
}
