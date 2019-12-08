// import {funcs} from './funcsjson'
import * as functions from './main'
import { map, get } from 'lodash'

import { store } from '../redux/reducers'
export const apply = (jsonfuncs, data = {}, state = store.getState(), props = {}) => {

    let path = ''

    let funcnamefromjson = get(jsonfuncs, 'key', "defaultfunc")

    path = get(jsonfuncs, 'path', data)


    let out = get(functions, funcnamefromjson, 'ddd')(data, state[path], jsonfuncs)

    if (jsonfuncs.then) {
        return apply(jsonfuncs.then, out, state, props)
    }
    return out

}

