import { rootReducer } from './handlers';

const uuidv4 = require('uuid/v4');

let arr = [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()];

// task have userid 
//subtask have taskid
const gun = window.Gun()
const root = gun.get('root')

export  const data = {
    tasks: {},
    subTasks: {},
    users: {
       
            '1': { id: '1', text: 'wafaa' },
            '2': { id: '2', text: 'asmaa' },
            '3': { id: '3', text: 'loli' },
            '4': { id: '4', text: 'mona' },
            '5': { id: '5', text: 'rania' }
       
    }
};
