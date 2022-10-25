// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { BackButton } from "../../constants/colors";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Li(props) {
  const { day, isSelected  } = props;
  const [status, setStatus] = useState("selected")
  
  useEffect(() => {
    if (isSelected){
            setStatus("selected")
        }else{
            setStatus("unselected")

        }
    }, [isSelected]);


  return (
    <>
      <Lidiv status={status}>{day}</Lidiv>
    </>
  );
}

const Lidiv = styled.li`
  width: 30px;
  height: 30px;
  margin-right: 4px;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: ${props => BackButton[props.status].color};
  background-color: ${props => BackButton[props.status].back};
  border: 1px solid ${props => BackButton[props.status].border};
  border-radius: 5px;
`;
