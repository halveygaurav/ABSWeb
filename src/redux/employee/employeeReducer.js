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
    DELETE_EMPLOYEE_REQUEST_FAILURE,
}
    from './employeeTypes'
    import {intialState} from '../state';
// const intialState = {
//     loading: false,
//     employees: {},
//     message:''
// }
export const employeeReducer = (state = intialState, action) => {
      switch (action.type) {
        case GET_EMPLOYEE_REQUEST:return{
            ...state,
            loading:true,
           
        }
        
        case GET_EMPLOYEE_REQUEST_SUCCESS:return{
            ...state,
            loading:false,
            employees:action.payload
        }
        
        case GET_EMPLOYEE_REQUEST_FAILURE:return{
           ...state,
            loading:false,
            message:action.payload
        }
        
        case SAVE_EMPLOYEE_REQUEST:return{
            ...state,
             loading:true,
             
         }
        
        case SAVE_EMPLOYEE_REQUEST_SUCCESS:return{
            ...state,
            loading:false,
            message:'Employee Save Successfully',
            employees:action.payload
           
        }
        
        case SAVE_EMPLOYEE_REQUEST_FAILURE:return{
           ...state,
            loading:false,
            message:action.payload
        }
        
        case EDIT_EMPLOYEE_REQUEST:return{
            ...state,
             loading:true,
             
         }
        
        case EDIT_EMPLOYEE_REQUEST_SUCCESS:return{
            ...state,
            loading:false,
            message:'Employee Modify Successfully',
            employees:action.payload
           
        }
        
        case EDIT_EMPLOYEE_REQUEST_FAILURE:return{
           ...state,
            loading:false,
            message:action.payload
        }
        
        case DELETE_EMPLOYEE_REQUEST:return{
            ...state,
             loading:true,
             
         }
        
        case DELETE_EMPLOYEE_REQUEST_SUCCESS:return{
            ...state,
            loading:false,
            message:'Employee remove successfully',
            employees:action.payload
           
        }
        
        case DELETE_EMPLOYEE_REQUEST_FAILURE:return{
           ...state,
            loading:false,
            message:action.payload
        }
        
        default:return{state}
        

    }

}