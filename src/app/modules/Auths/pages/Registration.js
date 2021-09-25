import React, { useState } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { register } from "../_redux/authCrud";

const initialValues = {
    fullname: "",
    email: "",
    username: "",
    password: "",
    changepassword: "",
    acceptTerms: false,
    registratoinCode:""
  };

  function Registration(props) {
    const { intl } = props;
    const [loading, setLoading] = useState(false);
    const RegistrationSchema = Yup.object().shape({
      registratoinCode: Yup.string().min(6,"Minimum 6 char").required("Registration is code required, contact admin!"),
      fullname: Yup.string()
        .min(3, "Minimum 3 symbols")
        .max(50, "Maximum 50 symbols")
        .required(
          intl.formatMessage({
            id: "AUTH.VALIDATION.REQUIRED_FIELD",
          })
        ),
      email: Yup.string()
        .email("Wrong email format")
        .min(3, "Minimum 3 symbols")
        .max(50, "Maximum 50 symbols")
        .required(
          intl.formatMessage({
            id: "AUTH.VALIDATION.REQUIRED_FIELD",
          })
        ),
      username: Yup.string()
        .min(3, "Minimum 3 symbols")
        .max(50, "Maximum 50 symbols")
        .required(
          intl.formatMessage({
            id: "AUTH.VALIDATION.REQUIRED_FIELD",
          })
        ),
      password: Yup.string()
        .min(3, "Minimum 3 symbols")
        .max(50, "Maximum 50 symbols")
        .required(
          intl.formatMessage({
            id: "AUTH.VALIDATION.REQUIRED_FIELD",
          })
        ),
      changepassword: Yup.string()
        .required(
          intl.formatMessage({
            id: "AUTH.VALIDATION.REQUIRED_FIELD",
          })
        )
        .when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Password and Confirm Password didn't match"
          ),
        }),
      acceptTerms: Yup.bool().required(
        "You must accept the terms and conditions"
      ),
    });
    const enableLoading = () => {
        setLoading(true);
      };
    
      const disableLoading = () => {
        setLoading(false);
      };
    
      const getInputClasses = (fieldname) => {
        if (formik.touched[fieldname] && formik.errors[fieldname]) {
          return "is-invalid";
        }
    
        if (formik.touched[fieldname] && !formik.errors[fieldname]) {
          return "is-valid";
        }
    
        return "";
      };
      const formik = useFormik({
        initialValues,
        validationSchema: RegistrationSchema,
        onSubmit: (values, { setStatus, setSubmitting }) => {
          setSubmitting(true);
          enableLoading();
          register(values.email, values.fullname, values.username, values.password)
            .then(({ data: { accessToken } }) => {
              props.register(accessToken);
              disableLoading();
              setSubmitting(false);
            })
            .catch(() => {
              setSubmitting(false);
              setStatus(
                intl.formatMessage({
                  id: "AUTH.VALIDATION.INVALID_LOGIN",
                })
              );
              disableLoading();
            });
        },
      });

      return(<>
      
      </>);





  }