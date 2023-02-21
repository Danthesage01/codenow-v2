import styled from "styled-components";

const Wrapper = styled.nav`
  height: ${(props) => props.theme.features.navHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: none;
    align-items: center;
    width: 100px;
    height: 0.5rem;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: ${(props) => props.theme.colors.cGreen};
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: ${(props) => props.theme.colors.cWhite};
  .btn-container {
    position: relative;
    font-size: 0.875rem;
    @media ${(props) => props.theme.breakpoints.lg} {
      font-size: 1rem;
    }
  }

  .logoutBtn {
    position: relative;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }

  .dropdown {
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    background: ${(props) => props.theme.colors.cBlack};
    box-shadow: ${(props) => props.theme.shadows.shadow2};
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    font-size: 0.875rem;
    border-radius: ${(props) => props.theme.features.borderRadius};
    @media ${(props) => props.theme.breakpoints.lg} {
      font-size: 1rem;
      top: 73px;
    }
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: ${(props) => props.theme.colors.cGreen};
    letter-spacing: ${(props) => props.theme.features.letterSpacing};
    text-transform: capitalize;
    cursor: pointer;
    font-size: 0.875rem;

    @media ${(props) => props.theme.breakpoints.lg} {
      font-size: 1rem;
    }
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
