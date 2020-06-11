import {combineReducers} from 'redux'
import {departmentReducer} from './department/departmentReducer'
import {employeeReducer} from './employee/employeeReducer'
export const rootReducer=combineReducers({departmentReducer,employeeReducer},)