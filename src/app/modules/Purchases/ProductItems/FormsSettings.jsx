
export const FormsElements=[
    {id:1, fieldName:'barcode', label:"Barcode",placeholder:"Barcode", typeOf:"string", isRequired:true,type:"text"},
    {id:2, fieldName:'productName', label:"Product Name", placeholder:"Product Name",typeOf:"string", isRequired:true,type:"text"},
    {id:3, fieldName:'brandId', label:"Brand Name", placeholder:"Brand Name",typeOf:"int", isRequired:true, type:"select" ,selectFieldList:"brands", selectFieldKey:"brandId",selectFieldValue:"brandName"},
    {id:4, fieldName:'styleCode', label:"Style", placeholder:"Style code",typeOf:"string", isRequired:true,type:"text"},
    {id:5, fieldName:'mrp', label:"MRP", placeholder:"MRP",typeOf:"money", isRequired:true,type:"text"},
    {id:6, fieldName:'cost', label:"Cost", placeholder:"Cost",typeOf:"money", isRequired:true,type:"text"},
];
