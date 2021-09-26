import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_aks/_partials/controls";
import { Formik, Form } from "formik";
import * as FieldContols from "./Fields";
import { Modal } from "react-bootstrap";

import { ModalProgressBar } from "../../../_aks/_partials/controls";
//import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { GetSchemaElement } from "./Fields";

//TODO: need to implement

export default class JsonCardForm extends Component {
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
        <Card size="lg" aria-labelledby="example-modal-sizes-title-lg">
          <EditCardHeader
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
                <CardBody className="overlay overlay-block cursor-default">
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
                </CardBody>
                <CardFooter className="text-center small p-1 bg-light border ">
                  <button
                    type="submit"
                    onClick={() => handleSubmit()}
                    className="btn btn-primary btn-elevate float-right m-2"
                  >
                    Save
                  </button>
                  
                  <button
                    type="button"
                    onClick={this.props.onHide}
                    className="btn btn-light btn-elevate float-right m-2"
                  >
                    Cancel
                  </button>
                </CardFooter>
              </>
            )}
          </Formik>
        </Card>
      </>
    );
  }
}

export class EditCardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title };
  }
  render() {
    return (
      <>
        {this.props.actionsLoading && <ModalProgressBar />}
        <CardHeader title={this.state.title}>
          {/* <CardHeaderToolbar id="example-modal-sizes-title-lg">
            {this.state.title}
          </CardHeaderToolbar> */}
        </CardHeader>
      </>
    );
  }
}
