
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
        activeKey: ''
    }

    callback = key => {
        console.log(key)
        this.setState({
            activeKey: key
        });

    }

    modifyData = (data) => {
        console.log("hgadgsgshgdhgh")



        // return ((this.state.activeKey) && (this.props.c.then)) ?
        //          filter(data[this.props.c.then.key], con => {

        //         console.log(con.parentid)
        //         console.log(this.state.activeKey)
        //         console.log(con.parentid == this.state.activeKey)
        //         x = (con.parentid == this.state.activeKey) ? con : {}
        //         console.log("res", x)

        //         return x

        //     }) : console.log("as")
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
                    console.log("kj",kj),
                    console.log("c",this.props.c),
                    console.log("s",this.props.s),
                    <Collapse onChange={this.callback} >
                        <Panel header={kj} key={kj}>
                            {map(this.props.s[kj], (content) => {
                                return (
                                <Collapse onChange={this.callback}>
                                    {
                                        
                                        (kj=='users' || (content.parentid == this.state.activeKey)) ?
                                            <Panel header={content.text} key={content.id} >
                                                <p>{content.taskDescription}</p>
                                                
                                                
                                                {
                                                    //console.log("dasd",this.state.activeKey),
                                                    //console.log(content),
                                                    <Display
                                                        s={store.getState()}
                                                        c={this.props.c.then}
                                                    />                               

                                                }
                                            </Panel> : console.log("sa") 
                            }
                                </Collapse>)
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

