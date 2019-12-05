//init gun
const uuidv4 = require('uuid/v4');
const gun = window.Gun()
// const  Gun = require('gun');
// import Gun from 'gun/gun'
import { connect } from 'react-redux'

let arr = [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()];
const user1 = {[arr[0]]: {id: [arr[0]], name: 'wafaa'} }
const user2 = {[arr[1]]: { id: [arr[1]], name: 'sara' }}
const user3 = {[arr[2]]: { id: [arr[2]], name: 'salma' }}
const user4 = {[arr[3]]: { id: [arr[3]], name: 'mona' }}
const user5 = {[arr[4]]: { id: [arr[4]], name: 'samaa' }}
 
const root = gun.get('root') 
const users =root.get('users')
const tasks =root.get('tasks')
const subTasks =root.get('subTasks')

users.set(user1)
users.set(user2)
users.set(user3)
users.set(user4)
users.set(user5)


 export const onSaving =(app,title,users,description,done) =>{
  let id = uuidv4()
   root.get(app).set({title,users,description,done ,id})
   return id
  }
  
  
  // var wafaa = gun.get('person').put({name: 'wafaa', id: 1})
  // wafaa.once(function(data){
  //     console.log("Gun data: ", data);
  //   });
  export const syncRedux = (disp,app,title, users, description, done,id)=>{
    
    root.map().on((data) =>{
      disp(app,title, users, description, done,id)
    })
  }


