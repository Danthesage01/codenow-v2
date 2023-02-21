import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.colors.cWhite};
  background: ${(props) => props.theme.colors.cGreen};
  border: transparent;
  border-radius: ${(props) => props.theme.features.borderRadius};
  letter-spacing: ${(props) => props.theme.features.letterSpacing};
  padding: 0.5rem 0.875rem;
  box-shadow: ${(props) => props.theme.shadows.shadow2};
  transition: ${(props) => props.theme.features.transition};
  text-transform: capitalize;
  display: inline-block;

  &:hover {
    background: ${(props) => props.theme.colors.cWhite};
    color: ${(props) => props.theme.colors.cGreen};
    box-shadow: none;
  }
`;

export const BlockBTN = styled(BaseButton)`
  width: 100%;
`;
export const HeroBTN = styled(BaseButton)`
  font-size: 1.25rem;
  padding: 0.5rem 1.25rem;
`;
export const DangerBTN = styled(BaseButton)`
  background: ${(props) => props.theme.colors.redLight};
  color: ${(props) => props.theme.colors.redDark};
  &:hover {
    color: ${(props) => props.theme.colors.redLight};
    background: ${(props) => props.theme.colors.redDark};
  }
`;

export const DashBlockBTN = styled(BaseButton)`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: auto;
    padding: 0.7rem;
    font-size: 1rem;
  }
  &:hover {
    background: ${(props) => props.theme.colors.cWhite};
    color: ${(props) => props.theme.colors.cGreen};
  }
`;
export const BashBlockBTN = styled(BaseButton)`
  width: 100%;
  /* background: ${(props) => props.theme.colors.cYellow};
  color: ${(props) => props.theme.colors.cWhite}; */
  margin-top: 0.5rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: auto;
    padding: 0.7rem;
    font-size: 1rem;
  }
  &:hover {
    background: ${(props) => props.theme.colors.cWhite};
    color: ${(props) => props.theme.colors.cGreen};
  }
`;

export const HipsterBTN = styled(BaseButton)`
  width: 100%;
  margin: 0.5rem 0;
  text-transform: unset;
  padding: 0.7rem;
  font-size: ${(props) => props.theme.fonts.smText};
  background: ${(props) => props.theme.colors.cBlack};
  color: ${(props) => props.theme.colors.cWhite};
  /* &:hover {
    color: ${(props) => props.theme.colors.cGreen};
    background: ${(props) => props.theme.colors.cBlack};
  } */
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => props.theme.fonts.mdText};
  }
`;
