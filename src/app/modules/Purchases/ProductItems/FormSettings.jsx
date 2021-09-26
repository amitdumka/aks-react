
// Create form element in the order input is required.

export const FormsElements = {
  barcode: {
    label: 'Barcode',
    placeholder: 'Barcode',
    isRequired: true,
    type: 'text',
  },
  productName: {
    label: 'Product Name',
    placeholder: 'Product Name',
    isRequired: true,
    type: 'text',
  },
  brandId: {
    label: 'Brand Name',
    placeholder: 'Brand Name',
    isRequired: true,
    type: 'select',
    selectFieldList: 'brands',
    selectFieldKey: 'brandId',
    selectFieldValue: 'brandName',
  },
  styleCode: {
    label: 'Style',
    placeholder: 'Style code',
    isRequired: true,
    type: 'text',
  },
  mrp: { label: 'MRP', placeholder: 'MRP', isRequired: true, type: 'text' },
  cost: { label: 'Cost', placeholder: 'Cost', isRequired: true, type: 'text' },
}
