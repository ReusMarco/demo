import React, {useEffect, useState} from "react";
import s from './ToDoForm.module.css';
import {Button, Col, Form, InputGroup, Row, FormControl} from 'react-bootstrap';
import axios from "axios";

const ToDoForm = () => {
    const [tasks, setTasks] = useState([]);
    const apiEndpoint = 'http://localhost:3005/tasks'

    useEffect(()=>{
        const getTasks = async () => {
            const {data:res} = await axios.get(apiEndpoint);
            setTasks(res);
        };
        getTasks();
    }, []);

    const addTask = async () =>{
        const task = {id: '001', title: 'new'};
        await axios.post(apiEndpoint,task);
        setTasks([task,...task]);
    };

    return (
        <div className={s.form}>
            <form className={s.form}>
                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default">Title:</InputGroup.Text>
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default">Due Date:</InputGroup.Text>
                    <FormControl aria-label="Default" type='date' aria-describedby="inputGroup-sizing-default"/>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default">Assigned to:</InputGroup.Text>
                    <Form.Select>
                        <option>-</option>
                        <option>Administrator</option>
                        <option>Developer</option>
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default">Status:</InputGroup.Text>
                    <Form.Select>
                        <option>-</option>
                        <option>Not Specified</option>
                        <option>Under Review</option>
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default">Priority:</InputGroup.Text>
                    <Form.Select>
                        <option>-</option>
                        <option>Low (1)</option>
                        <option>Normal (2)</option>
                        <option>Important (3)</option>
                        <option>Critical (4)</option>
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default" >Category:</InputGroup.Text>
                    <Form.Select>
                        <option>-</option>
                        <option>None</option>
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default"> Detailed Info:</InputGroup.Text>
                    <FormControl aria-label="Default" as="textarea" rows={5} aria-describedby="inputGroup-sizing-default"/>
                </InputGroup>

                <div>
                    <Button onClick={addTask} as={Col} variant="primary">Create Task</Button>
                </div>
            </form>
        </div>
    );
}

export default ToDoForm;

//https://www.youtube.com/watch?v=O_yUe8qElYM