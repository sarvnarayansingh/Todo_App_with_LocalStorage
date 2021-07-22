import React,{useState} from 'react';
import {Form,FormGroup,Input,InputGroup,InputGroupAddon,Button} from 'reactstrap'
import {v4} from 'uuid'

const TodoForm =({addTodo}) => {
    const [todoString,setTodoString] = useState("")

    const handleSubmit = () => {
        if(todoString === ""){
            return alert ("please fill value")
        }
        const todo={
            todoString,
            id:v4()
        }
        addTodo(todo)
        setTodoString("")
    }
    return(
        <Form>
            <FormGroup>
                <InputGroup>
                    <Input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="enter your todo"
                    value={todoString}
                    onChange={(event) => setTodoString(event.target.value)}/>
                    <InputGroupAddon addonType="prepend">
                        <Button color="success" onClick = {handleSubmit}>Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )

}

export default TodoForm;