import styled from "styled-components";

export const Div = styled.div`
  margin: 1rem 0;
`;
export const FormLabel = styled.label`
  color: ${(props) => props.theme.colors.cGrey};
  font-size: ${(props) => props.theme.fonts.mdText};
 
`;
export const Input = styled.input`
  background: ${(props) => props.theme.colors.cAsh};
  color: ${(props) => props.theme.colors.cGrey};
  font-size: 1rem;
  padding: 0.75rem 0.75rem 0.75rem 0.3rem;
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.cGrey};

  &:focus {
    outline: none;
    background: none;
    border: 1px solid ${(props) => props.theme.colors.cGreen};
  }
`;
