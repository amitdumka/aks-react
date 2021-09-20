import React from "react";
import {
  Input,
  Select,
  DatePickerField,
} from "../../../../../_metronic/_partials/controls";
import { Field } from "formik";

function FormElements(props) {
  return (
    <>
      <div className="form-group row">
        {/* Store */}
        <div className="col-lg-4">
          <Select name="storeId" label="Store">
            {props.storeList &&
              props.storeList.map((item) => (
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
            {props.locationList &&
              props.locationList.map((item) => (
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
          <Select name="rentType" placeholder="Rent Type" label="Rent Type">
            <option value="">Select Type</option>
            {props.rentTypes &&
              props.rentTypes.map((item) => (
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
            {payModes &&
              payModes.map((item) => (
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
    </>
  );
}

export default FormElements;
