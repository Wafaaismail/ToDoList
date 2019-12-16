import React, { Component } from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;
import { dcontroller } from './displayjson'
import DisplayRoot from './DisplayRoot';
import { buildDispatcers } from '../redux/Dispatchers'
import { connect } from 'react-redux'
import { toString } from 'lodash'
export class CollapseDisplay extends Component {
    state = {
        activeKey: false
    }

    callback = key => {
        key ?
            this.setState({
                activeKey: !this.state.activeKey
            }) : console.log("object")
        // this.props.active('users',key)
        // this.props.add('tasks','', '', '', '')
    }
    render() {
        return (
            console.log(this.props.obj),
            console.log(this.props.data),
            <div>
                <Collapse onChange={this.callback}>
                    <Panel header={this.props.data.text} key={this.props.data.id}  >
                        <p>{this.props.data.taskDescription}</p>
                        {(this.state.activeKey && this.props.obj.then) ?
                            <DisplayRoot id={this.props.data.id} s={(this.props.obj).then(toString(this.props.data.id))} />                                            
                        : console.log("dh")

                        }

                    </Panel>

                </Collapse>
            </div>
        )
    }
}
// const mapStateToProps = state => {
//     return {
//       data: state
//     }
//   }
export default connect(
    // mapStateToProps,
    //  mapDispatchToprops,
    buildDispatcers
)(CollapseDisplay)
