import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/rents/Actions";
import { useUIContext } from "../UIContext";

export const DeleteSetting = {
  title: "Rent Delete",
  deleteMessage: "Are you sure to permanently delete this rent?",
  loadingMessage: "Rent is deleting...",
  deletesMessage:"Are you sure to permanently delete selected rents?"
};

// Delete particular record.
export function DeleteDialog({ id, show, onHide }) {
  // UI Context
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      setIds: uiContext.setIds,
      queryParams: uiContext.queryParams,
    };
  }, [uiContext]);

  //  Redux state
  //Todo: state redux state name need to changed.
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.rents.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);
  //TODO: redux functions need to changed based on that or make it genic.
  const deleteHandler = () => {
    // server request for deleting rent by id
    dispatch(actions.deleteRent(id)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchRents(uiProps.queryParams));
      // clear selections list
      uiProps.setIds([]);
      // closing delete modal
      onHide();
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {/*begin::Loading*/}
      {isLoading && <ModalProgressBar />}
      {/*end::Loading*/}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {DeleteSetting.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && <span>{DeleteSetting.deleteMessage}</span>}
        {isLoading && <span>{DeleteSetting.loadingMessage}</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteHandler}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
