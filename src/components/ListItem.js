import React, { Component } from 'react';
import {connect} from 'react-redux';
import {completeToDo} from '../actions';

class ListItem extends Component {
  handleComplete = () => {
    const {completeToDo, todoId} = this.props;
    completeToDo(todoId);
  };
  render() {
    const{todoId, todo} = this.props;
    return (
      <div key = "toDoName" className = "ListItem">
        <h4>
          {todo.title}
          <span onClick={() => this.handleComplete(todoId)}>
            <i className = "DoneButton">Done</i>
          </span>
          </h4>
       </div>
        );
  }
}
export default connect(null, {completeToDo}) (ListItem);
