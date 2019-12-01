// import {funcs} from './funcsjson'
import * as functions from './main'
import {map,get} from 'lodash'

import {store} from '../redux/reducers'
export const apply = (jsonfuncs,data ={},state = store.getState(), props={}) =>{

    let path = ''
    console.log(jsonfuncs)
    
    let funcnamefromjson = get(jsonfuncs,'key',"defaultfunc")

    path = get(jsonfuncs,'path',data)

    console.log(path)

    let out =get(functions,funcnamefromjson,'ddd')(data,state[path],jsonfuncs)

    console.log(out)
    if(jsonfuncs.then){
        console.log(jsonfuncs.then)
        return apply(jsonfuncs.then,out,state,props) 
    }
    return out 

}

