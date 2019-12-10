
import React, { Component } from 'react'
import { get, map, filter, reduce } from 'lodash'
import { store } from '../redux/reducers'
// import { Collapse, Panel } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;
let kj, x


// let state = store.getState()
export default class Display extends Component {
    state = {
        activeKey: {}
    }

    callback = key => {
        console.log(key)
        this.setState({
            activeKey: key,
        });

    }

    // applyDisplay = (s = store.getState(), c = this.props.c) => {
    //     kj = get(c, 'key', 'defkey')
    //     console.log("s",s)
    //     console.log("c",c)


    //     {
    //         return (

    // }
    render() {
        // console.log(this.state)
        return (
            <div>
                {kj = get(this.props.c, 'key', 'defkey'),
                    console.log(kj),
                    console.log(this.props.c),
                    console.log(this.props.s),
                    <Collapse onChange={this.callback} >
                        <Panel header={kj} key={kj}>
                            {
                                map(this.props.s[kj], (content) => {
                                    return (<Collapse onChange={this.callback}>
                                        {
                                            ((this.state.activeKey) && (this.props.c.then) && (kj != 'users')) ?
                                                filter(this.props.s[this.props.c.then.key], con => {
                                                    x = (con.parentid == this.state.activeKey) ? con : {},
                                                        <Panel header={x.text} key={x.id} >
                                                            <p>{x.taskDescription}</p>

                                                            {
                                                                // ((this.state.activeKey) && (this.props.c.then)) ?
                                                                //     x = filter(this.props.s[this.props.c.then.key], con => {

                                                                //         console.log(con.parentid)
                                                                //         console.log(this.state.activeKey)
                                                                //         console.log(con.parentid == this.state.activeKey)

                                                                //         x = (con.parentid == this.state.activeKey) ? con : {}
                                                                //         console.log("res", x)

                                                                //         return x

                                                                //     }) &&
                                                                <Display
                                                                    s={store.getState()}
                                                                    c={this.props.c.then}
                                                                />   //  : console.log("sdas")                            

                                                            }
                                                        </Panel>
                                                }) : console.log("dsa") }
                                    </Collapse>
                                    )
                                })
                            }
                        </Panel>
                        {/* {
                            ((this.state.activeKey) && (this.props.c.then)) ?
                                x = filter(this.props.s[this.props.c.then.key], con => {

                                    console.log(con.parentid)
                                    console.log(this.state.activeKey)
                                    console.log(con.parentid == this.state.activeKey)

                                    x = (con.parentid == this.state.activeKey) ? con : {}
                                    console.log("res", x)

                                    return x

                                }) &&
                                <Display
                                    s = {this.props.s}
                                    c ={this.props.c.then}
                                />     : console.log("sdas")                            
                            
                            } */}
                    </Collapse>

                }

            </div>
        )
    }
}
