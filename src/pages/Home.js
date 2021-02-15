import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import Heading from 'components/atoms/Heading/Heading';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'components/atoms/Button/Button';
import HomePhoto from 'assets/photos/home-photo.png';
import { logIn as logInAction } from 'redux/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import Notification from 'components/atoms/Notification/Notification';

const StyledWrapper = styled.main`
  padding: 30px 0 0 110px;

  @media (min-width: 1900px) {
    padding-left: 150px;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.size.xxl};
  color: ${({ theme }) => theme.color.black};
  max-width: 450px;
  margin: 50px 0 80px;

  @media (min-width: 1900px) {
    font-size: ${({ theme }) => theme.size.xxxl};
    max-width: 550px;
  }
`;

const StyledForm = styled(Form)`
  max-width: 210px;
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

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address!').required('Required!'),
  password: Yup.string().min(6, 'Too short!').required('Required!'),
});

const Home = ({ logIn, uid, authErr }) => {
  if (uid) {
    return <Redirect to={routes.breakfast} />;
  }

  const notifications = authErr && (
    <Notification>
      <p>{authErr.message}</p>
    </Notification>
  );

  return (
    <StyledWrapper>
      <Logo />
      <StyledImg src={HomePhoto} alt="food" />
      <StyledHeading>Save your recipes in one place.</StyledHeading>
      {notifications}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { resetForm }) => {
          const cred = {
            email: values.email.trim(),
            password: values.password.trim(),
          };
          logIn(cred);
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

            <StyledButton type="submit" disabled={isSubmitting}>
              Log in
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

Home.defaultProps = {
  uid: null,
  authErr: null,
};

Home.propTypes = {
  logIn: PropTypes.func.isRequired,
  uid: PropTypes.string,
  authErr: PropTypes.shape({
    code: PropTypes.string,
    message: PropTypes.string,
  }),
};

const mapStateToProps = ({ firebase: { auth }, foodlist: { authErr } }) => ({
  uid: auth.uid,
  authErr,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (cred) => dispatch(logInAction(cred)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
