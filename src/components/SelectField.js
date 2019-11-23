import React from 'react'
import { Field } from 'formik'
import { find } from 'lodash'

import { data } from '../redux/reducers';
export default function TextboxField(props) {
    // console.log(data)
    const user1 = find(data.users, (user) => {
        return user.name === 'wafaa'
    })
    //  console.log(user1)
    const user2 = find(data.users, (user) => {
        return user.name === 'asmaa'
    })

    const user3 = find(data.users, (user) => {
        return user.name === 'salma'
    })

    const user4 = find(data.users, (user) => {
        return user.name === 'sara'
    })

    const user5 = find(data.users, (user) => {
        return user.name === 'samaa'
    })


    return (
        <div>
            <label>{props.name}</label>
            <Field name={props.name} as={props.type}>
                <option value={user1.id}>user1</option>
                <option value={user2.id}>user2</option>
                <option value={user3.id}>user3</option>
                <option value={user4.id}>user4</option>
                <option value={user5.id}>user5</option>

            </Field>

        </div>
    )
}
