import * as Yup from "yup";
export const initialValue = {
  firstName: "",
  lastName: "",
  gender: "",
  country: "",
  mobileNumber: "",
  email: "",
  passfirstName: "",
  passlastName: "",
  passgender: "",
  passcountry: "",
  passmobileNumber: "",
  passemail: "",
  passDocType: "",
  passDocNumber: "",
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("This is Required fields!"),
  lastName: Yup.string().required("This is Required fields!"),
  gender: Yup.string().required("This is Required fields!"),
  country: Yup.string().required("This is Required fields!"),
  mobileNumber: Yup.number().positive().required("This is Required fields!"),
  email: Yup.string().email().required("This is Required fields!"),
  passfirstName: Yup.string().required("This is Required fields!"),
  passlastName: Yup.string().required("This is Required fields!"),
  passgender: Yup.string().required("This is Required fields!"),
  passcountry: Yup.string().required("This is Required fields!"),
  passDocType: Yup.string().required("This is Required fields!"),
  passDocNumber: Yup.string().required("This is Required fields!"),
  passmobileNumber: Yup.number()
    .positive()
    .required("This is Required fields!"),
  passemail: Yup.string().email().required("This is Required fields!"),
});
