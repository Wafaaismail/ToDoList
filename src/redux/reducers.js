const redux = require('redux');
const uuidv4 = require('uuid/v4');
import _ from 'lodash';
//================================ init =======================================

let nextTaskId = 1;
let nextsubtaskid = 1;
let arr = [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()];

// task have userid 
//subtask have taskid

export const data = {
    tasks: { subsid: [] },
    subTasks: {},
    users: {
        [arr[0]]: { id: [arr[0]], name: 'wafaa', tasksid: [] },
        [arr[1]]: { id: [arr[1]], name: 'asmaa', tasksid: [] },
        [arr[2]]: { id: [arr[2]], name: 'salma', tasksid: [] },
        [arr[3]]: { id: [arr[3]], name: 'sara', tasksid: [] },
        [arr[4]]: { id: [arr[4]], name: 'samaa', tasksid: [] },
    }
};

//================================ actions =======================================
const ADD_TASK = 'ADD_TASK';
const ADD_SUB_Task = 'add_sub_task'

//================================ action creator =====================================
export const addTask = (text, userid, taskDescription, taskdone) => {
    return {
        type: ADD_TASK,
        taskid: nextTaskId++,
        payload: text,
        userid: userid,
        taskDescription: taskDescription,
        taskdone: taskdone


    };
}
export const addSubTask = (text, taskDescription, taskdone, taskid) => {
    return {
        type: ADD_SUB_Task,
        subtaskid: nextsubtaskid++,
        payload: text,
        taskDescription: taskDescription,
        taskdone: taskdone,
        taskid: taskid
    }

}

// //================================ reducers =======================================
// const taskReducers = (state = data, action) => {
//     switch (action.type) {
//         case ADD_TASK:
//             return {
//                 ...state,
//                 tasks: {
//                     ...state.tasks,
//                     [action.taskid]: {
//                         text: action.payload,
//                         completed: action.taskdone,
//                         userid: action.userid,
//                         taskDescription: action.taskDescription,
//                         taskid: action.taskid



//                     }
//                 },
//                 users: {
//                     ...state.users,
//                     [action.userid]: {
//                         ...state.users[action.userid],
//                         tasksid:
//                             [...state.users[action.userid].tasksid, action.taskid]

//                     }

//                 }

//             }
//         case ADD_SUB_Task:
//             return {
//                 ...state,
//                 subTasks: {
//                     ...state.subTasks,
//                     [action.subtaskid]: {
//                         text: action.payload,
//                         completed: action.taskdone,
//                         taskDescription: action.taskDescription,
//                         taskid: action.taskid

//                     }
//                 },
//                 tasks: {
//                     ...state.tasks,
//                     [action.taskid]: {
//                         ...state.tasks[action.taskid],
//                         subsid:
//                             [...state.tasks.subsid, action.subtaskid]
//                     }
//                 }
//             }

//     }
// }

const taskReducer = (state = data.tasks, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                 tasks: {
                ...state.tasks,
                [action.taskid]: {
                    text: action.payload,
                    completed: action.taskdone,
                    userid: action.userid,
                    taskDescription: action.taskDescription,
                    taskid: action.taskid
                }
                  }
            }
        default:
            return state
    }
}

const subTaskReducer = (state = data.subTasks, action) => {
    switch (action.type) {
        case ADD_SUB_Task:
            return {
                  subTasks: {
                ...state.subTasks,
                [action.subtaskid]: {
                    text: action.payload,
                    completed: action.taskdone,
                    taskDescription: action.taskDescription,
                    taskid: action.taskid

                                   }
                }
            }
            default : 
            return state

    }
}

const userReducer =(state = data.users , action)=>{

    return state
}
const combineReducers = redux.combineReducers;
const rootReducer = combineReducers ({
    task :taskReducer,
    subtask :subTaskReducer,
    user :userReducer
})

const createStore = redux.createStore;
export const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => {
  console.log('updated state', store.getState());
});

store.dispatch(addTask('my first todo', arr[0], 'ahsdgjs', 'true'));
store.dispatch(addTask('my sec todo', arr[2], 'ahsdgjs', 'true'));

store.dispatch(addSubTask('my first sub todo', 'ahsdgjs', 'true', '1'));
store.dispatch(addSubTask('my sec sub todo', 'ahsdgjs', 'true', '1'));
store.dispatch(addSubTask('my third sub todo', 'ahsdgjs', 'true', '1'));
store.dispatch(addSubTask('my third sub todo', 'ahsdgjs', 'true', '2'));


console.log('updated state', store.getState());
export default store;
