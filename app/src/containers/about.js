import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Counter from '../components/Counter';
import { increment, decrement } from '../actions/counterActions';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

class About extends Component {
     render() {
    const {counter, dispatch} = this.props;

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <p>
                To get started, edit <code>src/containers/App.js</code> and save to reload.
              </p>
              <h3>What's Included?</h3>
              <p>
                This app is based upon <a href="https://github.com/facebookincubator/create-react-app">Create React App</a> and has scaffolding in place for the following libraries:
              </p>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>React Router</li>
                <li>React-Bootstrap (and Bootstrap)</li>
                <li>React-Intl (for i18n)</li>
              </ul>
              <p>There is also built-in support for Jest unit tests, including snapshot testing. Run the tests with the <code>npm test</code> command.</p>
              <p>It has a simple folder structure:</p>
              <ul>
                <li><strong>public</strong>: just index.html and favicon.ico</li>
                <li><strong>src</strong>: all JS files must be a child of this
                  <ul>
                    <li><strong>actions</strong>: Redux action creators go here</li>
                    <li><strong>components</strong>: Presentational components (without state)</li>
                    <li><strong>constants</strong>: Action types and other constants</li>
                    <li><strong>containers</strong>: Container components (stateful, or connected to Redux)</li>
                    <li><strong>reducers</strong>: Redux reducers go here</li>
                    <li><strong>store</strong>: Configuration of the single Redux store</li>
                  </ul>
                </li>
              </ul>
              <p>
                Here's a counter to prove it's all working:
                <Counter
                  value={counter}
                  onIncrement={() => dispatch(increment())}
                  onDecrement={() => dispatch(decrement())} />
              </p>
               <ul>
                <li><strong>public</strong>: just index.html and favicon.ico</li>
                <li><strong>src</strong>: all JS files must be a child of this
                  <ul>
                    <li><strong>actions</strong>: Redux action creators go here</li>
                    <li><strong>components</strong>: Presentational components (without state)</li>
                    <li><strong>constants</strong>: Action types and other constants</li>
                    <li><strong>containers</strong>: Container components (stateful, or connected to Redux)</li>
                    <li><strong>reducers</strong>: Redux reducers go here</li>
                    <li><strong>store</strong>: Configuration of the single Redux store</li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
} 

export default connect(mapStateToProps)(About);
