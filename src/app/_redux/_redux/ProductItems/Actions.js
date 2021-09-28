import * as requestFromServer from "./Crud";
import { itemsSlice, callTypes } from "./Slice";

const Api_Name = "Product Item";

const { actions } = itemsSlice;

export const fetchRentedLocations = (queryParams) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findRentedLocations(queryParams)
    .then((response) => {
      const entities = response.data;
      const totalCount = response.data.length;
      console.log(response);
      console.log(response.data.length);
      dispatch(actions.rentedLocationsFetched({ totalCount, entities }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't find rentedLocations";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchById = (id) => (dispatch) => {
  if (!id) {
    return dispatch(actions.byIdFetched({ forEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getById(id)
    .then((response) => {
      const item = response.data;
      dispatch(actions.byIdFetched({ forEdit: item }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find " + Api_Name;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteItem = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteItem(id)
    .then((response) => {
      dispatch(actions.itemDeleted({ id }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't delete " + Api_Name;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createItem = (forCreation) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createItem(JSON.stringify(forCreation))
    .then((response) => {
      const item = response.data;
      dispatch(actions.itemCreated({ item }));
    })
    .catch((error) => {
      error.clientMessage = "Can't create " + Api_Name;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateItem = (item) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateItem(item)
    .then(() => {
      dispatch(actions.itemUpdated({ item }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update " + Api_Name;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteItems = (ids) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteItems(ids)
    .then(() => {
      dispatch(actions.itemsDeleted({ ids }));
    })
    .catch((error) => {
      error.clientMessage = "Can't delete " + Api_Name + "s";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
