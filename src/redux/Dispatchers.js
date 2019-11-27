// // const actionsNames = ['add']
// // const reducersNames = ['Task', 'SubTask']
// import {map,get} from 'lodash'
// export const buildDispatcers =(dispatcherName) =>{
//     // const dispatchers = map(actionsNames,(actionName)=>{
//     //     return map(reducersNames ,(reducerName) =>{
//     //         return {reducerName:`${actionName}${reducerName}`}
//     //     } )
//     // })
//     // const dispatcher = get(dis,app) 
//     // actionsNames.reduce(reducersNames,(res, actionName,reducername)=> `${actionName}${reducername}`)
//     const dispatchers = {
//         'addTask' :addTask ,
//         'addSubTask':addSubTask
//     }
    
//     const dispatcher = get(dispatchers,dispatcherName)(text, taskdesc, taskdone, taskid)
//     console.log(dispatcher)
//     return dispatch => dispatch(dispatcher)

// }



