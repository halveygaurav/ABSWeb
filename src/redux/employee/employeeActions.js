import {
    GET_EMPLOYEE_REQUEST,
    GET_EMPLOYEE_REQUEST_SUCCESS,
    GET_EMPLOYEE_REQUEST_FAILURE,
    SAVE_EMPLOYEE_REQUEST,
    SAVE_EMPLOYEE_REQUEST_SUCCESS,
    SAVE_EMPLOYEE_REQUEST_FAILURE,
    EDIT_EMPLOYEE_REQUEST,
    EDIT_EMPLOYEE_REQUEST_SUCCESS,
    EDIT_EMPLOYEE_REQUEST_FAILURE,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_REQUEST_SUCCESS,
    DELETE_EMPLOYEE_REQUEST_FAILURE

} from './employeeTypes'
import axios from 'axios'
export const getEmployeeRequest = () => {
    return {

        type: GET_EMPLOYEE_REQUEST
    }
}
export const getEmployeeData = (employees) => {
    return {
        type: GET_EMPLOYEE_REQUEST_SUCCESS,
        payload: employees,
    }
}
export const getEmployeeError = (message) => {
    return {
        type: GET_EMPLOYEE_REQUEST_FAILURE,
        payload: message,

    }
}
//Create a wrapper for all api request(custom async hook----intercepter)
export const fetchEmployees = () => {
    return (dispatch) => {
        dispatch(getEmployeeRequest())
        axios.get('http://www.absweb.somee.com/api/employee')
            .then(response => {
                const employees = response.data;
                dispatch(getEmployeeData(employees))
            })
            .catch(error => {
                dispatch(getEmployeeError(error.message))
            })
    }
}

const saveEmployeeRequest = () => {
    return {
        type: SAVE_EMPLOYEE_REQUEST
    }
}
const saveEmployeeSuccess = (employees) => {
    return {
        type: SAVE_EMPLOYEE_REQUEST_SUCCESS,
        payload: employees
    }
}
const saveEmployeeFailure = (message) => {
    return {
        type: SAVE_EMPLOYEE_REQUEST_FAILURE,
        payload: message
    }
}
export const postEmployee = (params) => {
    
    return (dispatch) => {
        
        dispatch(saveEmployeeRequest())
        return axios.post('http://www.absweb.somee.com/api/employee', params)
            .then(response => {
                return dispatch(saveEmployeeSuccess(response.data))
                
            })
            .catch(error => {
                
                return dispatch(saveEmployeeFailure(error.message))
                

            })
    }
}

const editEmployeeRequest = () => {
    return {
        type: EDIT_EMPLOYEE_REQUEST
    }
}
const editEmployeeSuccess = (employees) => {
    return {
        type: EDIT_EMPLOYEE_REQUEST_SUCCESS,
        payload: employees
    }
}
const editEmployeeFailure = (message) => {
    return {
        type: EDIT_EMPLOYEE_REQUEST_FAILURE,
        payload: message
    }
}
export const putEmployee = (params) => {

    return (dispatch) => {
        dispatch(editEmployeeRequest())
       return axios.put('http://www.absweb.somee.com/api/employee', params)
            .then(response => {
                return dispatch(editEmployeeSuccess(response.data))
                
            })
            .catch(error => {
              
                return dispatch(editEmployeeFailure(error.message))

            })
    }
}
const deleteEmployeeRequest = () => {
    return {
        type: DELETE_EMPLOYEE_REQUEST
    }
}
const deleteEmployeeSuccess = (employees) => {

    return {
        type: DELETE_EMPLOYEE_REQUEST_SUCCESS,
        payload: employees
    }
}
const deleteEmployeeFailure = (message) => {

    return {

        type: DELETE_EMPLOYEE_REQUEST_FAILURE,
        payload: message
    }
}
export const deleteEmployee = (id) => {

    return (dispatch) => {
        dispatch(deleteEmployeeRequest())
        return axios.delete(`http://www.absweb.somee.com/api/employee/${id}`)

            .then(response => {
                return dispatch(deleteEmployeeSuccess(response.data))
                

            })
            .catch(error => {
                return dispatch(deleteEmployeeFailure(error.message))

            })
    }
}