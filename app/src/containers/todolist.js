import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Button } from 'react-bootstrap';
import Todo from '../components/todo/todo';
import { add, remove } from '../actions/todoactions';
import './todolist.scss'

class TodoList extends Component {
    render() {
        const { todos, dispatch } = this.props;

        return (
            <div>
                { todos.length > 0 ? (
                        <Grid>
                            { todos.map((todo) => {
                                return <Col sm={6} md={3} key={ todo.id }>
                                        <Todo title={ todo.title } todo={ todo.text } onRemove={ () => {dispatch(remove(todo.id)) } }/>
                                    </Col>
                            }) }
                        </Grid>
                    ) : (
                        <div className='empty-list'>
                            Nothing to do!
                        </div>
                    )
                }
                <Button className='todo-add' bsStyle='primary' onClick={ () => {dispatch(add()) } } >+</Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
