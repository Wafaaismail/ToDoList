import React from 'react'
import { Field } from 'formik'
import fields from './fields'
export default function TextboxField(props) {
    return (
        <div>
            <label>{props.name}</label>
            <Field name ={props.name} type ={props.type}></Field>
        </div>
    )
}

