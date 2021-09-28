import { createSlice } from "@reduxjs/toolkit";

// Try to move to Settings.js File, so it can also made dynamaic , but in last stage.
export const ID_FieldName = "barcode";
export const SliceName = "productItems";
const initialState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  forEdit: undefined,
  lastError: null,
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const itemsSlice = createSlice({
  name: SliceName,
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },

    //New Method
    // Get Item By Id
    byIdFetched: (state, action) => {
      state.actionsLoading = false;
      state.forEdit = action.payload.forEdit;
      state.error = null;
    },
    // List of Items fetched.
    itemsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    //Create an item
    itemCreated: (state, action) => {
      state.ewactionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.item);
    },

    //Update an item
    itemUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map((entity) => {
        if (entity[ID_FieldName] === action.payload.item[ID_FieldName]) {
          return action.payload.item;
        }
        return entity;
      });
    },

    // Delete An Item
    itemDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        (el) => el[ID_FieldName] !== action.payload[ID_FieldName]
      );
    },
    // Delete multiple entities
    itemsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        (el) => !action.payload.ids.includes(el[ID_FieldName])
      );
    },
  },
});

export const intiSlice = ({ SliceName, ID_FieldName }) => {
  return createSlice({
    name: SliceName,
    initialState: initialState,
    reducers: {
      catchError: (state, action) => {
        state.error = `${action.type}: ${action.payload.error}`;
        if (action.payload.callType === callTypes.list) {
          state.listLoading = false;
        } else {
          state.actionsLoading = false;
        }
      },
      startCall: (state, action) => {
        state.error = null;
        if (action.payload.callType === callTypes.list) {
          state.listLoading = true;
        } else {
          state.actionsLoading = true;
        }
      },

      //New Method
      // Get Item By Id
      byIdFetched: (state, action) => {
        state.actionsLoading = false;
        state.forEdit = action.payload.forEdit;
        state.error = null;
      },
      // List of Items fetched.
      itemsFetched: (state, action) => {
        const { totalCount, entities } = action.payload;
        state.listLoading = false;
        state.error = null;
        state.entities = entities;
        state.totalCount = totalCount;
      },
      //Create an item
      itemCreated: (state, action) => {
        state.ewactionsLoading = false;
        state.error = null;
        state.entities.push(action.payload.item);
      },

      //Update an item
      itemUpdated: (state, action) => {
        state.error = null;
        state.actionsLoading = false;
        state.entities = state.entities.map((entity) => {
          if (entity[ID_FieldName] === action.payload.item[ID_FieldName]) {
            return action.payload.item;
          }
          return entity;
        });
      },

      // Delete An Item
      itemDeleted: (state, action) => {
        state.error = null;
        state.actionsLoading = false;
        state.entities = state.entities.filter(
          (el) => el[ID_FieldName] !== action.payload[ID_FieldName]
        );
      },
      // Delete multiple entities
      itemsDeleted: (state, action) => {
        state.error = null;
        state.actionsLoading = false;
        state.entities = state.entities.filter(
          (el) => !action.payload.ids.includes(el[ID_FieldName])
        );
      },
    },
  });
};
