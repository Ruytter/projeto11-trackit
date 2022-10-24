import styled from "styled-components";
export default function Header(){
    return (
        <Topo>
            <p>TrackIt</p>
            <img src="../img/bob.png" alt = ""/>
          </Topo>
    )
}

const Topo = styled.div`
height: 30px;
padding: 20px;
font-family: 'Playball', cursive;
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
left: 0px;
top: 0px;
`