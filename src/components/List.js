import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';

class List extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

inputChange = e => {
  this.setState({formValue: e.target.value});
};

formSubmit = e => {
  const {formValue} = this.state;
  const {addTodo} = this.props;
  e.preventDefault();
  addTodo({title: formValue});
  this.setState({formValue: ""});
};

renderForm = () => {
  const {showForm, formValue} = this.state;
  if (showForm) {
    return (
      <div className = "List">
        <form onSubmit={this.formSubmit}>
          <div>
            <div>
              <i>Add</i>'
            </div>
              <input
              value={formValue}
              onChange={this.inputChange}
              id="toDoNext"
              type="text"
              />
            <div>
              <label htmlFor="toDoNext">What Next?</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

renderToDo() {
  console.log("Rendering todos");
  const {data} = this.props;
  const toDos = _.map(data, (value, key) => {
    console.log(value, key);
    return <ListItem key={key} todoId={key} todo = {value} />;
  });
  if(!_.isEmpty(toDos)) {
    console.log("Have todos to display!");
    return toDos;
  }
  else return (
    <div>
      <h4>You have no more things ToDo!</h4>
    </div>
  );
}

componentDidMount() {
  this.props.fetchToDos();
}

render() {
  const {showForm} = this.state;
  return (
    <div className = "List">
      <div>
      {this.renderForm()}
      {this.renderToDo()}
      </div>
      <div>
      <button onClick = {()=>this.setState({showForm: !showForm})}>
      {showForm ? (
        <i>Close</i>
      ) : (
        <i>Add</i>
      )}
      </button>
      </div>
    </div>
  );
}
}
const mapStateToProps = ({data}) => {
  return (
    {data}
  )
}

export default connect(mapStateToProps, actions)(List);
