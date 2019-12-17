import React, { Component } from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;
import { dcontroller } from './displayjson'
import DisplayRoot from './DisplayRoot';
import { buildDispatcers } from '../redux/Dispatchers'
import { connect } from 'react-redux'
import { toString } from 'lodash'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export class CollapseDisplay extends Component {
    state = {
        activeKey: false
    }

    callback = key => {
        key ?
            this.setState({
                activeKey: !this.state.activeKey
            }) : console.log("object")

    }
    render() {
        return (
            console.log(this.props.data),
            //using collapse antD -> working
            // <div>
            //     <Collapse onChange={this.callback}>
            //         <Panel header={this.props.data.text} key={this.props.data.id}  >
            //             <p>{this.props.data.taskDescription}</p>
            //             {(this.state.activeKey && this.props.obj.then) ?
            //                 <DisplayRoot id={this.props.data.id} s={(this.props.obj).then(toString(this.props.data.id))} />                                            
            //             : console.log("dh")

            //             }

            //         </Panel>

            //     </Collapse>
            // </div>

            //     {this.state.activeKey ?
            //         (<ExpandMoreIcon onClick={this.callback} />
            //             <p>this.props.data.text</p>)
            //             : console.log("s")

            //         < button type="submit" >Edit</button>
            // }

            <div class='collapsedisp'>
                {console.log(this.props.data),
                    // this.state.activeKey ?
                    (<div class='co'>
                        {console.log('objec')}
                        <ExpandMoreIcon onClick={this.callback} />,
                        <p>{this.props.data.text}</p>
                        <button type="submit" >Edit</button>
                        {(this.state.activeKey && this.props.obj.then) ?
                            (<div class='disco'>
                                <br/>
                                <br/>
                                <DisplayRoot id={this.props.data.id} s={(this.props.obj).then(toString(this.props.data.id))} />
                            </div>


                            )
                            : console.log("dh")}
                    </div>
                    )
                    // : console.log("S")

                    // ( 
                    // <div class='co'>
                    //     <ExpandMoreIcon onClick={this.callback} />
                    //     <p>{this.props.data.text}</p>,
                    //     <button type="submit" >Edit</button>

                    // </div>
                    // )

                }

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
