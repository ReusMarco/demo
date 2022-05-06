import React, {useEffect, useState} from "react";
import s from './ToDoForm.module.css';
import {Button, Col, Form, InputGroup, Row, FormControl} from 'react-bootstrap';
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
    const handle = (e) =>{
        const newtask={...task}
        newtask[e.target.id] = e.target.value
        setTask(newtask)
        console.log(newtask)
    }

    const submit = (e) =>{
        axios.post(apiEndpoint,{
            id: task.id,
            title: task.title,
            duedate: task.duedate,
            createddate: task.createddate,
            assignedto: task.assignedto,
            status: task.status,
            priority: task.priority,
            category: task.category,
            detailedinfo: task.detailedinfo
            /*summary: task.summary,
            completeddate: task.completeddate,
            finalstatus: task.finalstatus*/
        })
            .then(res=>{
                console.log(res.task)
            })
        setTask("");
    };

    const editTask = (task) =>{
        task.target.title = task.target.title;
    };


    useEffect(()=>{
        const getTasks = async () => {
            const {data:res} = await axios.get(apiEndpoint);
            setTask(res);
        };
        getTasks();
    }, []);

    const addTask = async () =>{
        const task = {id: '001', title: 'new'};
        await axios.post(apiEndpoint,task);
        setTask([task,...task]);
    };

    return (
        <div className={s.form}>
            <form className={s.form} onSubmit={(e)=>submit(e)}>
                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default">Title:</InputGroup.Text>
                    <FormControl onChange={(e)=>handle(e)} id="title" value={task.title} aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default">Due Date:</InputGroup.Text>
                    <FormControl onChange={(e)=>handle(e)} id="duedate" value={task.duedate} aria-label="Default" type='date' aria-describedby="inputGroup-sizing-default" required/>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default">Assigned to:</InputGroup.Text>
                    <Form.Select onChange={(e)=>handle(e)} id="assignedto" value={task.assignedto} required>
                        <option>-</option>
                        <option>Administrator</option>
                        <option>Developer</option>
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default">Status:</InputGroup.Text>
                    <Form.Select onChange={(e)=>handle(e)} id="status" value={task.status} required>
                        <option>-</option>
                        <option>Not Specified</option>
                        <option>Under Review</option>
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default">Priority:</InputGroup.Text>
                    <Form.Select onChange={(e)=>handle(e)} id="priority" value={task.priority} required>
                        <option>-</option>
                        <option>Low (1)</option>
                        <option>Normal (2)</option>
                        <option>Important (3)</option>
                        <option>Critical (4)</option>
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default" >Category:</InputGroup.Text>
                    <Form.Select required onChange={(e)=>handle(e)} id="category" value={task.category} >
                        <option>-</option>
                        <option>None</option>
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Text id="inputGroup-sizing-default"> Detailed Info:</InputGroup.Text>
                    <FormControl onChange={(e)=>handle(e)} id="detailedinfo" value={task.detailedinfo} aria-label="Default" as="textarea" rows={5} aria-describedby="inputGroup-sizing-default" required/>
                </InputGroup>

                <div>
                    <button className='btn-primary'>Create Task</button>
                </div>
            </form>
        </div>
    );
}

export default ToDoForm;

//https://www.youtube.com/watch?v=O_yUe8qElYM