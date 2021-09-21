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

export default class ComponentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.uiEvents = {
      newButtonClick: () => {
        this.history.push(this.Settings.ComPath + '/new')
      },
      openEditDialog: (id) => {
        this.history.push(`${this.Settings.ComPath}/${id}/edit`)
      },
      openDeleteDialog: (id) => {
        this.history.push(`${this.Settings.ComPath}/${id}/delete`)
      },
      openDeletesDialog: () => {
        this.history.push(`${this.Settings.ComPath}/deletes`)
      },
      openFetchsDialog: () => {
        this.history.push(`${this.Settings.ComPath}/fetch`)
      },
      openUpdatesStatusDialog: () => {
        this.history.push(this.Settings.ComPath + '/updateStatus')
      },
    }
  }

  render() {
    return (
      <UIProvider UIEvents={this.uiEvents} Filters={this.Settings.filters} InitDataModel={this.Settings.initDataModel}>
        <CompLoadingDialog />
        <Route path={this.Settings.ComPath + '/new'}>
          {({ history, match }) => (
            <EditDialog
              show={match != null}
              onHide={() => {
                history.push(this.Settings.ComPath)
              }}
            />
          )}
        </Route>
        <Route path={this.Settings.ComPath + '/:id/edit'}>
          {({ history, match }) => (
            <EditDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push(this.Settings.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.Settings.ComPath + '/deletes'}>
          {({ history, match }) => (
            <DeletesDialog
              show={match != null}
              onHide={() => {
                history.push(this.Settings.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.Settings.ComPath + '/:id/delete'}>
          {({ history, match }) => (
            <DeleteDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push(this.Settings.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.Settings.ComPath + '/fetch'}>
          {({ history, match }) => (
            <FetchDialog
              show={match != null}
              onHide={() => {
                history.push(this.Settings.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.Settings.ComPath + '/updateStatus'}>
          {({ history, match }) => (
            <UpdateStateDialog
              show={match != null}
              onHide={() => {
                history.push(this.Settings.ComPath + '')
              }}
            />
          )}
        </Route>
        <ViewCard Settings={this.Settings}/>
      </UIProvider>
    )
  }
}
