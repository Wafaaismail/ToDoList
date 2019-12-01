import {map,filter,size} from 'lodash'
export const filterSubTasks =(c,subtasks,data) =>{
    console.log("sub",subtasks)
    console.log("data",data)
    console.log(filter(subtasks,data.params))
    return filter(subtasks,data.params)
}

export const countSubTasks =(subs)=>{
    console.log(subs)
   return size(subs)
} 