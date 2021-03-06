import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { UIProvider } from './UIContext'
import {
  UpdateStateDialog,
  FetchDialog,
  EditDialog,
  CompLoadingDialog,
  DeleteDialog,
  DeletesDialog,
} from 'Dummys'

import ViewCard from './ViewCard'

//Note: Inputs are : InputFormElement and Settings 
// params InputFormElement is for Form Element for Taking input for creating an item or editing an existing item.
// params Settings is having different kind of settings for each part which need to be passed as required.

export default class ComponentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {ComPath:props.Settings.ComPath}
    this.uiEvents = {
      newButtonClick: () => {
        this.history.push(this.props.Settings.ComPath + '/new')
      },
      openEditDialog: (id) => {
        this.history.push(`${this.props.Settings.ComPath}/${id}/edit`)
      },
      openDeleteDialog: (id) => {
        this.history.push(`${this.props.Settings.ComPath}/${id}/delete`)
      },
      openDeletesDialog: () => {
        this.history.push(`${this.props.Settings.ComPath}/deletes`)
      },
      openFetchDialog: () => {
        this.history.push(`${this.props.Settings.ComPath}/fetch`)
      },
      openUpdateStatusDialog: () => {
        this.history.push(this.props.Settings.ComPath + '/updateStatus')
      },
    }
  }

  render() {
    console.log(this.props.Settings.ComPath);
    return (
      <UIProvider UIEvents={this.uiEvents} Filters={this.props.Settings.filters} InitDataModel={this.props.Settings.initDataModel}>
        <CompLoadingDialog />
        <Route path={this.props.Settings.ComPath + '/new'}>
          {({ history, match }) => (
            <EditDialog
              show={match != null}
              onHide={() => {
                history.push(this.props.Settings.ComPath)
              }}
            />
          )}
        </Route>
        <Route path={this.props.Settings.ComPath + '/:id/edit'}>
          {({ history, match }) => (
            <EditDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push(this.props.Settings.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.props.Settings.ComPath + '/deletes'}>
          {({ history, match }) => (
            <DeletesDialog
              show={match != null}
              onHide={() => {
                history.push(this.props.Settings.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.props.Settings.ComPath + '/:id/delete'}>
          {({ history, match }) => (
            <DeleteDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push(this.props.Settings.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.props.Settings.ComPath + '/fetch'}>
          {({ history, match }) => (
            <FetchDialog
              show={match != null}
              onHide={() => {
                history.push(this.props.Settings.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.props.Settings.ComPath + '/updateStatus'}>
          {({ history, match }) => (
            <UpdateStateDialog
              show={match != null}
              onHide={() => {
                history.push(this.props.Settings.ComPath + '')
              }}
            />
          )}
        </Route>
        <ViewCard Settings={this.props.Settings}/>
      </UIProvider>
    )
  }
}
