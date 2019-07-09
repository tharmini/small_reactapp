import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle =() =>
    {
        // if(this.props.todo.completed)
        // {
        //     return{
        //         textDecoration:'line-through'
        //     }
        // }
        // else
        // {
        //     return{
        //         textDecoration:'none '
        //     }
        // }
        return{
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottam:'1px #cc dotted',
            textDecoration:this.props.todo.completed ?
            'line-through' : 'none'       
        }
    }
    // markCompleted=(e) => { 
    //     console.log(this.props)
    //     console.log('dsfsff')
 
    // } 
  render() {
    const { id, title} =this.props.todo;
    return (
     // <div style = {{backgroundColor: '#f4f4f4'}}>
     //<div style = {itemStyle}>
     <div style={this.getStyle()} >

        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id) }/> {' '}
         { title }  
         <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}
TodoItem.propTypes={
    
  todos:propTypes.object.isRequired ,
  markComplete:propTypes.func.isRequired ,
  delTodo:propTypes.func.isRequired ,
   
  }

  const btnStyle={
    backgroundColor:'#ff0000',
    color:'#fff',
    padding:'5px 10px',
    border:'none',
    borderRadius:'50%',
    float:'right',
    cursor:'pointer'

  }

//   const itemStyle={
//       backgroundColor : '#f4f4f4'
//   }
export default TodoItem
