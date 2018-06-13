import React, { Component } from 'react';
import TodoItem from './todoItem.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    text: '',
    priority: '',
    todos: [], 
    completed: 'false',
    editEnabled: 'false', 
    },   
    this.changeText = this.changeText.bind(this);
    this.changePriority = this.changePriority.bind(this);
    this.addObject = this.addObject.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeEditEnabled = this.changeEditEnabled.bind(this);
    this.updateText = this.updateText.bind(this);
    this.updatePriority = this.updatePriority.bind(this);
    this.changeCompleted = this.changeCompleted.bind(this);
     }

  changeText(textAdded){
    this.setState({ text:textAdded.target.value });
  }

  changePriority(priorityAdded){
    this.setState({ priority:priorityAdded.target.value });
  }

  deleteTodo(index){
    const newArray = [...this.state.todos];

    newArray.splice(index , 1);

    this.setState({
      todos: newArray,
    }, () => console.log(this.state.todos))
  }

  changeEditEnabled(index){
      const newArray = [...this.state.todos];
      if(newArray[index].editEnabled == 'true'){  
        newArray[index].editEnabled = 'false';
     }
     else if(newArray[index].editEnabled == 'false'){
       newArray[index].editEnabled = 'true';
     }     
     
      this.setState({
        todos: newArray,
      }, () => console.log("Change Edit Enabled Function"))
    }

  changeCompleted(index){
    const newArray = [...this.state.todos];

    if(newArray[index].completed == 'true'){  
      newArray[index].completed = 'false';
   }
    else if(newArray[index].completed == 'false'){
           newArray[index].completed = 'true';
   } 


    this.setState({
      todos: newArray,
    }, () => console.log(this.state.todos))
  }

  updateText(index,textChanged){
     const newArray = [...this.state.todos];
     newArray[index].text = textChanged;

     this.setState({
       todos: newArray,
     }, () => console.log(this.state.todos))
   }

  updatePriority(index,priorityChanged){
    const newArray = [...this.state.todos];
    newArray[index].priority = priorityChanged;

    this.setState({
      todos: newArray,
    }, () => console.log(this.state.todos))
  }

  addObject(){
    const newArray = [...this.state.todos];
    
    var newObject = {
      text: this.state.text,
      priority: this.state.priority,
      editEnabled:'false',
      todos:this.state.todos,
      completed: 'false',
    }

    newArray.push(newObject);

    this.setState({
      todos: newArray,
      text: '',
      priority: '',
      editEnabled: 'false',
    }, () => console.log(this.state.todos))

    this.refs.text.value = '';
    this.refs.priority.value = '';
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
              <div className="row">
              <h4>Add New Todo</h4>
              </div>
              <div className="row left-row" >
                <div className="col-md-12">
                  <br></br>
                  <h5>I want to:</h5>
                  <textarea ref="text" cols="40" rows="5" className="create-todo-text" defaultValue={this.state.text} onChange={this.changeText}></textarea>                              
                  <br></br>
                  <br></br>
                  <h5>How much of a priority is this?</h5>
                  <select className="create-todo-priority" ref="priority" defaultValue={this.state.priority} onChange={this.changePriority}>
                      <option>Select a Priority</option>
                      <option value="1" >High Priority</option>
                      <option value="2">Medium Priority</option>
                      <option value="3">Low Priority</option>
                  </select><br></br><br></br>
                </div>
              </div>
              <br></br>
              <button type="button" className="create-todo btn btn-success center-align" onClick= {this.addObject}>Add</button>
            </div>   
            </form>  
            <div className="col-md-1">
            </div>
            <div className="col-md-7">
              <div className="row">
                <h4>View Todos</h4>
              </div>
              <div>             
                 <ul className="list-group">      
                    {
                      this.state.todos.length == 0 
                      ? <div className="row">
                        <div className="list-group-item list-group-item-primary">
                        <h5>Welcome to this very simple todo app!</h5>
                        <p>Get Started now by adding a new todo on the left.</p>
                        </div>
                        </div>
                      : this.state.todos.length >=1
                      ? this.state.todos.map((todoitem, index)=>(<TodoItem priority={todoitem.priority}
                                                                      text={todoitem.text} 
                                                               editEnabled={todoitem.editEnabled} 
                                                                     todos={todoitem.todos}
                                                             ondeleteClick={this.deleteTodo}
                                                               oneditClick={this.changeEditEnabled}
                                                                     index={index}
                                                                       key={index}
                                                                updateText={this.updateText}
                                                            updatePriority={this.updatePriority}
                                                           changeCompleted={this.changeCompleted}
                                                                 completed={todoitem.completed}
                                                                     />))
                      : ''
                    }         

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
