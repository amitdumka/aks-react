import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '../../../_aks/_partials/controls'
import { Formik, Form } from 'formik'
import * as FieldContols from './Field'
import { Modal } from 'react-bootstrap'
import { ModalProgressBar } from './ModalProgressBar'

//TODO: need to implement

export default class JsonCardForm extends Component {
  render() {
    return (
      <Card>
        <FormHeader />
        <InputForm />
      </Card>
    )
  }
}

const FormHeader = (options) => {
  return <CardHeader>{options.header}</CardHeader>
}

const InputForm = (options) => {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={this.rent}
        validationSchema={this.EditSchema}
        onSubmit={(values) => {
          this.saveData(values)
        }}
      >
        {({ handleSubmit }) => (
          <>
            <CardBody className="overlay overlay-block cursor-default">
              {this.actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form className="form form-label-right">
                <div className="form-group row">
                  {/* Store */}
                  <div className="col-lg-4">
                    <Select name="storeId" label="Store">
                      {this.storeList &&
                        this.storeList.map((item) => (
                          <option key={item.storeId} value={item.storeId}>
                            {item.storeName}
                          </option>
                        ))}
                    </Select>
                  </div>

                  {/* Email */}
                  <div className="col-lg-4">
                    <Select
                      name="rentedLocationId"
                      placeholder="Location"
                      label="Location"
                    >
                      <option value="">Select Location</option>
                      {this.locationList &&
                        this.locationList.map((item) => (
                          <option
                            key={item.rentedLocationId}
                            value={item.rentedLocationId}
                          >
                            {item.placeName}
                          </option>
                        ))}
                    </Select>
                  </div>
                  {/* Email */}
                  <div className="col-lg-4">
                    <Select
                      name="rentType"
                      placeholder="Rent Type"
                      label="Rent Type"
                    >
                      <option value="">Select Type</option>
                      {this.rentTypes &&
                        this.rentTypes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </Select>
                  </div>
                </div>

                <div className="form-group row">
                  {/* Date of BankDeposit */}
                  <div className="col-lg-4">
                    <DatePickerField
                      dateFormat="yyyy-MM-dd"
                      name="onDate"
                      label="On Date"
                    />
                  </div>

                  {/*  Father Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="period"
                      component={Input}
                      placeholder="Period"
                      label="Period"
                    />
                  </div>
                  {/*  State Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  {/* Email */}
                  <div className="col-lg-4">
                    <Select name="mode" placeholder="Mode" label="Mode">
                      <option value="">Select Mode</option>
                      {this.payModes &&
                        this.payModes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </Select>
                  </div>
                  {/*  Father Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="paymentDetails"
                      component={Input}
                      placeholder="Payment Details"
                      label="Payment Details"
                    />
                  </div>
                  {/*  Father Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="remarks"
                      component={Input}
                      placeholder="Remarks"
                      label="Remarks"
                    />
                  </div>
                </div>
              </Form>
            </CardBody>
            <CardFooter>
              <button
                type="button"
                onClick={this.onHide}
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
            </CardFooter>
          </>
        )}
      </Formik>
    </>
  )
}
