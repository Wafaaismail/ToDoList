import React from 'react'

export class CheckboxFields extends React.Component {
    render() {
        const { input, field } = this.props
        // console.log(input)
        return (
            <div>
                <label>{input.name}</label>
                <input {...input} {...field} />
            </div>
        )
    }
}