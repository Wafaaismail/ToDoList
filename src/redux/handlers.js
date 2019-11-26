import { reduce, get } from 'lodash'
import { data } from './data'
const redux = require('redux');

const setData = (state, action) => {
    return {
        ...state,
        [action.id]: {
            text: action.payload,
            completed: action.taskdone,
            taskDescription: action.taskDescription,
            parendid: action.fid,
            id :action.id
        }
    }
}

const reducersName = ['tasks', 'subTasks', 'users']

export const buildReducers = () => {
    let reducers = reduce(reducersName, (result, reducerName) => {
        const handlers = {
            [`setData_${reducerName}`]: setData
        }
        result[reducerName] = (state = data[reducerName], action) => {
            return get(handlers, action.type, d => d)(state, action)
        }
        return result
    }, {})

    return reducers

}
const combineReducers = redux.combineReducers;
export const rootReducer = combineReducers(
    buildReducers()
)
