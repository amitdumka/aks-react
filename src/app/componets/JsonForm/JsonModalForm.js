import React, { Component } from "react";
import { Formik, Form } from "formik";
//import * as FieldContols from "./Field";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../_aks/_partials/controls";
//import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { GetSchemaElement } from "./Fields";

//Define Input Requirements
// onSubmit: saveData
//uiContext: uiContext reference is required
// schema: form Element schema is required to generate form input elements
//headerTitle: title of form is required.
//headerElement: Edit header element data is required.

export default class JsonModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formName: props.headerTitle,
      headerTitle: this.setHeaderTitle(),
    };
    this.schemaFields = (props.schema && Object.keys(props.schema)) || [];
    //this.uiContext = props.uiContext; // this is passed from your ui
    //this.dispatch = useDispatch();
    this.onSubmit = props.onSubmit;
    this.setHeaderTitle();
  }
  componentDidMount() {
    // this.dispatch = useDispatch();
    this.schemaFields =
      (this.props.schema && Object.keys(this.props.schema)) || [];
    //this.setHeaderTitle();
  }
  componentDidUpdate() {
    //this.dispatch = useDispatch();
    this.schemaFields =
      (this.props.schema && Object.keys(this.props.schema)) || [];
    // this.setHeaderTitle();
  }

  setHeaderTitle() {
    if (this.props.initialValues && this.props.id) {
      return `Edit '${this.props.headerElement}'`;
      // this.setState({
      //   headerTitle: `Edit '${this.props.headerElement}'`,
      // });
    } else return "New " + this.props.headerTitle;
  }

  render() {
    //this.dispatch = useDispatch();
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
              //alert(JSON.stringify(values))
              this.props.onSubmit(values);
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
                  <Form className="form form-label-right card-group row-flex  row-cols-md-3 row-cols-lg-4 row-cols-sm-1 g-4">
                    {this.schemaFields.map((field, index) => (
                      <div key={field}>
                        {GetSchemaElement(this.props.schema, field)}
                      </div>
                    ))}
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
    );
  }
}

export class EditDialogHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title };
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
    );
  }
}

// <div class="grid" style="--bs-rows: 3; --bs-columns: 3;">
//   <div>Auto-column</div>
//   <div class="g-start-2" style="grid-row: 2">Auto-column</div>
//   <div class="g-start-3" style="grid-row: 3">Auto-column</div>
// </div>
