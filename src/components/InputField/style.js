import styled from "styled-components";

export const InputFieldStyled = styled.div`

.input{
border: none;
background: transparent;
text-align: end;
border-bottom: .5px solid rgb(255,255,255,0.3);
color: white;
font-size: 20px;
caret-color: white;

&::placeholder{
font-size: 22px;
letter-spacing: 1px;
}
}

.valid{
border-bottom: .5px solid green;
}

.invalid{
border-bottom: .5px solid red;
}
`