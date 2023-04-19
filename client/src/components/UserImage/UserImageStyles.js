import styled from "styled-components";


const UserImg = styled.img`
  width: 35px;
  max-height: 35px;
  border-radius: 50%;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 45px;
    max-height: 45px;
  }
`;

export default UserImg