import styled from "styled-components";

export default function Logo() {
  return (
    <Imglogo>
      <div>
        <div className="superior">
          <div>
            <img src="../img/Vector 1.png" alt="" />
          </div>
          <div>
            <img src="../img/Vector 2.png" alt="" />
          </div>
          <div>
            <img src="../img/Vector 3.png" alt="" />
          </div>
        </div>
        <div className="inferior">
          <img src="../img/Vector 4.png" alt="" />
          <img src="../img/Ellipse 3.png" alt="" />
        </div>
      </div>
      <div>
        <p>TrackIt</p>
      </div>
    </Imglogo>
  );
}

const Imglogo = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  .superior {
    display: flex;
    align-items: center;
    position: absolute;
    left: 166px;
    bottom: 110px;
  }
  .superior img {
    margin: 2.5px;
  }
  p {
    margin: 0 auto;
    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    text-align: center;
    color: #126ba5;
  }
  .inferior{
    display:flex;
    flex-direction:column;
    align-items: flex-end;
  }
  .inferior img:nth-child(1) {
    z-index:1;
  }
  .inferior img:nth-child(2) {
    width: 140px;
    margin-top: -13px;
  }
`;
