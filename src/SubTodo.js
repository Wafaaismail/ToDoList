import { addSubTask } from './redux/reducers'
import { Formik, Form } from 'formik';
import fields from './components/fields'
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { renderFields } from './components/controller'
import _ from 'lodash'
import { connect } from 'react-redux'
import {buildDispatcers} from './redux/Dispatchers'

export class SubTodo extends Component {

  onSubmit = (values) => {
    let id = _.find(this.props.data.tasks, { "text": this.props.todos.title }).id
    this.props.add('subTasks',values.title, id,values.description, values.done)
  }

  form = (props) => {
    return (
      <Form onSubmit={props.handleSubmit}>
        {renderFields(_.omit(fields, "users"))}
        <button type="submit">Add sub task </button>
      </Form>
    )

  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            title: '',
            description: '',
            done: false,
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
//     addSubTask: (text, taskdesc, taskdone, taskid) => dispatch(addSubTask(text, taskdesc, taskdone, taskid))
//   }
// }

export default connect(
  mapStateToProps,
  buildDispatcers,
  // buildDispatcers('addSubTask')

)(SubTodo)

