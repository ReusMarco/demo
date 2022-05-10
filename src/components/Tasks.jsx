import React, {useState, useEffect, Fragment, useRef} from "react";
import s from './Tasks.module.css';
import {Table, ButtonToolbar, ButtonGroup, Button} from "react-bootstrap";
import {InputGroup, FormControl, Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import ReadTasks from "./ReadTasks";
import EditTasks from "./EditTasks";


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

    const [editTaskData, setEditTaskDate] = useState({
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

    const [editTask, setEditTask] = useState(null);

    const handleEditClick = (event, task) => {
        event.preventDefault();
        setEditTask(task.id);
    }

    return (<div className={s.tasks}>
        <form>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Due Date</th>
                    <th>Event Date</th>
                    <th>Assigned</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Category</th>
                    <th>Detailed Info</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task) =>(
                    <Fragment>
                        {
                            editTask === task.id ?
                                <EditTasks/>
                                :
                                <ReadTasks task={task} handleEditClick = {handleEditClick}/>
                        }
                    </Fragment>
                ))}
                </tbody>
            </Table>
        </form>
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