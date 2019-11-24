import React from 'react'

export class TextboxField extends React.Component {
    render() {
        const { input, field } = this.props
        // console.log(input)
        // console.log(field)

        return (
            <div>
                <label>{input.name}</label>
                <input {...input} {...field}></input>
            </div>
        )
    }
}

