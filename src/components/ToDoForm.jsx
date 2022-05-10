import React, {useEffect, useState, Component} from "react";
import {Button, Col, Form, InputGroup, Row, FormControl} from 'react-bootstrap';
import s from './ToDoForm.module.css';
import Select from 'react-select'

import axios from "axios";

const ToDoForm = (tasks) => {
    const apiEndpoint = 'http://localhost:3005/tasks'
    const [task, setTask] = useState({
        id: "",
        title: "",
        duedate: "",
        createddate: "",
        assignedto: "",
        status: "",
        priority: "",
        category: "",
        detailedinfo: "",
        summary: "",
        completeddate: "",
        finalstatus: ""
    });

    const handle = (e) => {
        e.preventDefault();

        const newtask = {...task};
        newtask[e.target.id] = e.target.value;
        setTask(newtask);
    }

    const submit = (e) => {
        axios.post(apiEndpoint, {
            id: task.id,
            title: task.title,
            duedate: task.duedate,
            eventdate: task.eventdate,
            createddate: task.createddate,
            assignedto: task.assignedto,
            status: task.status,
            priority: task.priority,
            category: task.category,
            detailedinfo: task.detailedinfo
        })
            .then(res => {
                console.log(res.task)
            })
        e.preventDefault();
        Array.from(document.querySelectorAll("input, textarea, Select ")).forEach(
            input => (input.value = ""),
            textarea => (textarea.value = ""),
            option => (option.value = "")
        );
    };

    const editTask = (task) => {
        task.target.title = task.target.title;
    };

    const options = [
        {label: 'Administrator', value: 'Administrator'},
        {label: 'Developer', value: 'Developer'},
        {label: 'Coordinator', value: 'Coordinator'}
    ]
    const MyComponent = () => (
        <Select isMulti options={options}/>
    )


    useEffect(() => {
        const getTasks = async () => {
            const {data: res} = await axios.get(apiEndpoint);
            setTask(res);
        };
        getTasks();
    }, []);

    return (
        <div className={s.form}>
            <form className={s.form} onSubmit={(e) => submit(e)}>
                <Form.Group className="mb-1">
                    <InputGroup.Text className={s.inputGroupText}>TaskTitle:</InputGroup.Text>
                    <Form.Control onChange={(e) => handle(e)} id="title" value={task.title} aria-label="Default"
                                  aria-describedby="inputGroup-sizing-default"/>
                </Form.Group>

                <Form.Group className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-default">DueDate:</InputGroup.Text>
                    <Form.Control onChange={(e) => handle(e)} id="duedate" value={task.duedate} aria-label="Default"
                                  type='date' aria-describedby="inputGroup-sizing-default"/>
                </Form.Group>

                <Form.Group className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-default">EventDate:</InputGroup.Text>
                    <Form.Control onChange={(e) => handle(e)} id="eventdate" value={task.eventdate} aria-label="Default"
                                  type='date' aria-describedby="inputGroup-sizing-default"/>
                </Form.Group>

                <Form.Group className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-default">Assigned To:</InputGroup.Text>
                    <Select isMulti options={options}/>
                </Form.Group>

                <Form.Group className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-default">Status:</InputGroup.Text>
                    <Form.Select onChange={(e) => handle(e)} id="status" value={task.status}>
                        <option selected>-</option>
                        <option>Not Specified</option>
                        <option>Under Review</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-default">Priority:</InputGroup.Text>
                    <Form.Select onChange={(e) => handle(e)} id="priority" value={task.priority}>
                        <option>-</option>
                        <option>Low (1)</option>
                        <option>Normal (2)</option>
                        <option>Important (3)</option>
                        <option>Critical (4)</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-default">Category:</InputGroup.Text>
                    <Form.Select onChange={(e) => handle(e)} id="category" value={task.category}>
                        <option selected>-</option>
                        <option>None</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-default"> Detailed Info:</InputGroup.Text>
                    <FormControl onChange={(e) => handle(e)} id="detailedinfo" value={task.detailedinfo}
                                 aria-label="Default" as="textarea" rows={3}
                                 aria-describedby="inputGroup-sizing-default"/>
                </Form.Group>
                <div>
                    <button className='btn-primary'>Create Task</button>
                </div>
            </form>
        </div>
    );
};

export default ToDoForm;

//https://www.youtube.com/watch?v=O_yUe8qElYM