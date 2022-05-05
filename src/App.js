import React, {useState, useEffect} from "react";
import {uuid} from "uuidv4";
import ToDoForm from "./components/ToDoForm";
import Tasks from "./components/Tasks";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CompletedTasks from "./components/CompletedTasks";
import axios from "axios";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const apiEndpoint = 'http://localhost:3005/tasks'

    useEffect(()=>{
        const getTasks = async () => {
            const {data:res} = await axios.get(apiEndpoint);
            setTasks(res);
        };
        getTasks();
    }, []);

    return (
        <div className={'content'}>
            <div className={'app-wrapper'}>
                <ToDoForm/>
                <Tasks/>
            </div>
            <CompletedTasks/>
        </div>
    );
}

export default App;