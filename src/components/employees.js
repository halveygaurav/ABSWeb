import React, { useState, useEffect, } from 'react';
import { connect } from 'react-redux'
import { Table, Button, ButtonToolbar } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import EmpModel from './empModel'
import { bindActionCreators } from 'redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchEmployees, postEmployee, putEmployee, deleteEmployee } from '../redux/employee/employeeActions'
const Employees = ({ employees,
    getEmployees,
    saveEmployee,
    editEmployee,
    deleteEmployee,
    postResponseEmployee }) => {



    const [showModalAdd, setShowModalAdd] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showSnackbar, setSnackbar] = useState({ value: false, message: '' });
    const [employee, setEmployee] = useState({ empId: 0, empName: '', depId: 0, email: '', doj: '', isEdit: false });
    const showSnackbarHandle = () => {
        setSnackbar({ value: !showSnackbar.value, message: postResponseEmployee })
    }
    const handleSaveEmployee = (empData) => {

        saveEmployee(empData).then((response)=>{
            response.type=='SAVE_EMPLOYEE_REQUEST_SUCCESS'?
            toast.success("Employee added successfully"): toast.error(response.payload)
        })

    }

    const handleEditEmployee = (empData) => {


        //editEmployee(empData, ()=>toast("Employee modify successfully"))
        editEmployee(empData).then((response) => {
            response.type=='EDIT_EMPLOYEE_REQUEST_SUCCESS'?
            toast.success("Employee modify successfully"): toast.error(response.payload)
           
        })
    }



    const handleEdit = (id, name, deptId, email, doj) => {
        setShowModalEdit(true)
        setEmployee({ empId: id, empName: name, deptId, email, doj, isEdit: true })
    }

    const handleDelete = (id) => {

        deleteEmployee(id).then((response)=>{
            response.type=='DELETE_EMPLOYEE_REQUEST_SUCCESS'?
            toast.success("Department remove successfully"): toast.error(response.payload)
            
        })

    }

    useEffect(() => {
        console.log('EmployeeEffect call')
        getEmployees();
    }, [getEmployees])

    return (
        <div>
            <ToastContainer />
            <Table className="mt-4" striped border hover size="sm">
                <thead>
                    <tr>
                        <th>EmployeeId</th>
                        <th>EmployeeName</th>
                        <th>DepartmentId</th>
                        <th>Email</th>
                        <th>Date of Joining</th>
                        <th>Option</th>

                    </tr>
                </thead>
                {employees.loading ? <ProgressBar animated now={60} /> :
                    <tbody>
                        {
                            employees && employees.employees
                            && employees.employees.map((employee, index) => (
                                <tr key={index}>

                                    <td>{employee.EmpId}</td>
                                    <td>{employee.EmpName}</td>
                                    <td>{employee.DeptId}</td>
                                    <td>{employee.Email}</td>
                                    <td>{employee.Doj}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button
                                                className="mr-2"
                                                variant="info"
                                                onClick={() => handleEdit(employee.EmpId, employee.EmpName, employee.DeptId, employee.Email, employee.Doj)}

                                            >
                                                Edit
                                        </Button>
                                        </ButtonToolbar>

                                    </td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button
                                                className="mr-2"
                                                variant="danger"
                                                onClick={() => handleDelete(employee.EmpId)}

                                            >
                                                Delete
                                        </Button>
                                        </ButtonToolbar>

                                    </td>

                                </tr>

                            ))
                        }
                    </tbody>
                }
            </Table>
            {employees.loading ? null : <ButtonToolbar>
                <Button variant="primary" onClick={() => { setShowModalAdd(true) }}>
                    Add Employee
            </Button>
            </ButtonToolbar>}
            <EmpModel
                showSnack={showSnackbar}
                snackbar={showSnackbarHandle}
                editEmployee={handleEditEmployee}
                show={showModalEdit}
                onHide={() => setShowModalEdit(false)}
                employee={employee}
            />
            <EmpModel
                showSnack={showSnackbar}
                snackbar={showSnackbarHandle}
                saveEmployee={handleSaveEmployee}
                show={showModalAdd}
                onHide={() => setShowModalAdd(false)}

            />
            
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        employees: state.employeeReducer,
        postResponseEmployee: state.employeeReducer.message
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //getEmployees: () => dispatch(fetchEmployees()),
        // saveEmployee: (data) => dispatch(postEmployee(data)),
        // editEmployee: (data) => dispatch(putEmployee(data)),
        // deleteEmployee: (id) => dispatch(deleteEmployee(id)),

        getEmployees: bindActionCreators(fetchEmployees, dispatch),
        saveEmployee: bindActionCreators(postEmployee, dispatch),
        editEmployee: bindActionCreators(putEmployee, dispatch),
        deleteEmployee: bindActionCreators(deleteEmployee, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Employees));
