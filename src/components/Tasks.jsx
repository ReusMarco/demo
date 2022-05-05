import React, {useState, useEffect} from "react";
import s from './Tasks.module.css';
import {Table, ButtonToolbar, ButtonGroup, Button} from "react-bootstrap";
import {RiDeleteBinLine} from 'react-icons/ri';
import {GrEdit} from 'react-icons/gr';
import {MdOutlineDoneOutline} from 'react-icons/md';
import {InputGroup, FormControl, Container, Row, Col} from "react-bootstrap";
import axios from "axios";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const apiEndpoint = 'http://localhost:3005/tasks';

    useEffect(() => {
        const getTasks = async () => {
            const {data: res} = await axios.get(apiEndpoint);
            setTasks(res);
        };
        getTasks();
    }, []);

    const handleDelete = async (task) => {
        await axios.delete(apiEndpoint + '/' + task.id + task);
        setTasks(tasks.filter((t)=>t.id !== task.id));
    };

    return (<div className={s.tasks}>
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Due Date</th>
                <th>Assigned</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Category</th>
                <th>Detailed Info</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map(task =>
                <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.duedate}</td>
                    <td>{task.assignedto}</td>
                    <td>{task.status}</td>
                    <td>{task.priority}</td>
                    <td>{task.category}</td>
                    <td>{task.detailedinfo}</td>
                    <td>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="me-1" aria-label="First group">
                                <Button variant="success"><MdOutlineDoneOutline/></Button>
                                <Button variant="warning"><GrEdit/></Button>
                                <Button onClick={()=> handleDelete(task)} variant="danger"><RiDeleteBinLine/></Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </td>
                </tr>
            )}
            </tbody>
        </Table>

        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Summary/Result:</InputGroup.Text>
                        <FormControl aria-label="Default" as="textarea" aria-describedby="inputGroup-sizing-default"/>
                    </InputGroup>
                </Col>
                <Col xs lg="2">
                    <FormControl aria-label="Default" type='date' aria-describedby="inputGroup-sizing-default"/>
                </Col>
                <Col xs lg="2">
                    <Button variant={"info"}>Complete Task</Button>
                </Col>
            </Row>
        </Container>
    </div>);
}

export default Tasks;