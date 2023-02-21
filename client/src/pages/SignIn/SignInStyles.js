import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.cBackground};
`;
export const Section = styled.section`
  display: grid;
  align-items: center;
`;
export const Form = styled.form`
  width: 90vw;
  max-width: 400px;
  background: ${(props) => props.theme.colors.cWhite};
  border-radius: ${(props) => props.theme.features.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.shawdow2};
  padding: 2.5rem 2rem;
  margin: 3rem auto;
  transition: ${(props) => props.theme.features.transition};
  border-top: 5px solid ${(props) => props.theme.colors.cGreen};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.shawdow4};
  }
`;
export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: -0.5rem;
  font-size: 1.8rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2.441rem;
  }
`;
export const FormText = styled.p`
  margin: 0;
  margin-top: 1.3rem;
  text-align: center;
`;
export const FormLink = styled(Link)`
  color: ${(props) => props.theme.colors.cText};
  font-weight: 600;
  /* border-bottom: 2px solid ${(props) => props.theme.colors.cGreen}; */
`;
export const ForgotWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  `;
export const ForgotEmpty = styled.div`

  `;

export const ForgotPassword = styled(Link)`
    margin-top: -0.5rem;
    margin-bottom: 1.5rem;
    /* display: flex;
    align-items: flex-end;
    justify-content: end; */
    font-weight: 500;
    color: ${(props) => props.theme.colors.cText};
  `;