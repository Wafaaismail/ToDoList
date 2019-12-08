
import React from 'react'
import { get ,map} from 'lodash'
import { store } from '../redux/reducers'
import { dcontroller } from './displayjson'
const Checkbox = (selected, label, onChange) => {
    return (
        <div>
            <div className="checkbox"
                onClick={() => onChange(!selected)} />

            <div className="label">{label}</div>

        </div>
    )

}
let dkey
export default function Display(state = this.props.data, selectedOptions, onChange) {

    const handleCheckboxClicked = (selectedOptionId)=>{
        if(selectedOptions[selectedOptionId])
        delete selectedOptions[selectedOptionId]
        else
        selectedOptions[selectedOptionId] = {} 

        onChange(selectedOptions) 

    }
    return (
        <div>
            {
                dkey =get (dcontroller(state.data),'key','d'),
                map(state[dkey],d=>{
                    console.log(d),
                    console.log(d.text)
                }
                // <ul>
                //     <li>{d.text}</li>

                // </ul>
                )


            }
        </div>
    )
}


//  {/* 1-CheckBox to select*/}
//                     {/* <Checkbox */}
//                         {/* selected ={dObjects.key} */}
//                         {/* label = {dObjects.key} */}
//                         {/* // onChange ={} */}
//                         {/* /> */}
//             {/* 2-Recursion base  */}
