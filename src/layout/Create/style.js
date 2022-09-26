import styled from "styled-components";
import { primaryColor } from "../../components/Global";

export const CreateLayoutStyled = styled.div`

padding-bottom: 60px;


.icon-container{

  display: flex;
  justify-content: center;
  max-width: 450px;
  margin-top: 18px;

  .plus-icon{
  background-color: ${primaryColor};
  border-radius: 50%;
  padding: 14px;
  width: 50px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
   
  
}
`