import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import Heading from 'components/atoms/Heading/Heading';
import HomePhoto from 'assets/photos/home-photo.png';
import { logIn as logInAction, register as registerAction } from 'redux/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import Notification from 'components/atoms/Notification/Notification';
import AuthForm from 'components/molecules/AuthForm/AuthForm';

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
  margin: 50px 0 40px;

  @media (min-width: 1900px) {
    font-size: ${({ theme }) => theme.size.xxxl};
    max-width: 550px;
  }
`;

const StyledButton = styled.button`
  display: block;
  border: none;
  background: none;
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: cornflowerblue;
  cursor: pointer;
`;

const Home = ({ logIn, uid, authErr, register }) => {
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const handleClick = () => {
    setIsRegisterForm((prevState) => !prevState);
  };

  if (uid) {
    return <Redirect to={routes.breakfast} />;
  }

  const notifications = authErr && (
    <Notification>
      <p>{authErr.message}</p>
    </Notification>
  );

  const buttonDesc = isRegisterForm
    ? `Already have as account? Log in`
    : `Don't have an account? Sign up`;

  return (
    <StyledWrapper>
      <Logo />
      <StyledImg src={HomePhoto} alt="food" />
      <StyledHeading>Save your recipes in one place.</StyledHeading>
      {notifications}
      {isRegisterForm ? (
        <AuthForm onSubmitFn={register} isRegister={isRegisterForm} />
      ) : (
        <AuthForm onSubmitFn={logIn} />
      )}
      <StyledButton onClick={handleClick}>{buttonDesc}</StyledButton>
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
  register: PropTypes.func.isRequired,
};

const mapStateToProps = ({ firebase: { auth }, foodlist: { authErr } }) => ({
  uid: auth.uid,
  authErr,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (cred) => dispatch(logInAction(cred)),
  register: (cred) => dispatch(registerAction(cred)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
