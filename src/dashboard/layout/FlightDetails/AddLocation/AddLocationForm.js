import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { baseURl } from "../../../../constants/apiContact";

const initialValues = {
  country: "",
  city: "",
};

const validationSchema = Yup.object().shape({
  country: Yup.string().required("this is required Field!"),
  city: Yup.string().required("this is required Field!"),
});

const AddLocationForm = ({ onClose }) => {
  const handleFormSubmit = (values, resetForm) => {
    axios
      .post(`${baseURl}api/v1/location`, values, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          toast.success("Successfully Created");
          resetForm();
          onClose();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!");
      });
  };
  return (
    <div>
      {/* <h2 className="text-center">Add Location</h2> */}
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values, resetForm);
        }}
      >
        {() => {
          return (
            <Form>
              <div className="form-row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">From</label>
                    <Field className="form-control" name="country" />
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">City</label>
                    <Field className="form-control" name="city" />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary ">
                Save
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddLocationForm;
