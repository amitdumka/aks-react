import * as Actions from "../Actions";
import * as Slice from "../SliceCreator";

export const ID_FieldName = "barcode";
export const SliceName = "productItems";
export const Api_Name = "Product Item";
export const ProductItemSlice = Slice.intiSlice({ SliceName, ID_FieldName });
const { actions } = ProductItemSlice;

export const ReduxAction = ({ actionType, url, id, item, queryParams }) => {
  switch (actionType) {
    case "find":
      return Actions.fetchItems(actions, url, queryParams);
    case "create":
      return Actions.createItem(actions, url, item);
    case "update":
      return Actions.updateItem(actions, url, item);
    case "delete":
      return Actions.deleteItem(actions, url, id);
    case "deleteSelected":
      return Actions.deleteItems(actions, url, id);
    case "findbyId":
      return Actions.fetchById(actions, url, id);
    case "all":
      return null;

    default:
      return null;
  }
};
