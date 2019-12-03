import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from './redux/reducers'
import { Formik, Form } from 'formik';
import {apply}  from './apply/index'
// import {buildDispatcers} from './redux/Dispatchers'
import {funcs} from './apply/funcsjson'
import _ from 'lodash'
import 'antd/dist/antd.css';
import SubTodo from './SubTodo'
import { renderFields } from './components/controller'
//import * as Yup from 'yup';
import {buildDispatcers} from './redux/Dispatchers'
import fields from './components/fields'
import CounterModal from './components/CounterModal';
let todoValues = {}

class Todo extends Component {
  
  onSubmit = (values) => {
    this.props.add('tasks',values.title, values.users, values.description, values.done)
    todoValues = values
    console.log(values)


  }

  form = (props) => {
    // console.log(props)
    return (
      <Form onSubmit={props.handleSubmit}>

        {renderFields(fields)}
        <button type="submit">Submit</button>
        {/* <SubTodo  vis = {this.state} todos={todoValues} handleCancel={this.handleCancel}/> */}
        <CounterModal todoValues ={todoValues}/> 
        {/* <Button type="button" onClick={this.showModal}>add subTask</Button> */}
        
      </Form>
    )

  }

  //schema validation
  // schema = () => {
  //   const schema  = Yup.object().shape({
  //     title : Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required') ,
  //     description : Yup.string()
  //     .min(15, 'Too Short!')
  //     .max(100, 'Too Long!')
  //     .required('Required')

  //   })
  // }
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            title: '',
            description: '',
            done: false,
            users: '',
          }

          }
          onSubmit={this.onSubmit}
          render={this.form}
          validationSchema={this.schema} />

      </div>

    )
  }
}
const mapStateToProps = state => {
  return {
    data: state
  }
}

// const mapDispatchToprops = dispatch => {
//   return {
//     addTask: (text, userid, taskdesc, taskdone) => dispatch(addTask(text, userid, taskdesc, taskdone))
//   }
// }

export default connect(
  mapStateToProps,
  //  mapDispatchToprops,
   buildDispatcers
)(Todo)


