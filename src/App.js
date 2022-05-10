import React, {useState, useEffect} from "react";
import {uuid} from "uuidv4";
import ToDoForm from "./components/ToDoForm";
import Tasks from "./components/Tasks";
import CompletedTasks from "./components/CompletedTasks";
import {Container, Row, Tabs, Tab} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import axios from "axios";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const apiEndpoint = 'http://localhost:3005/tasks'

    useEffect(() => {
        const getTasks = async () => {
            const {data: res} = await axios.get(apiEndpoint);
            setTasks(res);
        };
        getTasks();
    }, []);

    return (
        <div className={'content'}>
            <div className={'app-wrapper'}>
                <ToDoForm/>
                <Container>
                    <Row className='justify-content-center'>
                        <Tabs justify variant='pills' defaultActiveKey='tab-1' className='mb-1 p-2'>
                            <Tab title='Tasks' eventKey='tab-1'>
                                <Tasks/>
                            </Tab>
                            <Tab title='Completed Tasks' eventKey='tab-2'>
                                <CompletedTasks/>
                            </Tab>
                            <Tab title='Archive' eventKey='tab-3'>
                                <Tasks/>
                            </Tab>
                        </Tabs>
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default App;