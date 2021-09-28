import * as requestFromServer from "../CRUD";
import { itemsSlice, callTypes } from "./ProductItemSlice";

const Api_Name = "Product Item";

const { actions } = itemsSlice;

//TODO: we have to add URl params to be passed.

//Fetch Item by Id or Id Field
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

// Fetch List of Items Based on Filters and search
export const fetchItem = (queryParams) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .find(queryParams) // Create one action for all items.
    .then((response) => {
      const entities = response.data;
      const totalCount = response.data.length;
      dispatch(actions.itemsFetched({ totalCount, entities }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't find " + Api_Name;
      dispatch(actions.catchError({ error, callType: callTypes.list }));
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

export const actionType = [
  "find",
  "create",
  "update",
  "delete",
  "deleteSelected",
  "findbyId",
  "all",
];

export const ReduxAction = ({actionType,url,id,data}) => {
  switch (actionType) {
    case "find":
    case "create":
    case "update":
    case "delete":
    case "deleteSelected":
    case "findbyId":
    case "all":
      break;

    default:
      break;
  }
};
