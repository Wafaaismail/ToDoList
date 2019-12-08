import { map, filter, size } from 'lodash'
export const filterSubTasks = (c, subtasks, data) => {
    return filter(subtasks, data.params)
}

export const countSubTasks = (subs) => {
    return size(subs)
} 