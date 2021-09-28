import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  forEdit: undefined,
  lastError: null,
}

export const callTypes = {
  list: 'list',
  action: 'action',
}

const ID_FiledName = 'barcode'
const SliceName = 'productItems'

export const itemsSlice = createSlice({
  name: SliceName,
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false
      } else {
        state.actionsLoading = false
      }
    },
    startCall: (state, action) => {
      state.error = null
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true
      } else {
        state.actionsLoading = true
      }
    },

    //New Method
    // Get Item By Id
    byIdFetched: (state, action) => {
      state.actionsLoading = false
      state.forEdit = action.payload.forEdit
      state.error = null
    },
    itemsFetched: (state, action) => {
      const { totalCount, entities } = action.payload
      state.listLoading = false
      state.error = null
      state.entities = entities
      state.totalCount = totalCount
    },
    //Create an item
    itemCreated: (state, action) => {
      state.ewactionsLoading = false
      state.error = null
      state.entities.push(action.payload.item)
    },

    //Update an item
    itemUpdated: (state, action) => {
      state.error = null
      state.actionsLoading = false
      state.entities = state.entities.map((entity) => {
        if (entity[ID_FiledName] === action.payload.item[ID_FiledName]) {
          return action.payload.item
        }
        return entity
      })
    },

    // Delete An Item
    itemDeleted: (state, action) => {
      state.error = null
      state.actionsLoading = false
      state.entities = state.entities.filter(
        (el) => el[ID_FiledName] !== action.payload[ID_FiledName],
      )
    },
    // Delete multiple entities
    itemsDeleted: (state, action) => {
      state.error = null
      state.actionsLoading = false
      state.entities = state.entities.filter(
        (el) => !action.payload.ids.includes(el[ID_FiledName]),
      )
    },
  },
})
