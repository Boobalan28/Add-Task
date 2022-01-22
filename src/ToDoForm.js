import React, { useState } from 'react';
import {Button, Form} from "react-bootstrap";

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <Form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." className='input'/>
            <Button className='btn' type='submit'>Submit</Button>
        </Form>
    );
};

export default ToDoForm;