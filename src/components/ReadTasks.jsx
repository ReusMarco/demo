import React from 'react';
import {Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";
import {GiCancel} from "react-icons/gi";
import {MdOutlineDoneOutline} from "react-icons/md";
import {GrEdit} from "react-icons/gr";
import {RiDeleteBinLine} from "react-icons/ri";

const ReadTasks = ({task}) =>{
    return(
        <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.duedate}</td>
            <td>{task.eventdate}</td>
            <td>{task.assignedto}</td>
            <td>{task.status}</td>
            <td>{task.priority}</td>
            <td>{task.category}</td>
            <td>{task.detailedinfo}</td>
            <td>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-1" aria-label="First group">
                        <Button variant="success">{/*<GiCancel/>*/}<MdOutlineDoneOutline/></Button>
                        <Button variant="warning"><GrEdit/></Button>
                        <Button variant="danger"><RiDeleteBinLine/></Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </td>
        </tr>
    )
}

export default ReadTasks;