import React from 'react'
import Modal from 'react-modal'
import { Formik, Form, Field, ErrorMessage } from 'formik'
const Signin = ({ isOpen, closePopup }) => {
    Modal.setAppElement('#root');

    const initialValues = {
        email: '',
        password: '',
        
    }

    const onSubmit = values => {
        console.log(values)

    }

    const validate = values => {
       const errors={}
        if (!values.email)
            errors.email = "Email is required";
        else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email))
             errors.email = "Invalid email format"
        if (!values.password)
            errors.password = "Password is required"
        
        return errors;
    }

    return (

        <Modal isOpen={isOpen}
            className="signinmodal"
            onRequestClose={closePopup}
        >

            <div className="signincontainer">
                <div className="close" onClick={closePopup}>&times;</div>
                <div className="formcontainer">
                    <Formik initialValues={initialValues}
                        onSubmit={onSubmit}
                        validate={validate}
                    >
                        <Form>
                            <h1>Sign In</h1>
                
                            <ErrorMessage name="email" component="div" />
                            <Field
                                placeholder="E-mail"
                                type="text"
                                id="email"
                                name="email"
                            />

                
                            <ErrorMessage name="password" component="div" />
                            <Field
                                placeholder="Password"
                                type="password"
                                id="password"
                                name="password" />
                                                       
                            <button type="submit">Sign In</button>
                        </Form>
                    </Formik>
                </div>
            </div>

        </Modal>

    )
}
export default Signin;