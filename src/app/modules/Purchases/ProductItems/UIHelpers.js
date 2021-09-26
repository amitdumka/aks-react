//TODO: Look for is it relevant  in this context.

export const sizePerPageList = [
  { text: '5', value: 5 },
  { text: '7', value: 7 },
  { text: '10', value: 10 },
]
//TODO: Change based on your requirements. dataField should have main property name
export const defaultSorted = [{ dataField: 'bankName', order: 'asc' }]
//TODO: Change Below based on components
export const initialFilter = {
  filter: {
    account: '',
    branchName: '',
    bankName: '',
    accountType: '',
  },
  sortOrder: 'asc', // asc||desc
  sortField: 'id',
  pageNumber: 1,
  pageSize: 10,
}
