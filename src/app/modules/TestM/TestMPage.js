import React from 'react'
import { useSubheader } from '../../../_aks/layout'
import { Field, Formik, useFormik, withFormik } from 'formik'
import {
  Input,
  Select,
  DatePickerField,
} from '../../../_aks/_partials/controls'

import JsonModalForm from '../../componets/JsonForm/JsonModalForm'
import JsonCardForm from '../../componets/JsonForm/JsonCardForm'

//Schema or Element of Forms delcarations.
// add element based on serial way , first in first out.
const cbTest = [
  { label: 'Work', value: 'work', name: 'workcb' },
  { label: 'Home', value: 'home', name: 'homecb' },
  { label: 'Other', value: 'other', name: 'othercb' },
]

const town = ['City', 'Village', 'Suburbs']
const genders = [
  {
    label: 'Male',
    value: 0,
  },
  {
    label: 'Female',
    value: 1,
  },
  {
    label: 'Trans',
    value: 3,
  },
]
const testSchema = {
  firstName: {
    element: 'text',
    label: 'First Name',
    placeholder: 'Enter first name',
    required: true,
    validation: {
      regex: '^[a-zA-Z0–9 ]+$',
      message: 'Only contain alphanumeric characters allowed',
    },
  },
  lastName: {
    element: 'text',
    label: 'Last Name',
    placeholder: 'Enter Last name',
    required: true,
    validation: {
      regex: '^[a-zA-Z0–9 ]+$',
      message: 'Only contain alphanumeric characters allowed',
    },
  },
  age: {
    element: 'number',
    label: 'Age',
    placeholder: 'Enter your age',
    required: true,
    validation: {
      regex: '^[a-zA-Z0–9 ]+$',
      message: 'Only contain alphanumeric characters allowed',
    },
  },
  gender: {
    element: 'select',
    label: 'Gender',
    placeholder: 'Select Gender',
    required: true,
    options: genders,
    valueName: 'value',
    keyName: 'label',
    validation: {
      regex: '^[a-zA-Z0–9 ]+$',
      message: 'Only contain alphanumeric characters allowed',
    },
  },

  addressTypes: {
    element: 'multicheckbox',
    label: 'Address',
    placeholder: 'Select(s) Address Type',
    required: true,
    options: cbTest,
    valueName: 'value',
    keyName: 'label',
    validation: {
      regex: '^[a-zA-Z0–9 ]+$',
      message: 'Only contain alphanumeric characters allowed',
    },
  },
  townType: {
    element: 'radio',
    label: 'Town Type',
    placeholder: 'Type of Town',
    required: true,
    options: town,
    valueName: 'value',
    keyName: 'label',
    validation: {
      regex: '^[a-zA-Z0–9 ]+$',
      message: 'Only contain alphanumeric characters allowed',
    },
  },
  dob: {
    element: 'date',
    label: 'Date of Birth',
    placeholder: 'Enter your age',
    required: true,
    validation: {
      regex: '^[a-zA-Z0–9 ]+$',
      message: 'Only contain alphanumeric characters allowed',
    },
  },
  nowTime: {
    element: 'datetime',
    label: 'Now',
    placeholder: 'Enter your age',
    required: true,
    validation: {
      regex: '^[a-zA-Z0–9 ]+$',
      message: 'Only contain alphanumeric characters allowed',
    },
  },
}
const initialValues = {
  firstName: '',
  lastName: '',
}
export const TestMPage = ({ history }) => {
  const subheader = useSubheader()
  subheader.setTitle('Form Gen Test')
  const submit = (values) => {
    alert(JSON.stringify(values))
  }

  const onHide = () => {
    history.push('/testM')
  }
  //console.log(testSchema)
  return (
    <>
      <div className="h4 text-center bg-success border rounded border.light p-2 flex-row">
        Testing of Json form component
      </div>
      <JsonCardForm
        onHide={onHide}
        schema={testSchema}
        onSubmit={submit}
        headerElement="Dumka Store"
        show={true}
        headerTitle="Test Form"
        initialValues={initialValues}
        col={3}
      />
    </>
  )
}
