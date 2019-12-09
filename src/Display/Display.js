
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
        activeKey :{}
    }
    callback = key => {
        console.log(key)
        this.props.selectedOptions[key] = {}
        this.props.onChange(this.props.selectedOptions)
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


    applyDisplay = (s = this.props.data, c = this.props.c, onChange = this.props.onChange, selectedOptions = this.props.selectedOptions) => {
        kj = get(c, 'key', 'defkey')
        ij = get(c, 'id', 'defid')
        {
            return <Collapse onChange={this.callback} >
                <Panel header={kj} key={ij}>
                    {map(s[kj], (content) => {
                        return (<Collapse onChange={this.callback}>
                            <Panel header={content.text} key={content.id}>
                            </Panel>
                        </Collapse>)

                        //  (c.then && this.state.activeKey) &&console.log(c.then)

                    })}

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
