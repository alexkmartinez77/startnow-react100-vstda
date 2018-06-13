import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
   
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.save = this.save.bind(this);
        this.changeText = this.changeText.bind(this);
        this.changePriority = this.changePriority.bind(this);
        this.completed = this.completed.bind(this);
         }

    onClickDelete(){
        const index = this.props.index;
        this.props.ondeleteClick(index);
    }

    onClickEdit(){
        const index = this.props.index;
        this.props.oneditClick(index);
    }

     changeText(textAdded){
         const index = this.props.index;
         const x = textAdded.target.value;
         this.props.updateText(index, x);
       }
    
     changePriority(priorityAdded){
         const index = this.props.index;
         const y = priorityAdded.target.value;
         this.props.updatePriority(index, y);
       }

    save(){
        const index = this.props.index;
        this.props.oneditClick(index);
    }

    completed(){
        const index = this.props.index;
        this.props.changeCompleted(index);
    }

    render() {
      const text = this.props.text;
      const priority = this.props.priority;
      const todos = [...this.props.todos];
      const completed = this.props.completed;

    
    if(completed=='true'&& priority=='1'){
        var x = 'list-group-item list-group-item-danger strikethrough';
    }
    if(completed=='false'&&priority=='1'){
        var x = 'list-group-item list-group-item-danger';
    }
    if(completed=='true'&& priority=='2'){
        var x = 'list-group-item list-group-item-warning strikethrough';
    }
    if(completed=='false'&&priority=='2'){
        var x = 'list-group-item list-group-item-warning';
    }
    if(completed=='true'&& priority=='3'){
        var x = 'list-group-item list-group-item-success strikethrough';
    }
    if(completed=='false'&&priority=='3'){
        var x = 'list-group-item list-group-item-success';
    }

        // var x;
        // switch (completed | priority) {
        //     case 'true' | '1':
        //         x = 'list-group-item list-group-item-danger strikethrough';
        //         break;
        //     case 'false' | '1':
        //         x = 'list-group-item list-group-item-danger';
        //         break;
        //     case 'true' | '2':
        //         x = 'list-group-item list-group-item-warning strikethrough';
        //         break;
        //     case 'false' | '2':
        //         x = 'list-group-item list-group-item-warning';
        //         break;
        //     case 'true' | '3':
        //         x = 'list-group-item list-group-item-success strikethrough';
        //         break;
        //     case 'false' | '3':
        //         x = 'list-group-item list-group-item-success';
        //         break;               
    //}


            return(
                <div>
                    {
                      this.props.editEnabled == 'false'
                      ?  <div className="row"> 
                            <li className={x}><input type='checkbox' onClick={this.completed}></input><strong>{text}</strong>
                            <a href="#" className = "delete-todo" onClick={this.onClickDelete}><span className="glyphicon glyphicon-trash"></span></a>   
                            <a href="#" className = "edit-todo" onClick={this.onClickEdit}><span className="glyphicon glyphicon-edit"></span></a>
                            </li>
                          </div>
                      : this.props.editEnabled == 'true'
                      ? <div className="row">
                            <li className={x}>
                            <form>
                            <div className="row" >
                                <div className="col-md-12">
                                <br></br>
                                <h5>Description</h5>
                                <textarea name="text" ref="text" cols="40" rows="5" className="update-todo-text" defaultValue={this.props.text} onChange={this.changeText}></textarea>                              
                                <br></br>
                                <br></br>
                                <h5>Priority</h5>
                                <select className="update-todo-priority" ref="priority" defaultValue={this.props.priority} onChange={this.changePriority}>
                                    <option>Select a Priority</option>
                                    <option value="1" >High Priority</option>
                                    <option value="2">Medium Priority</option>
                                    <option value="3">Low Priority</option>
                                </select><br></br><br></br>
                                </div>
                            </div>
                            <div className="row" >                     
                                <button type="button" className="btn btn-success right-align" onClick={this.save}>Save</button>
                            </div>
                            </form>    
                            </li>
                        </div>
                      : ''
                    }
                </div>
            );      
    }     
}

export default TodoItem;