import { addSubTask } from './redux/reducers'
import { Formik, Form } from 'formik';
import fields from './components/fields'
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { renderFields } from './components/controller'
import _ from 'lodash'
import { connect } from 'react-redux'
export class SubTodo extends Component {

  onSubmit = (values) => {
    let id = _.find(this.props.data.tasks, { "text": this.props.todos.title }).id
    console.log(id)
    this.props.addSubTask(values.title, values.description, values.done, id)
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

const mapDispatchToprops = dispatch => {
  return {
    addSubTask: (text, taskdesc, taskdone, taskid) => dispatch(addSubTask(text, taskdesc, taskdone, taskid))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(SubTodo)

