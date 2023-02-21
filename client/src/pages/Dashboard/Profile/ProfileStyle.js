import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 2fr 1fr;
    column-gap: 1rem;
  }
`;
export const Wrapper = styled.section``;

export const H3 = styled.h3`
  margin-top: 0;
  font-size: ${(props) => props.theme.fonts.xlText};
`;
export const H4 = styled.h4`
  margin-top: 0;
  font-size: ${(props) => props.theme.fonts.xmdText};
`;

export const Form = styled.form`
  border-radius: ${(props) => props.theme.features.borderRadius};
  background: ${(props) => props.theme.colors.cWhite};
  padding: 2rem 3rem;
  box-shadow: ${(props) => props.theme.shadows.shadow2};
`;
export const UpdateForm = styled.form`
  padding: 1rem 0rem;
  display: inline-block;
  @media ${(props) => props.theme.breakpoints.lg} {
    border-left: 0.005rem solid ${(props) => props.theme.colors.cYellow};
    padding: 0rem 1rem;
  }
`;

export const FormCenter = styled.div`
  display: block;
  .btn-center {
    padding: 0.75rem 0.75rem 0.75rem 0.3rem;
    @media ${(props) => props.theme.breakpoints.xl} {
      margin-top: 0;
    }
  }
`;
