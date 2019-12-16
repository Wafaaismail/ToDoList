// import {funcs} from './funcsjson'
import * as functions from './main'
import { map, get } from 'lodash'

import { store } from '../redux/reducers'
export const apply = (jsonfuncs, data = {}, state = store.getState(), props = {}) => {

    let path = ''

    let funcnamefromjson = get(jsonfuncs, 'key', "defaultfunc")

    path = get(jsonfuncs, 'path', data)
    // path == 'users' ? out = state.users :console.log('object')
    console.log("path",path)
    console.log(get(functions, funcnamefromjson, 'ddd'))
    let out = get(functions, funcnamefromjson, 'ddd')(data, state[path], jsonfuncs)
    console.log("out",out)
    // if (jsonfuncs.then) {
    //     return apply(jsonfuncs.then, out, state, props)
    // }
    return out

}

