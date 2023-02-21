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
  font-size: ${(props) => props.theme.fonts.xmdText};
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => props.theme.fonts.xlgText};
  }
`;
export const H4 = styled.h4`
  margin-top: 0;
  font-size: ${(props) => props.theme.fonts.xmdText};
`;

export const Form = styled.form`
  border-radius: ${(props) => props.theme.features.borderRadius};
  background: ${(props) => props.theme.colors.cWhite};
  padding: 2rem 2rem;
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

export const QuizH4 = styled.h4`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: ${(props) => props.theme.fonts.mdText};
  @media ${(props) => props.theme.breakpoints.lg} {
     font-size: ${(props) => props.theme.fonts.lgText};
    }
`;
export const QuizP = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.cYellow};
  text-align: right;
  font-size: ${(props) => props.theme.fonts.mdText};
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => props.theme.fonts.lgText};
  }
`;
export const QuizNo = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.cText};
  text-align: left;
  font-size: ${(props) => props.theme.fonts.lgText};
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => props.theme.fonts.xlgText};
  }
`;
export const QuizBody = styled.div`
  border-radius: ${(props) => props.theme.features.borderRadius};
  background: ${(props) => props.theme.colors.cWhite};
  padding: 2rem 2rem;
  box-shadow: ${(props) => props.theme.shadows.shadow2};
`;
export const QuizBTNWrap = styled.div`
  padding: 1rem 0rem;
  display: inline-block;
  @media ${(props) => props.theme.breakpoints.lg} {
    border-left: 0.005rem solid ${(props) => props.theme.colors.cYellow};
    padding: 0rem 1rem;
    display: flex;
   flex-direction: column;
   width: 50%;
   justify-content: space-between;
  }
`;

export const FormCenter = styled.div`
  display: block;
  .btn-center {
    padding: 0.75rem 0.75rem 0.75rem 0.3rem;
    @media ${(props) => props.theme.breakpoints.xl} {
      margin-top: 0 ;
    }
  }
`;
export const QuizFormCenter = styled.div`
  /* display: block; */
  width: 95%;
  max-width: 300px;
  line-height: 1.5;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 500px;
  }
  .btn-center {
    padding: 0.5rem 0.5rem 0.5rem 0.3rem;
    @media ${(props) => props.theme.breakpoints.lg} {
      max-width: 600px;
    }
  }
`;
