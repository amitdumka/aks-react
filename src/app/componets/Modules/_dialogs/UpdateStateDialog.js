import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/rents/Actions";
import { useUIContext } from "../UIContext";
//rent
//Rent

const selectedRents = (entities, ids) => {
  const _rents = [];
  ids.forEach((id) => {
    const rent = entities.find((el) => el.id === id);
    if (rent) {
      _rents.push(rent);
    }
  });
  return _rents;
};

export function UpdateStateDialog({ show, onHide }) {
  // Rents UI Context
  const rentsUIContext = useUIContext();
  const rentsUIProps = useMemo(() => {
    return {
      ids: rentsUIContext.ids,
      setIds: rentsUIContext.setIds,
      queryParams: rentsUIContext.queryParams,
    };
  }, [rentsUIContext]);

  // Rents Redux state
  const { rents, isLoading } = useSelector(
    (state) => ({
      rents: selectedRents(
        state.rents.entities,
        rentsUIProps.ids
      ),
      isLoading: state.rents.actionsLoading,
    }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!rentsUIProps.ids || rentsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rentsUIProps.ids]);

  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();
  const updateStatus = () => {
    // server request for update rents status by selected ids
    dispatch(actions.updateRentsStatus(rentsUIProps.ids, status)).then(
      () => {
        // refresh list after deletion
        dispatch(actions.fetchRents(rentsUIProps.queryParams)).then(
          () => {
            // clear selections list
            rentsUIProps.setIds([]);
            // closing delete modal
            onHide();
          }
        );
      }
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Status has been updated for selected rents
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block cursor-default">
        {/*begin::Loading*/}
        {isLoading && (
          <div className="overlay-layer">
            <div className="spinner spinner-lg spinner-primary" />
          </div>
        )}
        {/*end::Loading*/}
        <table className="table table table-head-custom table-vertical-center overflow-hidden">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>CUSTOMER</th>
            </tr>
          </thead>
          <tbody>
            {rents.map((rent) => (
              <tr key={`id${rent.id}`}>
                <td>{rent.id}</td>
                
                <td>
                  <span className="ml-3">
                    {rent.lastName}, {rent.firstName}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer className="form">
        <div className="form-group">
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(+e.target.value)}
          >
            <option value="0">Suspended</option>
            <option value="1">Active</option>
            <option value="2">Pending</option>
          </select>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate mr-3"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={updateStatus}
            className="btn btn-primary btn-elevate"
          >
            Update Status
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
