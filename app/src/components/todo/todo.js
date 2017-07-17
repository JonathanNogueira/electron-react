import React, { Component } from 'react';
import { Jumbotron, Button} from 'react-bootstrap';
import './todo.scss';

export default class Todo extends Component {
    render() {
        return (
            <Jumbotron className='todo-item'>
                <div>
                    <Button onClick={ this.props.onRemove } >Delete</Button>
                    <h2 className='title editable'>
                        { this.props.title }
                    </h2>
                </div>
                <p className='editable' >
                    { this.props.todo } 
                </p>
            </Jumbotron>
        );
    }
}