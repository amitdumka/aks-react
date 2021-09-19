import React from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { FieldFeedbackLabel } from "./FieldFeedbackLabel";

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["form-control"];
  if (touched && errors) {
    classes.push("is-invalid");
  }

  if (touched && !errors) {
    classes.push("is-valid");
  }

  return classes.join(" ");
};

export function UserNameInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>Enter {label}</label>}
      {/* <input
        type={type}
        className={getFieldCSSClasses(touched[field.name], errors[field.name])}
        {...field}
        {...props}
      /> */}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className={getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}
          {...field}
          {...props}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}

export function MoneyInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>Enter {label}</label>}
      {/* <input
          type={type}
          className={getFieldCSSClasses(touched[field.name], errors[field.name])}
          {...field}
          {...props}
        /> */}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="number"
          className={getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}
          {...field}
          {...props}
          aria-label="Amount (to the nearest dollar)"
        />
        <InputGroup.Append>
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}

export function FullNameInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>Enter {label}</label>}
      {/* <input
          type={type}
          className={getFieldCSSClasses(touched[field.name], errors[field.name])}
          {...field}
          {...props}
        /> */}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>{label && label}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className={getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}
          {...field}
          {...props}
        />
        <FormControl
          className={getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}
          {...field}
          {...props}
        />
      </InputGroup>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}

export function LeftButtonInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>Enter {label}</label>}
      {/* <input
          type={type}
          className={getFieldCSSClasses(touched[field.name], errors[field.name])}
          {...field}
          {...props}
        /> */}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="basic-addon1"
          className={getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}
          {...field}
          {...props}
        />
      </InputGroup>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}

export function RightButtonInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>Enter {label}</label>}
      {/* <input
            type={type}
            className={getFieldCSSClasses(touched[field.name], errors[field.name])}
            {...field}
            {...props}
          /> */}
      <InputGroup className="mb-3">
        <FormControl
          aria-describedby="basic-addon1"
          className={getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}
          {...field}
          {...props}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}

export function LeftDropDownButtonInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>Enter {label}</label>}
      {/* <input
            type={type}
            className={getFieldCSSClasses(touched[field.name], errors[field.name])}
            {...field}
            {...props}
          /> */}

      <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <FormControl
          aria-describedby="basic-addon1"
          className={getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}
          {...field}
          {...props}
        />
      </InputGroup>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}

export function RightDropDownButtonInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>Enter {label}</label>}
      {/* <input
              type={type}
              className={getFieldCSSClasses(touched[field.name], errors[field.name])}
              {...field}
              {...props}
            /> */}
      <InputGroup>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className={getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}
          {...field}
          {...props}
        />

        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>{" "}
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}

export function CheckInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>Enter {label}</label>}
      {/* <input
          type={type}
          className={getFieldCSSClasses(touched[field.name], errors[field.name])}
          {...field}
          {...props}
        /> */}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        </InputGroup.Prepend>
        <FormControl
          aria-label="Text input with checkbox"
          className={getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}
          {...field}
          {...props}
        />
      </InputGroup>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}
export function RadioInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>Enter {label}</label>}
      {/* <input
          type={type}
          className={getFieldCSSClasses(touched[field.name], errors[field.name])}
          {...field}
          {...props}
        /> */}
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Radio aria-label="Radio button for following text input" />
        </InputGroup.Prepend>
        <FormControl
          aria-label="Text input with radio button"
          className={getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}
          {...field}
          {...props}
        />
      </InputGroup>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}
