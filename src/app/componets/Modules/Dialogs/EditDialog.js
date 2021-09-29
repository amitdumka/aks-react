// import React, { Component, useEffect, useMemo } from 'react'
// import { useUIContext } from '../UIContext'
// import { Modal } from 'react-bootstrap'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import * as actions from '../../../_redux/rents/Actions'
// import * as commonActions from '../../../../_redux/Actions'
// import { ModalProgressBar } from ''
// import { JsonModalForm } from '../../JsonForm/JsonModalForm'

// export default class EditDialog extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//     //  this.uiContext = useUIContext()
//     this.dispatch = useDispatch()
//   }
//   static uiContext = useUIContext()

//   componentDidMount() {
//     this.uiProps = () => {
//       return {
//         initRent: this.uiContext.initRent,
//       }
//     }

//     const {
//       actionsLoading,
//       rentForEdit,
//       payModes,
//       rentTypes,
//       rentedLocations,
//       storeList,
//     } = useSelector(
//       (state) => ({
//         actionsLoading: state.rents.actionsLoading,
//         rentForEdit: state.rents.rentForEdit,
//         payModes: state.commonTypes.payModes,
//         rentTypes: state.commonTypes.rentTypes,
//         rentedLocations: state.rents.rentedLocations,
//         storeList: state.commonTypes.storeList,
//       }),
//       shallowEqual,
//     )
//     this.dispatch(actions.fetchRent(this.id))
//     this.dispatch(actions.fetchLocations())
//     this.dispatch(commonActions.fetchEnumValue('rentType'))
//     this.dispatch(commonActions.fetchEnumValue('payMode'))
//     this.dispatch(commonActions.fetchStores())
//   }
//   componentDidUpdate() {
//     this.uiProps = () => {
//       return {
//         initRent: this.uiContext.initRent,
//       }
//     }
//     const {
//       actionsLoading,
//       rentForEdit,
//       payModes,
//       rentTypes,
//       rentedLocations,
//       storeList,
//     } = useSelector(
//       (state) => ({
//         actionsLoading: state.rents.actionsLoading,
//         rentForEdit: state.rents.rentForEdit,
//         payModes: state.commonTypes.payModes,
//         rentTypes: state.commonTypes.rentTypes,
//         rentedLocations: state.rents.rentedLocations,
//         storeList: state.commonTypes.storeList,
//       }),
//       shallowEqual,
//     )
//     this.dispatch(actions.fetchRent(this.id))
//     this.dispatch(actions.fetchLocations())
//     this.dispatch(commonActions.fetchEnumValue('rentType'))
//     this.dispatch(commonActions.fetchEnumValue('payMode'))
//     this.dispatch(commonActions.fetchStores())
//   }

//   saveData(data) {
//     //TODO: this function should be passed from modal is created. or try to autogenerate it

//     data.storeId = parseInt(data.storeId)
//     data.rentedLocationId = parseInt(data.rentedLocationId)
//     data.rentType = parseInt(data.rentType)
//     data.mode = parseInt(data.mode)

//     if (!this.id) {
//       // server request for creating rent
//       this.dispatch(actions.createRent(data)).then(() => this.onHide())
//     } else {
//       // server request for updating rent
//       this.dispatch(actions.updateRent(data)).then(() => this.onHide())
//     }
//   }

//   render() {
//     return (
//       <>
//         <JsonModalForm
//           onHide={this.onHide}
//           show={this.show}
//           actionsLoading={this.actionsLoading}
//           onSubmit={this.saveData}
//           initialValues={this.initialValues}
//         />
//       </>

//       // <EditForm
//       //   rent={this.rentForEdit || this.uiProps.initRent}
//       //   payModes={this.payModes}
//       //   rentTypes={this.rentTypes}
//       //   locationList={this.rentedLocations}
//       //   storeList={this.storeList}
//       // />
//     )
//   }
// }

// export function InputDialog({ id, show, onHide, stateName, commonState }) {
//   const defaultUIContext = useUIContext()
//   const defaultUIProps = useMemo(() => {
//     return {
//       initialValues: defaultUIContext.initialValues,
//     }
//   }, [defaultUIContext])

//   // Redux state
//   const dispatch = useDispatch()
//   const { actionsLoading, forEdit, storeList, selectListData } = useSelector(
//     (state) => ({
//       actionsLoading: state[stateName].actionsLoading,
//       forEdit: state[stateName].forEdit,
//       storeList: state[commonState].storeList,
//     }),
//     shallowEqual,
//   )
//   useEffect(() => {
//     // server call for getting Object by id
//     dispatch(actions.fetchById(id))
//     dispatch(commonActions.fetchStores())
//   }, [id, dispatch])
//   const saveData = (data) => {
//     // Handle any enum or item which is int is nature and could received as string value
//     data.storeId = parseInt(data.storeId)
//     if (!id) {
//       //Create and save an item
//       dispatch(actions.createItem(data)).then(() => onHide())
//     } else {
//       // Update and save an item
//       dispatch(actions.updateItem(data)).then(() => onHide())
//     }
//   }
  
//   return (
//     <>
//       <JsonModalForm
//         onHide={onHide}
//         show={show}
//         actionsLoading={actionsLoading}
//         onSubmit={saveData}
//         initialValues={forEdit || defaultUIProps.initialValues}
//         selectListData={selectListData}
//       />
//     </>
//   )
// }
