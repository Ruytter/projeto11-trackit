import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/auth";
export default function Header() {
  const { user } = useContext(AuthContext);
  return (
    <Topo>
      <p>TrackIt</p>
      <img src={user.u.image} alt="" />
    </Topo>
  );
}

const Topo = styled.div`
  width: 375px;
  height: 30px;
  padding: 20px;
  font-family: "Playball", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  color: #ffffff;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;
