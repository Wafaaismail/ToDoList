import React from 'react'
import { map } from 'lodash'
import { connect } from 'react-redux'

class SelectField extends React.Component {
    render() {
        const { input, field } = this.props
        return (
            <div class="inputcomp">
                <label>{input.name}</label>
                <select {...field} {...input}>{
                    map(this.props.data.users, (user) => {
                        return (<option value={user.id}>{user.text}</option>)
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
export const Select = connect(mapStateToProps)(SelectField)
