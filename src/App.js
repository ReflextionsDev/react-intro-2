import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

// 1. after a successful submit the input should get cleared
// 2. if the input is empty and a user tried to submit, it should show up an error message "Cannot submit an empty field"
// 4. if value already exists please show an error message telling user "No duplicate!"
// 3. using css make the bullet points go away

export class App extends Component {

    state = {
        todoArray: [
            {
                id: uuidv4(),
                todo: "wash dishes"
            },
            {
                id: uuidv4(),
                todo: "walk dog"
            },
            {
                id: uuidv4(),
                todo: "homework"
            }
        ],
        newTodo: "",
    }

    handleOnInputChange = (event) => {
        this.setState({
            newTodo: event.target.value,
        })
    }

    showTodoArray = () => {
        return (
            <ul>
                {this.state.todoArray.map(({todo, id}) => 
                    <li key={id}>{todo}</li>
                )}
            </ul>
        )
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        
        if (this.state.newTodo === "") {
            alert("Input is empty!")
        } else if (this.state.todoArray.some(e => e.todo === this.state.newTodo)) {
            alert("This item already exists!")         
        } else {
            let newArray = [
                ...this.state.todoArray,
                {id: uuidv4(), todo: this.state.newTodo},
            ]        
            this.setState({
                todoArray: newArray,
                newTodo: "",
            })
        }
        
       
    }

    render() {
        const { newTodo } = this.state
        return (
            <div className='App'>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Add Todo:</label>
                    <input name="newTodo" value={newTodo} onChange={this.handleOnInputChange}/>
                    <button>Submit</button>
                </form>
                {this.showTodoArray()}
            </div>
        )
    }
}

export default App