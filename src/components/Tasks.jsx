import React from "react";
import s from './Tasks.module.css';
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
                <th>Assigned</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Category</th>
                <th>Detailed Info</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>12</td>
                <td>Mark Overmars</td>
                <td>15/05/2022</td>
                <td>Developer</td>
                <td>Under Review</td>
                <td>Important</td>
                <td>None</td>
                <td>This task must be completed by the end of this week.</td>
                <td>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-1" aria-label="First group">
                            <Button variant="success"><MdOutlineDoneOutline/></Button><Button
                            variant="warning"><GrEdit/></Button> <Button
                            variant="danger"><RiDeleteBinLine/></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </td>
            </tr>
            <tr>
                <td>192</td>
                <td>Hans Zimmer</td>
                <td>25/05/2022</td>
                <td>Tester</td>
                <td>Under Review</td>
                <td>Critical</td>
                <td>None</td>
                <td>Urgent task!</td>
                <td>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-1" aria-label="First group">
                            <Button variant="success"><MdOutlineDoneOutline/></Button><Button
                            variant="warning"><GrEdit/></Button> <Button
                            variant="danger"><RiDeleteBinLine/></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </td>
            </tr>
            <tr>
                <td>23</td>
                <td>John Brown</td>
                <td>30/05/2022</td>
                <td>Administrator</td>
                <td>Not Specified</td>
                <td>Low</td>
                <td>None</td>
                <td>Can be completed by the end of month.</td>
                <td>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-1" aria-label="First group">
                            <Button variant="success"><MdOutlineDoneOutline/></Button><Button
                            variant="warning"><GrEdit/></Button> <Button
                            variant="danger"><RiDeleteBinLine/></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </td>
            </tr>
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