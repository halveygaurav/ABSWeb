import React from 'react';
import { Modal, Button, Col, Row, Form } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
const EmpModel = (props) => {
    console.log('empmodel render')
    const handleClick = (event) => {
        event.preventDefault();
        
        props.employee && props.employee.isEdit?props.editEmployee({ 
            EmpId:event.target.EmployeeId.value,
            EmpName: event.target.EmployeeName.value, 
            DeptId: event.target.DepartmentId.value, 
            Email: event.target.Email.value, 
            Doj: event.target.Doj.value, 
        })
        :props.saveEmployee({ 
            EmpName: event.target.EmployeeName.value,
            DeptId: event.target.DepartmentId.value, 
            Email: event.target.Email.value, 
            Doj: event.target.Doj.value, 
        })
        
    }
    return (

        <div className="container">
            
            <Snackbar
                anchorOrigin={{ vertical: 'centre', horizontal: 'center' }}
                open={props && props.showSnack && props.showSnack.value}
                autoHideDuration={5000}
                onClose={props && props.snackbar && props.snackbar}
                message={<span id="message-id">{props && props.showSnack && props.showSnack.message}</span>}
                action={[
                    <IconButton
                        key="close"
                        arial-label="close"
                        color="inherit"
                        onClick={props && props.snackbar}
                    >
                        X
        </IconButton>
                ]}

            />
            <Modal
                show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={props.onHide}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.employee && props.employee.isEdit?'Edit Employee Details':'Add Employee Details'}
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleClick} autoComplete="off">
                            {props.employee && props.employee.isEdit &&
                                <Form.Group controlId="EmployeeId">
                                    <Form.Label>EmployeeId</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="EmployeeId"
                                        required
                                        defaultValue={props.employee && props.employee.empId}
                                        placeholder="EmployeeId"
                                        disabled="true"
                                    />
                                </Form.Group>}
                                <Form.Group controlId="EmployeeName">
                                    <Form.Label>EmployeeName</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="EmployeeName"
                                        required
                                        placeholder="EmployeeName"
                                        defaultValue={props.employee && props.employee.empName}
                                    />
                                </Form.Group>
                                <Form.Group controlId="DepartmentId">
                                    <Form.Label>DepartmentId</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="DepartmentId"
                                        required
                                        placeholder="DepartmentId"
                                        defaultValue={props.employee && props.employee.deptId}
                                    />
                                </Form.Group>
                                <Form.Group controlId="Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Email"
                                        required
                                        placeholder="Email"
                                        defaultValue={props.employee && props.employee.email}
                                    />
                                </Form.Group>
                                <Form.Group controlId="Doj">
                                    <Form.Label>Doj</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Doj"
                                        required
                                        placeholder="Doj"
                                        defaultValue={props.employee && props.employee.doj}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit">{props.employee && props.employee.isEdit ? 'Edit Employee' : 'Add Employee'}</Button>
                                </Form.Group>

                            </Form>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>


    )
}
export default React.memo(EmpModel)