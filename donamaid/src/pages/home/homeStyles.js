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
  flex-direction: column;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1%;
  flex-wrap: wrap;
  aling-items: start;
  justify-content: flex-start;
  border: 1px solid red;
  margin-top: 10%;
`;

export const ProfileData = styled.div`
  display: flex;
  aacolor: #fff;
  flex-direction: column;
  border: 1px solid red;
`;

export const Description = styled.div`
  width: 400px;
  font-size: 20px;
  display: flex;
  text-align: center;
  border: 1px solid red;
`;
