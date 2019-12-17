import React, { Component } from 'react'
import {apply} from '../apply/index'
import {dcontroller} from './displayjson'
import CollapseDisplay from './CollapseDisplay'
let key ,filterby ,disData ,    dcontrollers
import {store} from '../redux/reducers'
import {get,map} from 'lodash'
export default class DisplayRoot extends Component {
    render() {
        return (
            <div >
                {/* <h1>todos</h1> */}
                 {   console.log(this.props.s),
                    key = get(this.props.s, 'path', 'defkey'),
                    console.log(key),
                    console.log(this.props.id)  , 
                    // filterby = get(dcontroller, 'filterby', 'deffilter'),
                    // console.log(filterby)
                    (key == 'users') ?  disData = store.getState().users : 
                    disData = apply(this.props.s),
                    // console.log(disData),
                    map(disData,(data)=>{
                        // console.log(data)
                        return <CollapseDisplay data = {data} obj={this.props.s}/>
                    })
                    
                }
                
            </div>
        )
    }
}
