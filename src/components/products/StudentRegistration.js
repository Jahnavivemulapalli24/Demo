import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const StudentRegistration = () => {
  return (
    <div>
      <h2>Student Registration Form:</h2>
      <Formik
        initialValues={{

          firstName: "",
          lastName: "",
          email: "",
          dob: "",
          state: "",
          city: "",
          street: "",
          pin: "",

        }}

        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),

          pin: Yup.number()
            .min(100000, "Must be 6 digits")
            .max(999999, "Must be 6 digits")
            .required("Required"),

          })}

        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}

      >

        <Form>
          <div>
            <label>First Name: </label>
            <Field name="firstName" type="text" />
            <br />
            <ErrorMessage name="firstName" />
          </div>
           <div>
            <label>Last Name: </label>
            <Field name="lastName" type="text" />
            <br />
            <ErrorMessage name="lastName" />
          </div>
          <div>
            <label>Email: </label>
            <Field name="email" type="text" />
            <br />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label>Date of Birth: </label>
            <Field name="dob" type="date" />
            <ErrorMessage name="dob" />
          </div>
          <div>

            <h2> ADDRESS: </h2>

            <div>
              <label>State: </label>
              <Field name="state" as="select" ><option>Andhra Pradesh </option>  <option>Telangana </option> </Field>
              <ErrorMessage name="state" />
            </div>
            <div>
              <label>City: </label>
              <Field name="city" as="select" > <option>Vijayawada </option> <option> Hyderabad </option> </Field>
              <ErrorMessage name="city" />
            </div>
            <div>
              <label>Street: </label>
              <Field name="street" type="text" />
              <ErrorMessage name="street" />
            </div>
            <div>
              <label>Pin Code: </label>
              <Field name="pin" type="number" />
              <br />
              <ErrorMessage name="pin" />
            </div>

          </div>
          <button type="submit">Submit</button>
        </Form>

      </Formik>

    </div>

  );

};

export default StudentRegistration;

