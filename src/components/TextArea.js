import React, { Component } from 'react'
import { Field } from 'formik'

export default function Textarea(props) {
    return (
        <div>
            <label>{props.name}</label>
            <Field name={props.name} as={props.type}  /> 
        </div>
    )
}