import logo from './logo.svg';
import ToDoForm from "./components/ToDoForm";
import Tasks from "./components/Tasks";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CompletedTasks from "./components/CompletedTasks";

const App = () => {
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