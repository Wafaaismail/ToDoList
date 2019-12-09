
import React, { Component } from 'react'
import { get, map } from 'lodash'
import { store } from '../redux/reducers'
// import { Collapse, Panel } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;
let kj, ij


// let state = store.getState()
export default class Display extends Component {
    state = {
        activeKey: {}
    }
    callback = key => {
        console.log(key)
        // this.props.selectedOptions[key] = {}
        // this.props.onChange(this.props.selectedOptions)
        this.setState({
            activeKey: key,
        });

    }
    //  handleSubOptionsListChange = (optionId, subSelections) => {
    //     // add sub selections to current optionId
    //     selectedOptions[optionId] = subSelections;
    //     // call onChange function given by parent
    //     onChange(selectedOptions);
    //   }


    applyDisplay = (s = this.props.data, c = this.props.c) => {
        kj = get(c, 'key', 'defkey')
        console.log(kj)
        {
            return <Collapse onChange={this.callback} >
                <Panel header={kj} key={kj}>
                    {map(s[kj], (content) => {
                        return (<Collapse onChange={this.callback}>
                            <Panel header={content.text} key={content.id}>
                            </Panel>
                        </Collapse>


                        )

                    }),
                     //console.log(this.state.activeKey && c.then) , 
                     console.log(c.then)
                        //   this.applyDisplay(s,c.then)
                        
                    }

                </Panel>
            </Collapse>

        }

    }
    render() {
        console.log(this.state)
        return (
            <div>
                {this.applyDisplay()}
            </div>
        )
    }
}
