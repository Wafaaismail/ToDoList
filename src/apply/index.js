// import {funcs} from './funcsjson'
import * as functions from './main'
import {map,get} from 'lodash'


export const apply = (jsonfuncs,data) =>{
    console.log(jsonfuncs.params)
    let out ,params={}
    map(jsonfuncs,()=>{

    let funcnamefromjson = get(jsonfuncs,'key',"defaultfunc")

    params = get(jsonfuncs,'params','defaultparams')

    console.log(params)

    let out =get(functions,funcnamefromjson,'ddd')(data[params.subtasks],'1')
    
    console.log(out)

    
    return apply(jsonfunc,out)
    })
}

