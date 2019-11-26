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
