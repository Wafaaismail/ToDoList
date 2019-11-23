import React, { Component } from 'react'
import { connect } from 'react-redux'
import {map,filter} from 'lodash'
export  class Display extends Component {
  
    render() {
        return (

            <ul> 
            { // Show tasks as list items
              map(this.props.data.tasks, (value, key) => {
                return <li key={key} value={key}>{value.text}</li>
              })
            }        
          </ul>
  

        )
    //         <div>
    //             <table style="width:100%">
    //                 <tr>
    //                     <th>User</th>
    //                     <th>Tasks</th>
    //                     <th>SubTask</th>
    //                 </tr>
    //                 {
    //                     map(this.props.data.users,(user)=>{
    //                         return (<tr>
    //                                     <td>{user.name}</td>
    //                                     {
                                            
    //                                     }
    //                             </tr>)
    //                 })
    //                 } 
                       
    //             </table>
    //    <h1>{this.props.data.tasks['1'].text}</h1>
    //         </div>
    //     )
    }
}

const mapStateToProps = state => {
    return{
       data : state 
    }
}
export default connect(
    mapStateToProps,
    )(Display)

