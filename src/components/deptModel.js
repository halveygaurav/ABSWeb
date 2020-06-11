import React from 'react';
import { Modal, Button, Col, Row, Form } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
const DeptModel = (props) => {
    
    const handleClick = (event) => {
               
        event.preventDefault();
        
        props && props.department && props.department.isEdit?props.editDepartment({ DeptId:event.target.DepartmentId.value,DepartmentName: event.target.DepartmentName.value })
        :props.saveDepartment({ DepartmentName: event.target.DepartmentName.value })
       
    }
    return (

        <div className="container">
            
            
            <Modal
                show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={props.onHide}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.department && props.department.isEdit? 'Edit Department Details':'Add Department Details'}
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                
                    <Row>
                        <Col sm={6}>
                            <Form autoComplete="off" onSubmit={handleClick}>
                            {props.department && props.department.isEdit &&
                            <Form.Group controlId="DepartmentId">
                                    <Form.Label>DepartmentId</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="DepartmentId"
                                        required
                                        defaultValue={props.department.deptId}
                                        placeholder="DepartmentId"
                                        disabled="true"
                                    />
                                </Form.Group>}
                                <Form.Group controlId="DepartmentName">
                                    <Form.Label>DepartmentName</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="DepartmentName"
                                        required
                                        placeholder="DepartmentName"
                                        defaultValue={props.department && props.department.deptName}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit">{props.department && props.department.isEdit ? 'Edit Department' : 'Add Department'}</Button>
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
export default React.memo(DeptModel)