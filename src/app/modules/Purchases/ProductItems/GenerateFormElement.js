import React, { Component } from 'react'
import {
  Input,
  Select,
  DatePickerField,
} from '../../../../../_aks/_partials/controls'
import { Field } from 'formik'
//https://www.botsplash.com/post/convert-your-json-to-forms-in-react
export default class GenerateFormElement extends Component {
  constructor(props) {
    super(props)
    this.state = { formName: props.title, formUrl: props.url }
  }

  addElement(ele) {
    let line = null
    switch (ele.type) {
      case 'text':
        line = (
          <div className="col-lg-4">
            <Field
              name={ele.fieldName}
              component={Input}
              placeholder={ele.placeholder}
              label={ele.label}
            />
          </div>
        )
        break
      case 'select':
        line = (
          <div className="col-lg-4">
            <Select name={ele.fieldName} label={ele.label}>
              {this[ele.selectFieldName] &&
                this[ele.selectFieldName].map((item) => (
                  <option key={item.storeId} value={item[ele.selectFieldKey]}>
                    {' '}
                    {item[ele.selectFieldName]}{' '}
                  </option>
                ))}
            </Select>
          </div>
        )

        break
      case 'number':
        line = (
          <div className="col-lg-4">
            <Field
              type="number"
              name={ele.fieldName}
              component={Input}
              placeholder={ele.placeholder}
              label={ele.label}
            />
          </div>
        )
        break
      case 'date':
        line = (
          <div className="col-lg-4">
            {' '}
            <DatePickerField
              dateFormat="yyyy-MM-dd"
              name={ele.fieldName}
              label={ele.label}
            />
          </div>
        )
        break
      case 'datetime':
        line = (
          <div className="col-lg-4">
            {' '}
            <DatePickerField name={ele.fieldName} label={ele.label} />
          </div>
        )
        break
      case 'time':
        break
      case 'checkbox':
        break
      case 'radio':
        break
      case 'tel':
        line = (
          <div className="col-lg-4">
            <Field
              type="tel"
              name={ele.fieldName}
              component={Input}
              placeholder={ele.placeholder}
              label={ele.label}
            />
          </div>
        )
        break
      case 'email':
        line = (
          <div className="col-lg-4">
            <Field
              type="email"
              name={ele.fieldName}
              component={Input}
              placeholder={ele.placeholder}
              label={ele.label}
            />
          </div>
        )
        break
      default:
        break
    }
  }

  render() {
    return <></>
  }
}
