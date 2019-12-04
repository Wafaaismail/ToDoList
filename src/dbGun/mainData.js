//init gun
const uuidv4 = require('uuid/v4');
// const  Gun = require('gun');
import Gun from 'gun/gun'

// let arr = [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()];

// // task have userid 
// //subtask have taskid

//  const mainData = {
//     tasks: {},
//     subTasks: {},
//     users: {
//         [arr[0]]: { id: [arr[0]], name: 'wafaa' },
//         [arr[1]]: { id: [arr[1]], name: 'asmaa' },
//         [arr[2]]: { id: [arr[2]], name: 'salma' },
//         [arr[3]]: { id: [arr[3]], name: 'sara'  },
//         [arr[4]]: { id: [arr[4]], name: 'samaa' },
//     }
// };

//  console.log(mainData)
// const  data = gun.get('key').put('mainData')
// data.get('tasks').put({'title':"todo1"})
 export const onSaving =() =>{
    const  gun = Gun()
    var wafaa = gun.get('person').put({name: 'wafaa', id: 1})

    wafaa.once(function(data){
        console.log("Gun data: ", data);
      });

    // console.log(data)
    // data.get('app').put(data)
    // data.on(() =>{
    //     add('tasks',data.title, data.users, data.description, data.done)
    // })
}


