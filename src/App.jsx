import React, { Component } from 'react';
import TodoItem from './todoItem.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    text: '',
    priority: '',
    todos: [], // do not change the object directly set state instead
    },   
    this.changeText = this.changeText.bind(this);
    this.changePriority = this.changePriority.bind(this);
    this.addObject = this.addObject.bind(this);
     }

  changeText(textAdded){
    this.setState({ text:textAdded.target.value });
  }

  changePriority(priorityAdded){
    this.setState({ priority:priorityAdded.target.value });
  }

  addObject(){
    var newArray = this.state.todos;
    
    var newObject = {
      text: this.state.text,
      priority: this.state.priority,
    }
  
    newArray.push(newObject);
    this.setState({
      todos: newArray,
      text: '',
      priority: '',
    })

    this.refs.text.value = '';
    this.refs.priority.value = '';
    console.log(this.state.todos);
  }


  render() {
    return (
      <div className='container'>
          <div className='header'>
            <h1>Very Simple Todo App</h1>
            <p>Track all the things</p>
            <hr></hr>
          </div>
          <div className="col-md-12">
            <form id = "todoForm">
            <div className="col-md-4">
              <div>
              <p>Add New Todo</p>
              </div><br></br>
              <div className="row">
                <div className="col-md-12">
                  <br></br>
                  <h5>I want to:</h5>
                  <textarea name="text" ref="text" cols="40" rows="5" className="create-todo-text" defaultValue={this.state.text} onChange={this.changeText}></textarea>                              
                  <br></br>
                  <br></br>
                  <h5>How much of a priority is this?</h5>
                  <select name="priority" ref="priority" defaultValue={this.state.priority} onChange={this.changePriority}>
                    <option value="0">Select Priority</option>
                    <option value="1">High Priority</option>
                    <option value="2">Medium Priority</option>
                    <option value="3">Low Priority</option>
                  </select><br></br><br></br>
                </div>
              </div>
              <br></br>
              <button type="button" className="btn btn-success" onClick= {this.addObject}>Add</button>
            </div>   
            </form>     
            <div className="col-md-8">
              <div>
                <p>View Todos</p>
              </div>
              <div>
                <h5>Welcome to very simple todo app!</h5>
                 <p>Get Started now by adding a new todo on the left.</p>
                 <ul className="list-group">
                    {this.state.todos.map(todoitem=>(<TodoItem priority={todoitem.priority} text={todoitem.text}/>))}
                 </ul>
              </div>
              <br></br>
              <br></br>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
