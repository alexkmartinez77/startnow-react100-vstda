import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
      const text = this.props.text;
      const priority = this.props.priority;
        if (priority == '1'){
            var x = 'list-group-item list-group-item-danger';
        }
        if (priority == '2'){
            var x = 'list-group-item list-group-item-warning';
        }
        if (priority == '3'){
            var x = 'list-group-item list-group-item-success';
        }
    return(
        <div>
            <li className={x}>{text}</li>
        </div>
    );
    }
}

export default TodoItem;