import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/rents/Actions";
import { useUIContext } from "../UIContext";
import {ModalProgressBar} from "../../../../../../_metronic/_partials/controls";

// Delete Selected Records
export const DeleteSetting = {
  title: "Rent Delete",
  deleteMessage: "Are you sure to permanently delete this rent?",
  loadingMessage: "Rent is deleting...",
  deletesMessage:"Are you sure to permanently delete selected rents?"
};

export function DeletesDialog({ show, onHide }) {
  //  UI Context
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      ids: uiContext.ids,
      setIds: uiContext.setIds,
      queryParams: uiContext.queryParams,
    };
  }, [uiContext]);

  //  Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.rents.actionsLoading }),
    shallowEqual
  );

  // if component row weren't selected we should close modal
  useEffect(() => {
    if (!uiProps.ids || uiProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uiProps.ids]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteHandler = () => {
    // server request for deleting rent by selected ids
    dispatch(actions.deleteRents(uiProps.ids)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchRents(uiProps.queryParams)).then(
        () => {
          // clear selections list
          uiProps.setIds([]);
          // closing delete modal
          onHide();
        }
      );
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
        {!isLoading && (
          <span>{DeleteSetting.deletesMessage}</span>
        )}
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
