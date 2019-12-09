const redux = require('redux');
import _ from 'lodash';
import { rootReducer } from './handlers'
import { toString } from 'lodash'

//================================ init =======================================

// let nextTaskId = 1;
let nextsubtaskid = 1;

//================================ actions =======================================
const ADD_TASK = 'setData_tasks';
const ADD_SUB_TASK = 'setData_subTasks'

//================================ action creator =====================================
// export const addTask = (text, parentid, taskDescription, taskdone) => {
//     return {
//         type: ADD_TASK,
//         id: toString(nextTaskId++),
//         payload: text,
//         fid: parentid,
//         taskDescription: taskDescription,
//         taskdone: taskdone


//     };
// }

// export const addSubTask = (text, taskDescription, taskdone, taskid) => {
//     console.log(taskid)
//     return {
//         type: ADD_SUB_TASK,
//         id: toString(nextsubtaskid++),
//         payload: text,
//         taskDescription: taskDescription,
//         taskdone: taskdone,
//         fid: taskid
//     }

// }
// //================================ reducers =======================================

// const taskReducer = (state = data.tasks, action) => {
//     switch (action.type) {
//         case ADD_TASK:
//             return {
//                  tasks: {
//                 ...state.tasks,
//                 [action.id]: {
//                     text: action.payload,
//                     completed: action.taskdone,
//                     userid: action.fid,
//                     taskDescription: action.taskDescription,
//                     taskid: action.id
//                 }
//                   }
//             }
//         default:
//             return state
//     }
// }

// const subTaskReducer = (state = data.subTasks, action) => {
//     switch (action.type) {
//         case ADD_SUB_Task:
//             return {
//                   subTasks: {
//                 ...state.subTasks,
//                 [action.id]: {
//                     text: action.payload,
//                     completed: action.taskdone,
//                     taskDescription: action.taskDescription,
//                     taskid: action.fid

//                                    }
//                 }
//             }
//             default : 
//             return state

//     }
// }

// const userReducer =(state = data.users , action)=>{

//     return state
// }
// const combineReducers = redux.combineReducers;
// const rootReducer = combineReducers ({
//     task : taskReducer,
//     subtask :subTaskReducer,
//     user:userReducer
// })

const createStore = redux.createStore;
export const store = createStore(rootReducer);
store.subscribe(() => {
    console.log('updated state', store.getState());
});

// store.dispatch(add('my first todo', arr[0], 'ahsdgjs', 'true'));
// store.dispatch(add('my sec todo', arr[2], 'ahsdgjs', 'true'));

// store.dispatch(addSubTask('my first sub todo', 'ahsdgjs', 'true', '1'));
// store.dispatch(addSubTask('my sec sub todo', 'ahsdgjs', 'true', '1'));
// store.dispatch(addSubTask('my third sub todo', 'ahsdgjs', 'true', '1'));
// store.dispatch(addSubTask('my third sub todo', 'ahsdgjs', 'true', '2'));


// console.log('updated state', store.getState());
export default store;
