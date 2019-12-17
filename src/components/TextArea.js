import React from 'react'

export class TextArea extends React.Component {
    render() {
        const { input, field } = this.props
        return (
            <div class="inputcomp">
                <label>{input.name}</label>
                <textarea {...input} {...field} />


            </div>
        )
    }
}