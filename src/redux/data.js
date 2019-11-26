const uuidv4 = require('uuid/v4');

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
