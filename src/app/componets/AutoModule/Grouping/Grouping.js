import React, { Component } from "react";
import { useUIContext } from "../UIContext";

export default class Grouping extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static uiContext = useUIContext();
  static uiProps = {
    ids: this.uiContext.ids,
    setIds: this.uiContext.setIds,
    openDeleteDialog: this.uiContext.openDeleteDialog,
    openFetchDialog: this.uiContext.openFetchDialog,
    openUpdateStatusDialog: this.uiContext.openUpdateStatusDialog,
  };

  render() {
    return (
        <div className="form">
          <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
            <div className="col-xl-12">
              <div className="form-group form-group-inline">
                <div className="form-label form-label-no-wrap">
                  <label className="font-bold font-danger">
                    <span>
                      Selected records count: <b>{this.uiProps.ids.length}</b>
                    </span>
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-danger font-weight-bolder font-size-sm"
                    onClick={this.uiProps.openDeleteDialog}
                  >
                    <i className="fa fa-trash"></i> Delete All
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-light-primary font-weight-bolder font-size-sm"
                    onClick={this.uiProps.openFetchDialog}
                  >
                    <i className="fa fa-stream"></i> Fetch Selected
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-light-primary font-weight-bolder font-size-sm"
                    onClick={this.uiProps.openUpdateStatusDialog}
                  >
                    <i className="fa fa-sync-alt"></i> Update Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
