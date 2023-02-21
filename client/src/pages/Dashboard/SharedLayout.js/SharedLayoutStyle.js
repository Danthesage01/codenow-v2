import styled from "styled-components";

export const Section = styled.section``;

export const MainDashboard = styled.main`
  display: grid;
  background: ${(props) => props.theme.colors.cAsh};
  grid-template-columns: 1fr;
  @media (min-width: 992px) {
    grid-template-columns: auto 1fr;
  }
`;

export const PageDashboard = styled.div`
  /* background: ${(props) => props.theme.colors.cWhite}; */
  width: 90vw;
  margin: 2rem auto;
  /* padding: 2rem 0; */
  @media (min-width: 992px) {
    width: 90%;
  }
`;

export const Div = styled.div`
`