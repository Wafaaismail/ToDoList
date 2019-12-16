
import React, { Component } from 'react'
import * as Comps from './components/index'
import { map, get } from 'lodash'
import { Field } from 'formik'
export default class MidComp extends Component {
    render() {
        return (
            map(this.props.fields, (field) => {
                return (
                    <div class='forminput'>
                    <Field 
                        name={field.name}
                        render={(props) => {
                            let compname = get(field, "comptype")

                            let Comp = get(Comps, compname)

                            return <Comp {...props} input={field} />
                        }
                        }
                    />
                    </div>




                )
            })


        )
    }
}
