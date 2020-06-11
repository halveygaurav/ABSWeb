import React, { useState, useEffect, } from 'react';
import { connect } from 'react-redux'
import { Table, Button, ButtonToolbar } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import DeptModel from './deptModel'
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchDepartments, postDepartment, putDepartment, deleteDepartment } from '../redux/department/departmentActions'
const Departments = ({ departments,
    getDepartments,
    saveDepartment,
    editDepartment,
    deleteDepartment,
    postResponse }) => {



    const [showModalAdd, setShowModalAdd] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [department, setdepartment] = useState({ deptId: 0, deptName: '', isEdit: false });
    const handleSaveDepartment = (deptData) => {

        saveDepartment(deptData,(msg)=>toast(msg))
        // saveDepartment(deptData)
        //  .then( 
            
        //     ()=>{
                
        //         toast("Department save successfully")
                
        //     }
        //         )

      
    }

    const handleEditDepartment = (deptData) => {

        //const data=JSON.stringify(deptData)
        editDepartment(deptData,()=>toast("Department modify successfully"))
        

    }



    const handleEdit = (id, name) => {
        setShowModalEdit(true)
        setdepartment({ deptId: id, deptName: name, isEdit: true })
    }

    const handleDelete = (id) => {
        
        deleteDepartment(id,()=>toast("Department remove successfully"));
        

    }

    useEffect(() => {

        getDepartments();
    }, [getDepartments])

    return (
        <div>
            <ToastContainer />
            <Table className="mt-4" striped border hover size="sm">
                <thead>
                    <tr>
                        <th>DepartmentID</th>
                        <th>DepartmentName</th>
                        <th>Option</th>

                    </tr>
                </thead>
                {departments.loading ? <ProgressBar animated now={60} /> :
                    <tbody>
                        {
                            departments && departments.departments
                            && departments.departments.map((department, index) => (
                                <tr key={index}>

                                    <td>{department.DeptId}</td>
                                    <td>{department.DepartmentName}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button
                                                className="mr-2"
                                                variant="info"
                                                onClick={() => handleEdit(department.DeptId, department.DepartmentName)}

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
                                                onClick={() => handleDelete(department.DeptId)}

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
            {departments.loading ? null : <ButtonToolbar>
                <Button variant="primary" onClick={() => { setShowModalAdd(true) }}>
                    Add Department
            </Button>
            </ButtonToolbar>
            }
            <DeptModel
                editDepartment={handleEditDepartment}
                show={showModalEdit}
                onHide={() => setShowModalEdit(false)}
                department={department}
            />
            <DeptModel
                saveDepartment={handleSaveDepartment}
                show={showModalAdd}
                onHide={() => setShowModalAdd(false)}

            />
            {JSON.stringify(postResponse)}
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        departments: state.departmentReducer,
        postResponse: state.departmentReducer.message
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //getDepartments: () => dispatch(fetchDepartments()),
        //saveDepartment: (data) => dispatch(postDepartment(data)),
        //editDepartment: (data) => dispatch(putDepartment(data)),
        //deleteDepartment: (id) => dispatch(deleteDepartment(id))
        getDepartments: bindActionCreators(fetchDepartments, dispatch),
        saveDepartment: bindActionCreators(postDepartment, dispatch),
        editDepartment: bindActionCreators(putDepartment, dispatch),
        deleteDepartment: bindActionCreators(deleteDepartment, dispatch)

    }

    // function mapDispatchToProps(dispatch) {
    //     return {
    //         actions: {
    //             updateSearchState: bindActionCreators(searchActions.UpdateSearchState, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Departments));
