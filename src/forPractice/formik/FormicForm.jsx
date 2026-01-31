import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { employeeSchema, initialValues } from "./employeeSchema.jsx";

const MyInputField = React.memo((props) => {
  const { Label, type, name, placeholder } = props
  console.log('call myinputField')
  return (
    <div>
      <label>{Label}</label>
      : <Field type={type} name={name} placeholder={placeholder} />
      <ErrorMessage style={{ color: 'red' }} name={name} component="div" />
    </div>
  )
})

const MyCheckBoxField = React.memo((props) => {
  const { Label, type, name, checkBoxOptions } = props
  return (
    <div>
      <label>{Label}</label>
      {checkBoxOptions?.map(item => (
        <>: <Field type={type} name={name} value={item.value} /> {item.name}</>
      ))}
      <ErrorMessage style={{ color: 'red' }} name={name} component="div" />
    </div>
  )
})

const MySelectorField = React.memo((props) => {
  const { Label, name, selectorOptions } = props
  return (
    <div>
      <label>{Label}</label>
      : <Field as="select" name={name}>
        {selectorOptions?.map(item => (
          <option value={item.value}>{item.name}</option>
        ))}
      </Field>
      <ErrorMessage style={{ color: 'red' }} name={name} component="div" />
    </div>
  )
})

export default function FormikForm() {
  const handleSubmit = (values, other) => {
    other.resetForm()
    console.log("Form Data:", values, other);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={employeeSchema}
      // validate={(value) => { console.log('inside validate', value) }}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          {console.log(formik)}
          <h2>Employee Onboarding</h2>
          {/* Personal Info */}
          <MyInputField type={'text'} name={'firstName'} placeholder={'First Name'} Label={'firstName'} />
          <MyInputField type={'text'} name={'lastName'} placeholder={'Last Name'} Label={'lastName'} />
          <MyInputField type={'email'} name={'email'} placeholder={'Email'} Label={'email'} />
          <MyInputField type={'tel'} name={'mobile'} placeholder={'Mobile Number'} Label={'mobile'} />
          <MyInputField type={'date'} name={'dob'} placeholder={''} Label={'dob'} />

          {/* checkbox field */}
          <MyCheckBoxField type='radio' Label='Gender' name={'gender'} checkBoxOptions={[{ name: 'Mail', value: 'Mail' }, { name: 'Female', value: 'Female' }, { name: 'Other', value: 'Other' }]} />

          {/* Employment */}
          <MyInputField type={'text'} name={'employeeId'} placeholder={'Employee ID'} Label={'employeeId'} />

          {/* Selector Field */}
          <MySelectorField name={"department"} Label={"department"} selectorOptions={[{ name: 'Select Department', value: '' }, { name: 'IT', value: 'IT' }, { name: 'HR', value: 'HR' }, { name: 'Finance', value: 'Finance' }, { name: 'Sales', value: 'Sales' }]} />
          <MySelectorField name={"employmentType"} Label={"employmentType"} selectorOptions={[{ name: 'Employment Type', value: '' }, { name: 'Full-time', value: 'fullTime' }, { name: 'Part-time', value: 'partTime' }, { name: 'Contract', value: 'contract' }]} />
          <MySelectorField name={"location"} Label={"location"} selectorOptions={[{ name: 'Work Location', value: '' }, { name: 'Noida', value: 'Noida' }, { name: 'Bangalore', value: 'Bangalore' }, { name: 'Pune', value: 'Pune' }, { name: 'Remote', value: 'Remote' }]} />

          <MyInputField type={'text'} name={'designation'} placeholder={'Designation'} Label={'designation'} />
          <MyInputField type={'date'} name={'joiningDate'} placeholder={'JoiningDate'} Label={'joiningDate'} />

          {/* Account */}
          <MyInputField type={'text'} name={'username'} placeholder={'Username'} Label={'Username'} />
          <MyInputField type={'password'} name={'password'} placeholder={'Password'} Label={'Password'} />
          <MyInputField type={'password'} name={'confirmPassword'} placeholder={'Confirm Password'} Label={'confirmPassword'} />

          {/* Preferences */}
          <MyCheckBoxField type='checkbox' Label='Skills' name={'skills'} checkBoxOptions={[{ name: 'React', value: 'React' }, { name: 'Node', value: 'Node' }, { name: 'SQL', value: 'SQL' }, { name: 'AWS', value: 'AWS' }]} />
          <MySelectorField name={"securityQuestion"} Label={"securityQuestion"} selectorOptions={[{ name: 'Security Question', value: '' }, { name: 'Your first pet?', value: 'pet' }, { name: 'Your school name?', value: 'school' }]} />
          <MyCheckBoxField type='checkbox' Label='' name={'terms'} checkBoxOptions={[{ name: 'Receive Notifications', value: 'notifications' }, { name: 'Accept Terms & Conditions', value: 'conditions' }]} />

          <div><button type="submit">Submit</button></div>
        </Form>
      )}
    </Formik>
  );
}
