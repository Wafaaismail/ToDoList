export const dcontroller = (data) => ({
    'key': 'users',
    'data': {
        'id': data.users.id,
        'name': data.users.text
    },
    'then': {
        'key': 'tasks',
        'data': {
            'id': data.tasks.id,
            'name': data.tasks.text,
            'description': data.tasks.description,
            'done': data.tasks.completed,
            'parentid': data.tasks.parentid
        },
        'then': {
            'key': 'subTasks',
            'data': {
                'id': data.tasks.id,
                'name': data.tasks.text,
                'description': data.tasks.description,
                'done': data.tasks.completed,
                'parentid': data.tasks.parentid
            }


        }

    }
})