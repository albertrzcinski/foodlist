import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'components/atoms/Button/Button';

const StyledForm = styled(Form)`
  max-width: 210px;
  padding: 20px 0;
`;

const StyledLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

const StyledFormItem = styled.div`
  margin-top: 20px;

  & > input {
    display: block;
    margin-top: 7px;
    border: 1px solid ${({ theme }) => theme.color.borderGreen};
    width: 200px;
    height: 27px;
    border-radius: 7px;
    padding: 0 10px;
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.color.red};
  margin-top: 2px;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  height: 35px;
  width: 120px;
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-top: 30px;
`;

const loginShape = {
  email: Yup.string().email('Invalid email address!').required('Required!'),
  password: Yup.string().min(6, 'Too short!').required('Required!'),
};

const signUpShape = {
  ...loginShape,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must much!')
    .required('Required!'),
};

const AuthForm = ({ onSubmitFn, isRegister }) => {
  const schema = Yup.object().shape(isRegister ? signUpShape : loginShape);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        const cred = {
          email: values.email.trim(),
          password: values.password,
        };
        onSubmitFn(cred);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <StyledFormItem>
            <StyledLabel htmlFor="email"> Email address </StyledLabel>
            <Field type="email" name="email" id="email" />
            <StyledErrorMessage name="email" component="div" />
          </StyledFormItem>

          <StyledFormItem>
            <StyledLabel htmlFor="password"> Password </StyledLabel>
            <Field type="password" name="password" id="password" />
            <StyledErrorMessage name="password" component="div" />
          </StyledFormItem>

          {isRegister ? (
            <StyledFormItem>
              <StyledLabel htmlFor="password-confirm"> Confirm password </StyledLabel>
              <Field type="password" name="passwordConfirm" id="password-confirm" />
              <StyledErrorMessage name="passwordConfirm" component="div" />
            </StyledFormItem>
          ) : null}

          <StyledButton type="submit" disabled={isSubmitting}>
            {isRegister ? 'Register' : 'Log in'}
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

AuthForm.propTypes = {
  onSubmitFn: PropTypes.func.isRequired,
  isRegister: PropTypes.bool,
};

AuthForm.defaultProps = {
  isRegister: false,
};

export default AuthForm;
