import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodos from './components/AddTodos';
import About from './components/pages/About';
//import uuid from 'uuid';
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';

//import About from './components/pages/about';

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: "take out the trash", 
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: "dinner with wife",
      //   completed: true
      // },
      // {
      //   id: 3,
      //   title: "meeting with boasss",
      //   completed: false
      // }


    ]
  }
componentDidMount()
{
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res=> this.setState({todos: res.data}))
}

  //Togle complete
  markComplete = (id) => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  //delete todo
  delTodo = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}').then(res => this.setState({ todos: [...this.state.todos.filter(todo => 
    todo.id !== id)]}));
     
  }
  //add todo
  addTodo= (title) => {
    //console.log(title)
    // const newTodo={
    //   id:uuid.v4(),
    //   title,
    //   completed:false
    // }
     axios.post('https://jsonplaceholder.typicode.com/todos',{
       title,
       completed:false
     }).then(res => this.setState({todos: [...this.state.todos,res.data]}));
    //this.setState({ todos: [...this.state.todos,newTodo] });
  }
  render() {
    //console.log(this.state.todos)
    return (
      <Router>
          <div className="App">
        <div className="container" >
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
            <AddTodos addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo} />
            </React.Fragment>
          )  }/>
          <Route exact path='/about' component={About}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
