import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

//import './App.css';

class Todos extends Component {
  // markComplete=()=>
  // {
  //   console.log('helooo') 
  // }  
  render(){
    //console.log(this.props.todos)
  return this.props.todos.map((todo) =>(
    <TodoItem key={todo.id} todo={todo} markComplete=
    {this.props.markComplete} delTodo={this.props.delTodo} />
   
  ));
}


 

}
//propoTypes
Todos.propTypes={
  todos:propTypes.array.isRequired ,
  markComplete:propTypes.func.isRequired ,
  delTodo:propTypes.func.isRequired ,

}
export default Todos;