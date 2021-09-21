
export const FormsElements=[
    {id:1, fieldName:'barcode', label:"Barcode", typeOf:"string", isRequired:true},
    {id:2, fieldName:'productName', label:"Product Name", typeOf:"string", isRequired:true},
    {id:3, fieldName:'brandId', label:"BrandName", typeOf:"int", isRequired:true, type:"select" ,selectFieldList:"brands", selectFieldKey:"brandId",selectFiledValue:"brandName"},
    {id:4, fieldName:'styleCode', label:"Style", typeOf:"string", isRequired:true},
    {id:5, fieldName:'mrp', label:"MRP", typeOf:"money", isRequired:true},
    {id:6, fieldName:'cost', label:"Cost", typeOf:"money", isRequired:true},
];
