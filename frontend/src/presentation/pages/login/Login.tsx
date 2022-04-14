import React from 'react';
import styled from 'styled-components';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Login: React.FC = () => <StyledLogin>Login</StyledLogin>;

export default Login;
