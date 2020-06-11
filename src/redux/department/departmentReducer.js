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
    DELETE_DEPARTMENT_REQUEST_FAILURE,

}

    from './departmentTypes';
    import {intialState} from '../state';
    import update from 'react-addons-update';

// const intialState = {
//     loading: false,
//     departments: {},
//     message:''
// }

// export default function commonReducer(state = initialState.IsLoadedStatus, action) {
//     switch (action.type) {
//       case actionTypes.UPDATE_LATEST_DOC_LOADED_STATUS_SUCCESS:
//           return update(state, {LatestDoc : { $set: action.payload } });
//       case actionTypes.LOAD_LIGHT_WEIGHT_DOCS_SUCCESS:
//           return update(state, {LightWeightDocs : { $set: action.payload } });
//       case actionTypes.UPDATE_APPLIED_JOBS_LOADED_STATUS_SUCCESS:
//           return update(state, {AppliedJobs : { $set: action.payload } });
//       default:
//         return state;
//     }
//   }

export const departmentReducer = (state = intialState, action) => {
    
      switch (action.type) {
        case GET_DEPARTMENT_REQUEST:return{
            ...state,
            loading:true,
           
        }
        
        case GET_DEPARTMENT_REQUEST_SUCCESS:
            return update(state, {departments : { $set: action.payload },loading:{ $set: false } });
            // return{
            // ...state,
            // loading:false,
            // departments:action.payload
        
        
        case GET_DEPARTMENT_REQUEST_FAILURE:
            return update(state, {message : { $set: action.payload },loading:{ $set: false } });
            // return{
        //    ...state,
        //     loading:false,
        //     message:action.payload
        

        //case actionTypes.LOAD_LIGHT_WEIGHT_DOCS_SUCCESS:
            //           return update(state, {LightWeightDocs : { $set: action.payload } });

        
        case SAVE_DEPARTMENT_REQUEST:return{
            ...state,
             loading:true,
             
         }
        
        case SAVE_DEPARTMENT_REQUEST_SUCCESS:return{
            ...state,
            loading:false,
            message:'Deparment Save Successfully',
            departments:action.payload
           
        }
        
        case SAVE_DEPARTMENT_REQUEST_FAILURE:return{
           ...state,
            loading:false,
            message:action.payload
        }
        
        case EDIT_DEPARTMENT_REQUEST:return{
            ...state,
             loading:true,
             
         }
        
        case EDIT_DEPARTMENT_REQUEST_SUCCESS:return{
            ...state,
            loading:false,
            message:'Department Modify Successfully',
            departments:action.payload
           
        }
        
        case EDIT_DEPARTMENT_REQUEST_FAILURE:return{
           ...state,
            loading:false,
            message:action.payload
        }
        
        case DELETE_DEPARTMENT_REQUEST:return{
            ...state,
             loading:true,
             
         }
        
        case DELETE_DEPARTMENT_REQUEST_SUCCESS:return{
            ...state,
            loading:false,
            message:'Department Remove Succssfully',
            departments:action.payload
           
        }
        
        case DELETE_DEPARTMENT_REQUEST_FAILURE:return{
           ...state,
            loading:false,
            message:action.payload
        }
        
        default:return{state}
        

    }

}