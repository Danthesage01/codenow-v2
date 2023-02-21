import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
  font-family:${(props) => props.theme.fonts.body} ;
  background: ${(props) => props.theme.colors.cWhite};
  font-weight: 400;
  line-height: 1.75;
  color: ${(props) => props.theme.colors.cText};
}

h1, h2, h3, h4, h5  {
  margin: 0;
  margin-bottom: 1.38rem;
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  letter-spacing: ${(props) => props.theme.features.letterSpacing};
}
h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}
a {
  text-decoration: none;
  letter-spacing: ${(props) => props.theme.features.letterSpacing};
}
a,
button {
  line-height: 1.15;
}
button:disabled {
  cursor: not-allowed;
}
ul {
  list-style-type: none;
  padding: 0;
}


.btn{
  cursor: pointer;
  width: 100%;
  margin: 0.5rem 0;
  text-transform: unset;
  padding: 0.7rem;
  border: transparent;
  font-size: ${(props) => props.theme.fonts.smText};
  background: ${(props) => props.theme.colors.cBlack};
  color: ${(props) => props.theme.colors.cWhite};
  border-radius: ${(props) => props.theme.features.borderRadius};
 
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => props.theme.fonts.mdText};
  }
}

.user-answer{
  background: #4D5B9E;
  color: ${(props) => props.theme.colors.cGreen};
}

.Toastify__toast {
  text-transform: capitalize;
  width: 400px;
  font-size: 0.8rem;
}

@media screen and (min-width: 576px) {
  .Toastify__toast {
    font-size: 1rem;
  }

}
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
  z-index: -1;
}
.isOpen {
  opacity: 1;
  z-index: 999;
}

.modal-content {
  background: ${(props) => props.theme.colors.cWhite};
  width: 90vw;
  max-width: ${(props) => props.theme.features.fixedWidth};

  padding: 3rem;
  border-radius: ${(props) => props.theme.features.letterSpacing};
  text-align: center;
  position: relative;
}
.modal-content p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: none;
}
.close-btn {
  margin-right: auto;
}

`;

export default GlobalStyles;
