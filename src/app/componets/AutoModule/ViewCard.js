import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from '../../../_aks/_partials/controls'
import { Filter } from './filter/Filter'
import { RecordDataTable } from './table/Table'
import { Grouping } from './grouping/Grouping'
import { useUIContext } from './UIContext'

//Note : Parameters is Settings which will have all type of settings sets, which is need to here and further down.

export default class ViewCard extends Component {
  constructor(props) {
    super(props)
    this.state = { ids: null, newButtonClick: null ,title:props.Settings.componentName}
  }

  static UIContext = useUIContext();

  componentDidMount() {
    this.setState({
      ids: this.UIContext.ids,
      newButtonClick: this.UIContext.newButtonClick,
    })
  }
  componentDidUpdate() {
    this.setState({
      ids: this.UIContext.ids,
      newButtonClick: this.UIContext.newButtonClick,
    })
  }

  render() {
    return (
      <Card>
        <CardHeader title={this.state.title + ' list'}>
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.state.newButtonClick}
            >
              {'New ' + this.state.title}
            </button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <Filter BaseFilter={this.props.Settings.BaseFilter}/>
          {this.state.ids.length > 0 && <Grouping />}
          <RecordDataTable Settings={this.props.Settings.tableSettings} />
        </CardBody>
      </Card>
    )
  }
}
