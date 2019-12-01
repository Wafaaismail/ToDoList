
export const funcs =(taskid) =>({

    'key' : 'filterSubTasks',
    'path': 'subTasks',
    'params' : {
        'parentid':taskid
            },

            
    'then':{
            'key' : 'countSubTasks',
            'countkey' : '',
            start : 0
            }
        

    })
