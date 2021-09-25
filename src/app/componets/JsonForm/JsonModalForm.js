import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as FieldContols from './Field'
import { Modal } from 'react-bootstrap'
import { ModalProgressBar } from './ModalProgressBar'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

//Define Input Requirements
// onSubmit: saveData
//uiContext: uiContext reference is required
// schema: form Element schema is required to generate form input elements
//headerTitle: title of form is required.
//headerElement: Edit header element data is required.

export default class JsonModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formName: props.headerTitle,
      headerTitle: 'New ' + props.headerTitle,
    }
    this.schemaFields = (props.schema && Object.keys(props.schema)) || []
    this.uiContext = props.uiContext // this is passed from your ui
    this.dispatch = useDispatch()
    this.onSubmit = props.onSubmit
  }
  componentDidMount() {
    this.schemaFields =
      (this.props.schema && Object.keys(this.props.schema)) || []
    this.setHeaderTitle()
  }
  componentDidUpdate() {
    this.schemaFields =
      (this.props.schema && Object.keys(this.props.schema)) || []
    this.setHeaderTitle()
  }

  setHeaderTitle() {
    if (this.props.initialValues && this.props.id) {
      this.setState({
        headerTitle: `Edit ${this.HeaderTitle} '${this.props.headerElement}'`,
      })
    }
  }

  render() {
    return (
      <>
        <Modal
          size="lg"
          show={this.props.show}
          onHide={this.props.onHide}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <EditDialogHeader
            title={this.state.headerTitle}
            actionsLoading={this.props.actionsLoading}
          />
          <Formik
            initialValues={this.props.initialValues}
            enableReinitialize={true}
            validationSchema={this.props.EditSchema}
            onSubmit={(values) => {
              this.onSubmit(values)
            }}
          >
            {({ handleSubmit }) => (
              <>
                <Modal.Body className="overlay overlay-block cursor-default">
                  {this.props.actionsLoading && (
                    <div className="overlay-layer bg-transparent">
                      <div className="spinner spinner-lg spinner-success" />
                    </div>
                  )}
                  <Form
                    onSubmit={handleSubmit}
                    className="form form-label-right"
                  >
                    {this.schemaFields.map((field) => (
                      <div key={field}>
                        <label>{this.props.schema[field].label}</label>
                        {this.getSchemaElement(this.props.schema, field)}
                      </div>
                    ))}
                    <button type="submit">Submit</button>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <button
                    type="button"
                    onClick={this.props.onHide}
                    className="btn btn-light btn-elevate"
                  >
                    Cancel
                  </button>
                  <> </>
                  <button
                    type="submit"
                    onClick={() => handleSubmit()}
                    className="btn btn-primary btn-elevate"
                  >
                    Save
                  </button>
                </Modal.Footer>
              </>
            )}
          </Formik>
        </Modal>
      </>
    )
  }
}

export class EditDialogHeader extends Component {
  constructor(props) {
    super(props)
    this.state = { title: props.title }
  }
  render() {
    return (
      <>
        {this.props.actionsLoading && <ModalProgressBar />}
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {this.state.title}
          </Modal.Title>
        </Modal.Header>
      </>
    )
  }
}
