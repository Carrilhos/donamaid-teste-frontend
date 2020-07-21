import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${px2vw(32)};
  max-width: 100%;
  flex-direction: row @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 25px;
  width: ${px2vw(320, 320)};
`;

export const Button = styled.button``;
