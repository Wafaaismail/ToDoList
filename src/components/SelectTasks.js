import React from 'react'
import { map } from 'lodash'
import { connect } from 'react-redux'

class selectTasks extends React.Component {
    render() {
        const { field } = this.props
        return (
            <div>
                <label>Select Task</label>
                <select {...field} name='tasks'>{
                    map(this.props.data.tasks, (task) => {
                        return (<option value={task.id}>{task.text}</option>)
                    })
                }
                </select>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        data: state
    }
}
export const SelectTasks = connect(mapStateToProps)(selectTasks)
export default SelectTasks
