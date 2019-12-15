//init gun
const uuidv4 = require('uuid/v4');
const gun = window.Gun()
// const  Gun = require('gun');
// import Gun from 'gun/gun'
import { connect } from 'react-redux'

let arr = [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()];
const user1 = { [arr[0]]: { id: [arr[0]], text: 'wafaa' } }
const user2 = { [arr[1]]: { id: [arr[1]], text: 'sara' } }
const user3 = { [arr[2]]: { id: [arr[2]], text: 'salma' } }
const user4 = { [arr[3]]: { id: [arr[3]], text: 'mona' } }
const user5 = { [arr[4]]: { id: [arr[4]], text: 'samaa' } }

const root = gun.get('root')
//const users = root.get('users')
const tasks = root.get('tasks')
const subTasks = root.get('subTasks')  // root.get('users').set(user1)
  // root.get('users').set(user2)
  // root.get('users').set(user3)
  // root.get('users').set(user4)
  // root.get('users').set(user5)

// export const set_users = () =>{

//   root.get('users').get('1').set({text:'wafaa',id:uuidv4()})
//   root.get('users').get('2').set({text:'mona',id:uuidv4()})
//   root.get('users').get('3').set({text:'sara',id:uuidv4()})
//   root.get('users').get('4').set({text:'rania',id:uuidv4()})
//   root.get('users').get('5').set({text:'loli',id:uuidv4()})
  

// }
// export const sync_users = (disp,data) =>{
//   root.map().on(()=>{
//     disp('users',data)
//   })
// }

export const onSaving = (app, title, users, description, done) => {
  let id = uuidv4()
 

  root.get(app).set({ title, users, description, done, id })
  return id
}


// var wafaa = gun.get('person').put({name: 'wafaa', id: 1})
// wafaa.once(function(data){
//     console.log("Gun data: ", data);
//   });
export const syncRedux = (disp, app) => {

  root.get(app).map().on((data) => {
    //console.log(data)
    
    disp(app, data.title, data.users, data.description, data.done, data.id)
  })
}


