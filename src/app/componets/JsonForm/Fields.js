import React from "react";
import { Field } from "formik";
import {
  Input,
  Select,
  DatePickerField,
} from "../../../_aks/_partials/controls";

// Field Controls started
export const TextField = ({ label, name, placeholder, className }) => {
  return (
    <div className="col m-2">
      <Field
        name={name}
        component={Input}
        placeholder={placeholder}
        label={label}
      />
    </div>
  );
};
export const NumberField = ({ label, name, placeholder, className }) => {
  return (
    <div className="col m-2">
      <Field
        type="number"
        name={name}
        component={Input}
        placeholder={placeholder}
        label={label}
      />
    </div>
  );
};
export const TelField = ({ label, name, placeholder, className }) => {
  return (
    <div className="col m-2">
      <Field
        type="tel"
        name={name}
        component={Input}
        placeholder={placeholder}
        label={label}
      />
    </div>
  );
};
export const EmailField = ({ label, name, placeholder, className }) => {
  return (
    <div className="col m-2">
      <Field
        type="email"
        name={name}
        component={Input}
        placeholder={placeholder}
        label={label}
      />
    </div>
  );
};

export const RadioField = ({ label, name, options, className }) => {
  return (
    <div className="col  mb-3 p-1 border rounded ">
      <label className="border mb-1 mt-1  text-primary">{label}</label>
      <br />
      {options &&
        options.map((optionItem) => (
          <>
            <Field
              className=" mr-3 ml-3 mb-3"
              type="radio"
              name={name}
              value={optionItem.value}
              key={optionItem.value}
              label={optionItem.label}
            />
            <label className="ml-2 mb-1">{optionItem.label}</label>
          </>
        ))}
    </div>
  );
};

export const SelectField = ({
  label,
  options,
  className,
  name,
  keyName,
  valueName,
}) => {
  console.log(options);
  return (
    <div className="col m-2">
      <Select name={name} label={label}>
        {" "}
        placeholder={label}
        {options &&
          options.map((item) => (
            <option key={item[valueName]} value={item[valueName]}>
              {item[keyName]}
            </option>
          ))}
      </Select>
    </div>
  );
};

export const MultiCheckField = ({ label, checkOptions, className }) => {
  return (
    <div className="col m-2 p-1 border rounded ">
      <label className="text-success mb-2">{label && label}</label>
      <br />
      {checkOptions.map((checkField) => (
        <>
          <Field
            label={checkField.label}
            type="checkbox"
            name={checkField.name}
            value={checkField.value}
            className={" mb-3 mr-1 ml-2 " + className}
          />
          <label className={" ml-1 mr-2  mb-1 " + className}>
            {checkField.label}
          </label>
        </>
      ))}
    </div>
  );
};
export const CheckField = ({ name, label, value, className }) => {
  return (
    <div className="col m-2">
      <Field type="checkbox" name={name} value={value} label={label} />
      <label className={"ml-2 mb-1" + className}>{label}</label>
    </div>
  );
};

export const DateField = ({ label, name, placeholder, className }) => {
  return (
    <div className="col m-2">
      <DatePickerField
        name={name}
        placeholder={placeholder}
        label={label}
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
};
export const DateTimeField = ({ label, name, placeholder, className }) => {
  return (
    <div className="col m-2">
      <DatePickerField
        name={name}
        placeholder={placeholder}
        label={label}
        dateFormat="yyyy-MM-dd, h:mm aa"
        showTimeSelect
      />
    </div>
  );
};
//End of Field Controls

// Start of Option list genaration.
export const getSchemaFieldOptions = (schema, field) => {
  return schema[field].options.map((option) => {
    let label = option.label ? option.label : option;
    let value = option.value ? option.value : option;
    if (Array.isArray(option)) {
      value = option[0].value ? option[0].value : option[0];
      label = option[1].label
        ? option[1].label
        : option[1] || option[0].label
        ? option[0].label
        : option[0];
    }
    return { value, label };
  });
};
//end of option list genaration

//Start of Creating Form Element for a Form
export const GetSchemaElement = (schema, field) => {
  switch (schema[field].element) {
    case "radio":
      return (
        <RadioField
          label={schema[field].label}
          name={field}
          options={getSchemaFieldOptions(schema, field)}
        />
      );

    case "select":
      return (
        <SelectField
          label={schema[field].label}
          name={field}
          options={getSchemaFieldOptions(schema, field)}
          valueName={schema[field].valueName}
          keyName={schema[field].keyName}
          placeholder={schema[field].placeholder}
        />
      );

    case "number":
      return (
        <NumberField
          label={schema[field].label}
          name={field}
          placeholder={schema[field].placeholder}
        />
      );
    case "checkbox":
      return (
        <CheckField
          name={field}
          placeholder={schema[field].placeholder}
          value={schema[field].value}
          label={schema[field].label}
        />
      );
    case "multicheckbox":
      return (
        <MultiCheckField
          label={schema[field].label}
          name={field}
          placeholder={schema[field].placeholder}
          checkOptions={schema[field].options}
        />
      );

    case "date":
      return (
        <DateField
          label={schema[field].label}
          name={field}
          placeholder={schema[field].placeholder}
        />
      );
    case "datetime":
      return (
        <DateTimeField
          label={schema[field].label}
          name={field}
          placeholder={schema[field].placeholder}
        />
      );

    default:
    case "text":
      return (
        <TextField
          name={field}
          placeholder={schema[field].placeholder}
          label={schema[field].label}
        />
      );
  }
};
//End of Form Element Creation for a form
