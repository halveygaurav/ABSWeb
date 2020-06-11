import {
    GET_DEPARTMENT_REQUEST,
    GET_DEPARTMENT_REQUEST_SUCCESS,
    GET_DEPARTMENT_REQUEST_FAILURE,
    SAVE_DEPARTMENT_REQUEST,
    SAVE_DEPARTMENT_REQUEST_SUCCESS,
    SAVE_DEPARTMENT_REQUEST_FAILURE,
    EDIT_DEPARTMENT_REQUEST,
    EDIT_DEPARTMENT_REQUEST_SUCCESS,
    EDIT_DEPARTMENT_REQUEST_FAILURE,
    DELETE_DEPARTMENT_REQUEST,
    DELETE_DEPARTMENT_REQUEST_SUCCESS,
    DELETE_DEPARTMENT_REQUEST_FAILURE

} from './departmentTypes'
import axios from 'axios'
export const getDepartmentRequest = () => {
    return {

        type: GET_DEPARTMENT_REQUEST
    }
}
export const getDepartmentData = (departments) => {
    return {
        type: GET_DEPARTMENT_REQUEST_SUCCESS,
        payload: departments,
    }
}
export const getDepartmentError = (message) => {
    return {
        type: GET_DEPARTMENT_REQUEST_FAILURE,
        payload: message,

    }
}
//Create a wrapper for all api request(custom async hook----intercepter)
export const fetchDepartments = () => {
    return (dispatch) => {
        dispatch(getDepartmentRequest())
        // axios.get('http://www.absweb.somee.com/api/department')
        axios.get('http://www.absweb.somee.com/api/department')
        
            .then(response => {

                const departments = response.data;
                dispatch(getDepartmentData(departments))
            })
            .catch(error => {
                
                dispatch(getDepartmentError(error.message))
            })
    }
}

const saveDepartmentRequest = () => {
    return {
        type: SAVE_DEPARTMENT_REQUEST
    }
}
const saveDepartmentSuccess = (departments) => {
    return {
        type: SAVE_DEPARTMENT_REQUEST_SUCCESS,
        payload: departments
    }
}
const saveDepartmentFailure = (message) => {
    return {
        type: SAVE_DEPARTMENT_REQUEST_FAILURE,
        payload: message
    }
}
export const  postDepartment = (params,callBack) => {
    return (dispatch) => {
        dispatch(saveDepartmentRequest())
        axios.post('http://www.absweb.somee.com/api/department', params)
            .then(response => {
                dispatch(saveDepartmentSuccess(response.data))
                callBack("Department save successfully");
            })
            .catch(error => {
                
                dispatch(saveDepartmentFailure(error.message))
                callBack(error.message);

            })
    }
}

const editDepartmentRequest = () => {
    return {
        type: EDIT_DEPARTMENT_REQUEST
    }
}
const editDepartmentSuccess = (departments) => {
    return {
        type: EDIT_DEPARTMENT_REQUEST_SUCCESS,
        payload: departments
    }
}
const editDepartmentFailure = (message) => {
    return {
        type: EDIT_DEPARTMENT_REQUEST_FAILURE,
        payload: message
    }
}
export const putDepartment = (params,onSuccess) => {

    return (dispatch) => {
        dispatch(editDepartmentRequest())
        axios.put('http://www.absweb.somee.com/api/department', params)
            .then(response => {
                dispatch(editDepartmentSuccess(response.data))
                onSuccess();
            })
            .catch(error => {
                console.log(error)
                dispatch(editDepartmentFailure(error.message))

            })
    }
}
const deleteDepartmentRequest = () => {
    return {
        type: DELETE_DEPARTMENT_REQUEST
    }
}
const deleteDepartmentSuccess = (departments) => {

    return {
        type: DELETE_DEPARTMENT_REQUEST_SUCCESS,
        payload: departments
    }
}
const deleteDepartmentFailure = (message) => {

    return {

        type: DELETE_DEPARTMENT_REQUEST_FAILURE,
        payload: message
    }
}
export const deleteDepartment = (id) => {

    return (dispatch) => {
        dispatch(deleteDepartmentRequest())
        axios.delete(`http://www.absweb.somee.com/api/department/${id}`)

            .then(response => {

                dispatch(deleteDepartmentSuccess(response.data))
                
                
            })
            .catch(error => {
                
                dispatch(deleteDepartmentFailure(error.message))

            })
    }
}