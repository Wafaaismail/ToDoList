const uuidv4 = require('uuid/v4');
// let nextTaskId = 1;
export const buildDispatcers = (dispatch) => {
    return {
        add: (app, text, parentid, taskDescription, taskdone, id) => {
            dispatch({
                type: `setData_${app}`,
                id: id,
                payload: text,
                fid: parentid,
                taskDescription: taskDescription,
                taskdone: taskdone

            })},
        // active :(app,id)=>{
        //     dispatch({
        //         type : `active_${app}`,
        //         active : id

        //     })
        // }
        
        
    }
}

