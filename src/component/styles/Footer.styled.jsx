import styled from "styled-components";

export const StyleFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
