import React, { Component } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useUIContext } from "../UIContext";

export  class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static uiContext = useUIContext();
  static uiProps = {
    queryParams: this.uiContext.queryParams,
    setQueryParams: this.uiContext.setQueryParams,
  };
  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return (
      <>
        <Formik
          initialValues={this.BaseFilter}
          onSubmit={(values) => {
            this.applyFilter(values);
          }}
        >
          {({
            values,
            handleSubmit,
            handleBlur,
            handleChange,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-2">
                  <select
                    className="form-control"
                    name={this.BaseFilter.status.name}
                    placeholder={this.BaseFilter.status.placeholder}
                    // TODO: Change this code
                    onChange={(e) => {
                      setFieldValue(
                        this.BaseFilter.status.name,
                        e.target.value
                      );
                      handleSubmit();
                    }}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    {this.BaseFilter.status.options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <small className="form-text text-muted">
                    {this.BaseFilter.status.label}
                  </small>
                </div>
                <div className="col-lg-2">
                  <select
                    className="form-control"
                    placeholder={this.BaseFilter.type.placeholder}
                    name={this.BaseFilter.type.name}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue(this.BaseFilter.type.name, e.target.value);
                      handleSubmit();
                    }}
                    value={values.type}
                  >
                    {this.BaseFilter.type.options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <small className="form-text text-muted">
                    {this.BaseFilter.type.label}
                  </small>
                </div>
                <div className="col-lg-2">
                  <input
                    type="text"
                    className="form-control"
                    name={this.BaseFilter.searchText.name}
                    placeholder={this.BaseFilter.searchText.placeholder}
                    onBlur={handleBlur}
                    value={values.searchText}
                    onChange={(e) => {
                      setFieldValue(
                        this.BaseFilter.searchText.name,
                        e.target.value
                      );
                      handleSubmit();
                    }}
                  />
                  <small className="form-text text-muted">
                    {this.BaseFilter.searchText.label}
                  </small>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </>
    );
  }

  prepareFilter(queryParams, values) {
    const { status, type, searchText } = values;
    const newQueryParams = { ...queryParams };
    const filter = {};
    // Filter by status
    filter.status = status !== "" ? +status : undefined;
    // Filter by type
    filter.type = type !== "" ? +type : undefined;
    // Filter by all fields
    filter.lastName = searchText;

    if (searchText) {
      filter.firstName = searchText;
      filter.email = searchText;
      filter.ipAddress = searchText;
    }
    newQueryParams.filter = filter;
    return newQueryParams;
  }
  // queryParams, setQueryParams,
  applyFilter(values) {
    const newQueryParams = this.prepareFilter(this.uiProps.queryParams, values);
    if (!isEqual(newQueryParams, this.uiProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      // update list by queryParams
      this.uiProps.setQueryParams(newQueryParams);
    }
  }
}
