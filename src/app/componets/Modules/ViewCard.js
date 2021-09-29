// import React, { Component, useMemo } from 'react'
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   CardHeaderToolbar,
// } from '../../../_aks/_partials/controls'
// import  {Filter}  from './_filter/Filter'
// import { RecordDataTable } from './table/Table'
// import { Grouping } from './_grouping/Grouping'
// import { useUIContext } from './UIContext'

// export default class ViewCard extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { ids: null, newButtonClick: null }
//     this.UIContext = useUIContext()
//   }

//   componentDidMount() {
//     this.setState({
//       ids: this.UIContext.ids,
//       newButtonClick: this.UIContext.newButtonClick,
//     })
//   }
//   componentDidUpdate() {
//     this.setState({
//       ids: this.UIContext.ids,
//       newButtonClick: this.UIContext.newButtonClick,
//     })
//   }

//   render() {
//     return (
//       <Card>
//         <CardHeader title={this.title + ' list'}>
//           <CardHeaderToolbar>
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={this.state.newButtonClick}
//             >
//               {'New ' + this.title}
//             </button>
//           </CardHeaderToolbar>
//         </CardHeader>
//         <CardBody>
//           <Filter />
//           {this.state.ids.length > 0 && <Grouping />}
//           <RecordDataTable />
//         </CardBody>
//       </Card>
//     )
//   }
// }
