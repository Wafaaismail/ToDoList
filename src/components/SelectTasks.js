import React from 'react'
import { map } from 'lodash'
import { connect } from 'react-redux'
export let x
class selectTasks extends React.Component {
    handleChange =(e) =>{
        x =e.target.value
        console.log(x)
      }
    
    render() {
        const { field } = this.props
        return (
            <div class="selecttasks">
                <label>Select Task</label>
                <select {...field} name='tasks' onChange={this.handleChange}>{
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
