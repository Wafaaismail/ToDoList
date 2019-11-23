import React from 'react'
import { Field } from 'formik'

export default function CheckboxFields(props) {
    return (
        <div>
            <label>{props.name}</label>
            <Field name={props.name} type={props.type}  /> 
        </div>
    )
}