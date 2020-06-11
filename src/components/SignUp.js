import React from 'react'
import Modal from 'react-modal'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios';
const Signup = ({ isOpen, closePopup }) => {
    Modal.setAppElement('#root');

    const initialValues = {
        UserName: '',
        Email: '',
        Password: '',
        confirmPassword: '',
        FirstName: '',
        LastName: '',
        DateOfBirth: '',
        PhoneNumber: ''
    }

    const onSubmit = (values,{resetForm}) => {
        axios.post('http://www.absweb.somee.com/api/account/register', values)
            .then((response) => {
                resetForm({});
            })
            .catch((error) => console.log(error))
//        console.log(values)

    }

    const validate = values => {
        const errors = {}
        if (!values.FirstName)
            errors.FirstName = "First Name is required"
        if (!values.LastName)
            errors.LastName = "Last Name is required"
        if (!values.Email)
            errors.Email = "Email is required";
        else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.Email))
            errors.Email = "Invalid Email format"
        if (!values.PhoneNumber)
            errors.PhoneNumber = "Mobile number is required"
        else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.PhoneNumber))
            errors.PhoneNumber = "Invalid Mobile number"
        if (!values.DateOfBirth)
            errors.DateOfBirth = "Date of Birth is required"
        if (!values.Password)
            errors.Password = "Password is required"
        if (!values.confirmPassword)
            errors.confirmPassword = "Re-type Password is required"
        else if (values.Password !== values.confirmPassword)
             errors.confirmPassword = "Password is not matched"
        return errors;
    }

    return (

        <Modal isOpen={isOpen}
            className="signupmodal"
            onRequestClose={closePopup}
        >

            <div className="signupcontainer">
                <div className="close" onClick={closePopup}>&times;</div>
                <div className="leftside">
                    <div className="signuptextupper">Looks like you're new here!</div>
                    <div className="signuptextlower">Sign up with your details to get started</div>
                    <div className="signupimage"></div>
                </div>
                <div className="rightside">
                    <Formik initialValues={initialValues}
                        onSubmit={onSubmit}
                        validate={validate}
                    >
                        <Form>
                            <h1>Sign Up</h1>
                            <ErrorMessage name="FirstName" component="div" />
                            <Field
                                placeholder="First Name"
                                type="text"
                                id="FirstName"
                                name="FirstName"
                            />

                            <ErrorMessage name="LastName" component="div" />
                            <Field
                                placeholder="Last Name"
                                type="text"
                                id="LastName"
                                name="LastName" />


                            <ErrorMessage name="Email" component="div" />
                            <Field
                                placeholder="E-mail"
                                type="text"
                                id="Email"
                                name="Email"
                            />

                            <ErrorMessage name="PhoneNumber" component="div" />
                            <Field
                                placeholder="Enter Mobile number"
                                type="text"
                                id="PhoneNumber"
                                name="PhoneNumber"
                            />

                            <ErrorMessage name="DateOfBirth" component="div" />
                            <Field
                                placeholder="Date of Birth-mm/dd/yyyy"
                                type="text"
                                id="DateOfBirth"
                                name="DateOfBirth"
                            />

                            <ErrorMessage name="Password" component="div" />
                            <Field
                                placeholder="Password"
                                type="Password"
                                id="Password"
                                name="Password" />

                            <ErrorMessage name="confirmPassword" component="div" />
                            <Field
                                placeholder="Re-type Password"
                                type="Password"
                                id="confirmPassword"
                                name="confirmPassword" />

                            <button type="submit">Sign Up</button>
                        </Form>
                    </Formik>
                </div>
            </div>

        </Modal>

    )
}
export default Signup;