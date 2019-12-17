import React from 'react'

export class TextboxField extends React.Component {
    render() {
        const { input, field } = this.props

        return (
            <div class="inputcomp">
                <label>{input.name}</label>
                <input {...input} {...field}></input>
            </div>
        )
    }
}

