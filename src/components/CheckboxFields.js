import React from 'react'

export class CheckboxFields extends React.Component {
    render() {
        const { input, field } = this.props
        return (
            <div>
                <label>{input.name}</label>
                <input {...input} {...field} />
            </div>
        )
    }
}