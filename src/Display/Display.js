
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
        this.setState({
            activeKey: key,
        });

    }

    applyDisplay = (s = store.getState(), c = this.props.c) => {
        kj = get(c, 'key', 'defkey')
        console.log(kj)
        console.log(s)
        {
            return (<Collapse onChange={this.callback} >
                <Panel header={kj} key={kj}>
                    {map(s[kj], (content) => {
                        return (<Collapse onChange={this.callback}>
                            <Panel header={content.text} key={content.id} />
                        </Collapse>)
                    })
                    }
                </Panel>
                {
                    ((this.state.activeKey) && (c.then)) ? this.applyDisplay(s, c = c.then) : console.log("enough")
                    //console.log(c.then)
                    //  this.applyDisplay(s,c.then)

                }
            </Collapse>

            )
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
 //console.log(this.state.activeKey && c.then) ,
                    //  console.log(c.then)
                        //   this.applyDisplay(s,c.then)


 //  handleSubOptionsListChange = (optionId, subSelections) => {
    //     // add sub selections to current optionId
    //     selectedOptions[optionId] = subSelections;
    //     // call onChange function given by parent
    //     onChange(selectedOptions);
    //   }
