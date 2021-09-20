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
        this.history.push(this.ComPath + '/new')
      },
      openEditDialog: (id) => {
        this.history.push(`${this.ComPath}/${id}/edit`)
      },
      openDeleteDialog: (id) => {
        this.history.push(`${this.ComPath}/${id}/delete`)
      },
      openDeletesDialog: () => {
        this.history.push(`${this.ComPath}/deletes`)
      },
      openFetchsDialog: () => {
        this.history.push(`${this.ComPath}/fetch`)
      },
      openUpdatesStatusDialog: () => {
        this.history.push(this.ComPath + '/updateStatus')
      },
    }
  }

  render() {
    return (
      <UIProvider UIEvents={this.uiEvents} Filters={this.filters} InitDataModel={this.initDataModel}>
        <CompLoadingDialog />
        <Route path={this.ComPath + '/new'}>
          {({ history, match }) => (
            <EditDialog
              show={match != null}
              onHide={() => {
                history.push(this.ComPath)
              }}
            />
          )}
        </Route>
        <Route path={this.ComPath + '/:id/edit'}>
          {({ history, match }) => (
            <EditDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push(this.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.ComPath + '/deletes'}>
          {({ history, match }) => (
            <DeletesDialog
              show={match != null}
              onHide={() => {
                history.push(this.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.ComPath + '/:id/delete'}>
          {({ history, match }) => (
            <DeleteDialog
              show={match != null}
              id={match && match.params.id}
              onHide={() => {
                history.push(this.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.ComPath + '/fetch'}>
          {({ history, match }) => (
            <FetchDialog
              show={match != null}
              onHide={() => {
                history.push(this.ComPath + '')
              }}
            />
          )}
        </Route>
        <Route path={this.ComPath + '/updateStatus'}>
          {({ history, match }) => (
            <UpdateStateDialog
              show={match != null}
              onHide={() => {
                history.push(this.ComPath + '')
              }}
            />
          )}
        </Route>
        <ViewCard />
      </UIProvider>
    )
  }
}
