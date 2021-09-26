import React, { Component } from 'react'
import { useEffect, useMemo } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory, {
  PaginationProvider,
} from 'react-bootstrap-table2-paginator'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../_redux/rents/Actions'
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
  headerSortingClasses,
} from '../../../../../../_metronic/_helpers'
import * as uiHelpers from '../UIHelpers'
import * as columnFormatters from './column-formatters'
import { Pagination } from '../../../../../../_metronic/_partials/controls'
import { useUIContext } from '../UIContext'

// https://www.glennstovall.com/how-to-use-useeffect-and-other-hooks-in-class-components/
// Above link is help need to call useEffect and other hooks as extended functional component.


// Note: Parameters is Setting, which is part of main setting called TableSettings.
// It helps to load create table and load data from redux-State
export default class RecordDataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    
    this.currentState = useSelector(
      (reduxState) => ({ currentState: reduxState.rents }),
      shallowEqual,
    )
    const { totalCount, entities, listLoading } = this.currentState
    this.dispatch = useDispatch()  
    // Table pagination properties
    this.paginationOptions = {
      custom: true,
      totalSize: totalCount,
      sizePerPageList: uiHelpers.sizePerPageList,
      sizePerPage: this.uiProps.queryParams.pageSize,
      page: this.uiProps.queryParams.pageNumber,
    }
  }
  static uiContext = useUIContext()

  componentDidMount() {
    this.uiProps = () => {
      return {
        ids: this.uiContext.ids,
        setIds: this.uiContext.setIds,
        queryParams: this.uiContext.queryParams,
        setQueryParams: this.uiContext.setQueryParams,
        openEditDialog: this.uiContext.openEditDialog,
        openDeleteDialog: this.uiContext.openDeleteDialog,
      }
    }
    // clear selections list
    this.uiProps.setIds([])
    // server call by queryParams
    this.dispatch(actions.fetchProductItems(this.uiProps.queryParams))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }
  componentDidUpdate() {
    this.uiProps = () => {
      return {
        ids: this.uiContext.ids,
        setIds: this.uiContext.setIds,
        queryParams: this.uiContext.queryParams,
        setQueryParams: this.uiContext.setQueryParams,
        openEditDialog: this.uiContext.openEditDialog,
        openDeleteDialog: this.uiContext.openDeleteDialog,
      }
    }
    // clear selections list
    this.uiProps.setIds([])
    // server call by queryParams
    this.dispatch(actions.fetchProductItems(this.uiProps.queryParams))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  render() {
    return (
      <>
        <PaginationProvider
          pagination={paginationFactory(this.paginationOptions)}
        >
          {({ paginationProps, paginationTableProps }) => {
            return (
              <Pagination
                isLoading={this.listLoading}
                paginationProps={paginationProps}
              >
                <BootstrapTable
                  wrapperClasses="table-responsive"
                  bordered={true}
                  classes="table table-head-custom table-vertical-center overflow-hidden"
                  bootstrap4
                  //remote
                  noDataIndication={this.TableSettings.noDataIndication}
                  keyField={this.TableSettings.keyField}
                  data={
                    this.entities === null
                      ? []
                      : this.totalCount
                      ? this.entities
                      : []
                  }
                  //data={[]}
                  columns={this.TableSettings.columns}
                  defaultSorted={uiHelpers.defaultSorted}
                  onTableChange={getHandlerTableChange(
                    this.uiProps.setQueryParams,
                  )}
                  selectRow={getSelectRow({
                    entities: this.entities,
                    ids: this.uiProps.ids,
                    setIds: this.uiProps.setIds,
                    idName: this.TableSettings.keyField,
                  })}
                  {...paginationTableProps}
                >
                  <PleaseWaitMessage entities={this.entities} />
                  <NoRecordsFoundMessage entities={this.entities} />
                </BootstrapTable>
              </Pagination>
            )
          }}
        </PaginationProvider>
      </>
    )
  }
}
