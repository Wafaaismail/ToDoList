
import React, { Component } from 'react'
import { get, map, filter, reduce } from 'lodash'
import { store } from '../redux/reducers'
// import { Collapse, Panel } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import { toString } from 'lodash'
import validator from 'validator'
let kj, x
let activeKey

export default class Display extends Component {
    state = {
        activeKey: this.props.id
    }

    callback = key => {

       //  validator.isUUID(toString(this.state.activeKey)) ? console.log("ds") :
       (this.state.activeKey == x) ? console.log("Skip"):
        this.setState({
            activeKey: key
        });
        

    }
    render() {
        return (
            <div>
                {kj = get(this.props.c, 'key', 'defkey'),
                    <Collapse defaultActiveKe={this.state.activeKey}>
                        <Panel header={kj} key={kj}>
                            {map(this.props.s[kj], (content) => {
                                return (
                                    <Collapse onChange={this.callback} >
                                        { 
                                            (this.state.activeKey == content.parentid || kj == 'users' ||
                                            this.state.activeKey == content.id ) ?
                                                <Panel header={content.text} key={content.id}  >
                                                    <p>{content.taskDescription}</p>
                                                    
                                                    { 
                                                        (this.props.c.then) ? (
                                                            <Display
                                                                id={this.state.activeKey}
                                                                s={store.getState()}
                                                                c={this.props.c.then}
                                                            />


                                                        ) : console.log("sss", this.state.activeKey)
                                                    }
                                                </Panel> : console.log("s", this.state.activeKey)}
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

