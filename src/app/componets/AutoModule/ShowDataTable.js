import React, { Component } from 'react'
import { useEffect, useMemo } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory, {
  PaginationProvider,
} from 'react-bootstrap-table2-paginator'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
} from '../../../../../../_metronic/_helpers'
import * as uiHelpers from '../UIHelpers'
import { Pagination } from '../../../../../../_metronic/_partials/controls'
import { useUIContext } from '../UIContext'

// https://www.glennstovall.com/how-to-use-useeffect-and-other-hooks-in-class-components/
// Above link is help need to call useEffect and other hooks as extended functional component.

//TODO: Error/Bug 
//Note: Error Solving 
// action and functions need to passed from function or autogenerate from settings.js
// reduxActions need params need to be passed from settings.js 
// from this actions part is will be created.

export function ShowTable(Settings) {
  // UI Context
  const defaultUIContext = useUIContext()
  const defaultUIProps = useMemo(() => {
    return {
      ids: defaultUIContext.ids,
      setIds: defaultUIContext.setIds,
      queryParams: defaultUIContext.queryParams,
      setQueryParams: defaultUIContext.setQueryParams,
      openEditDialog: defaultUIContext.openEditDialog,
      openDeleteDialog: defaultUIContext.openDeleteDialog,
    }
  }, [defaultUIContext])

  // Getting current state of item list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state[Settings.stateName] }),
    shallowEqual,
  )
  const { totalCount, entities, listLoading } = currentState
  console.log(Settings);
  // Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    defaultUIProps.setIds([])
    // server call by queryParams
    dispatch(actions.fetchItems(defaultUIProps.queryParams))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultUIProps.queryParams, dispatch])
  // Table pagination properties

  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: defaultUIProps.queryParams.pageSize,
    page: defaultUIProps.queryParams.pageNumber,
  }

  return (
    <>
      <DataTable
        TableSettings={Settings}
        entities={entities}
        totalCount={totalCount}
        listLoading={listLoading}
        paginationOptions={paginationOptions}
      />
    </>
  )
}

//Parameters TableSettings, entities, totalCount, listLoading, uiProps
export class DataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <PaginationProvider
          pagination={paginationFactory(this.props.paginationOptions)}
        >
          {({ paginationProps, paginationTableProps }) => {
            return (
              <Pagination
                isLoading={this.props.listLoading}
                paginationProps={paginationProps}
              >
                <BootstrapTable
                  wrapperClasses="table-responsive"
                  bordered={true}
                  classes="table table-head-custom table-vertical-center overflow-hidden"
                  bootstrap4
                  //remote
                  noDataIndication={this.props.TableSettings.noDataIndication}
                  keyField={this.props.TableSettings.keyField}
                  data={
                    this.props.entities === null
                      ? []
                      : this.props.totalCount
                      ? this.props.entities
                      : []
                  }
                  //data={[]}
                  columns={this.props.TableSettings.columns}
                  defaultSorted={uiHelpers.defaultSorted}
                  onTableChange={getHandlerTableChange(
                    this.props.uiProps.setQueryParams,
                  )}
                  selectRow={getSelectRow({
                    entities: this.props.entities,
                    ids: this.props.uiProps.ids,
                    setIds: this.props.uiProps.setIds,
                    idName: this.props.TableSettings.keyField,
                  })}
                  {...paginationTableProps}
                >
                  <PleaseWaitMessage entities={this.props.entities} />
                  <NoRecordsFoundMessage entities={this.props.entities} />
                </BootstrapTable>
              </Pagination>
            )
          }}
        </PaginationProvider>
      </>
    )
  }
}
