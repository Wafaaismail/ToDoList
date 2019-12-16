export const dcontroller =id=>( {
    'key':'filterSubTasks',
    'params':"users",
    'path' : 'users',
    'then':(tasks_id)=>( {
        'key':'filterSubTasks',
        'params': {'parentid':tasks_id},
        'path' : 'tasks',
        'then': (subtask_id) =>({
            'key':'filterSubTasks',
            'params':{'parentid':subtask_id},
            'path' : 'subTasks'

        })
    })
})
