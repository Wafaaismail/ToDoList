import {map,filter} from 'lodash'
export const filterSubTasks =(subtasks,taskid) =>{
 
    return filter(subtasks,{'parentid': taskid})
}

export const countSubTasks =(subs)=>{

   let counter =0 
   map(subs,()=>{
       counter+=1
   })
   return counter
} 