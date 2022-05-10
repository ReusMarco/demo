import React from "react";
import s from './CompletedTasks.module.css';
import {Table, ButtonToolbar, ButtonGroup, Button} from "react-bootstrap";
import {RiDeleteBinLine} from 'react-icons/ri';
import {GrEdit} from 'react-icons/gr';
import {MdOutlineDoneOutline} from 'react-icons/md';
import {InputGroup, FormControl, Container, Row, Col} from "react-bootstrap";

const Tasks = () => {
    return (<div className={s.tasks}>
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Due Date</th>
                <th>Completed Date</th>
                <th>Assigned</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Category</th>
                <th>Detailed Info</th>
                <th>Summary/Result:</th>
                <th>Final Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>12</td>
                <td>Mark Overmars</td>
                <td>15/05/2022</td>
                <td>25/05/2022</td>
                <td>Developer</td>
                <td>Under Review</td>
                <td>Important</td>
                <td>None</td>
                <td>This task must be completed by the end of this week.</td>
                <th></th>
                <td>Completed</td>
            </tr>
            <tr>
                <td>192</td>
                <td>Hans Zimmer</td>
                <td>25/05/2022</td>
                <td>15/06/2022</td>
                <td>Tester</td>
                <td>Under Review</td>
                <td>Critical</td>
                <td>None</td>
                <td>Urgent task!</td>
                <th></th>
                <td>Completed</td>
            </tr>
            <tr>
                <td>23</td>
                <td>John Brown</td>
                <td>30/05/2022</td>
                <td>03/07/2022</td>
                <td>Administrator</td>
                <td>Not Specified</td>
                <td>Low</td>
                <td>None</td>
                <td>Can be completed by the end of month.</td>
                <th></th>
                <td>Completed</td>
            </tr>
            </tbody>
        </Table>
    </div>);
}

export default Tasks;