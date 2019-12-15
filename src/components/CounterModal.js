import React, { Component } from 'react'
import { apply } from '../apply/index'
import { funcs } from '../apply/funcsjson'
import { Formik, Form, Field } from 'formik';
import { find } from 'lodash'
import { connect } from 'react-redux'
import { SelectTasks } from './SelectTasks'
import SubTodo from '../SubTodo'
import { Modal, Button } from 'antd';

let id ,x

export class CounterModal extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };


  onSubmit = (values) => {
    id = values.tasks
    this.showModal()

  }
  
  form = (props) => {
    return (
      <Form onSubmit={props.handleSubmit}>
        <Field
          name='tasks'
          render={(props) => {
            return <SelectTasks {...props} 
            />
          }
          } />

        <Modal
          title="SubTodo"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          {/* <SubTodo todos={this.props.todoValues}/> */}
          <SubTodo/>
        </Modal>

        <button type="submit">Add sub task </button>
      </Form>
    )

  }

  render() {
    // { console.log("counter :",apply(funcs(id))) }
    return (
      <div>
        <Formik
          initialValues={{
            tasks: ''
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


export default connect(
  mapStateToProps,
)(CounterModal)

