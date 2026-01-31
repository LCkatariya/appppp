import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  dob: "",
  gender: "",
  employeeId: "",
  department: "",
  designation: "",
  joiningDate: "",
  employmentType: "",
  location: "",
  username: "",
  password: "",
  confirmPassword: "",
  securityQuestion: "",
  skills: [],
  experience: "",
  terms: [],
};

export const employeeSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile must be 10 digits")
    .required("Mobile number is required"),

  dob: Yup.date().required("Date of birth is required"),

  gender: Yup.string().required("Gender is required"),

  employeeId: Yup.string().required("Employee ID is required"),

  department: Yup.string().required("Department is required"),

  designation: Yup.string().required("Designation is required"),

  joiningDate: Yup.date().required("Joining date is required"),

  employmentType: Yup.string().required("Employment type is required"),

  location: Yup.string().required("Work location is required"),

  username: Yup.string()
    .min(4, "Minimum 4 characters")
    .required("Username is required"),

  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .matches(/[0-9]/, "Must contain a number")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  securityQuestion: Yup.string().required("Select a security question"),

  skills: Yup.array()
    .min(1, "Select at least one skill")
    .required("Skills are required"),

//   experience: Yup.number()
//     .min(0, "Invalid experience")
//     .max(40, "Too much experience 😄")
//     .required("Experience is required"),

  terms: Yup.array()
    .min(1, "You must accept terms & conditions"),
});
