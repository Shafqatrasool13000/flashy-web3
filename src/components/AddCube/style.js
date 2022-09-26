import styled from "styled-components";

export const CubeBodyStyled=styled.div`

.head-bar{

.title{
text-align: center;
font-size: 16px;
}
}

.method{

&-btn{
color: white;
padding: 3px 9px;
border: 1px solid white;
border-radius: 7px;
font-size: 14px;
background: transparent;

&:hover{
background: rgb(255,255,255,0.4);
border: 1px solid rgb(255,255,255,0.4);
}
}
}
`

export const AddProtocolStyled = styled.div`
margin-top: 24px;

.back-icon,.more-icon{
cursor: pointer;
}
color: white;
border-radius: 7px;
background-color: #232535;
max-width: 450px;
padding: 20px;

.method-btn{
color: white;
padding: 3px 9px;
border: 1px solid white;
border-radius: 7px;
font-size: 14px;
background: transparent;
max-width: 200px;

&:hover{
background: rgb(255,255,255,0.4);
border: 1px solid rgb(255,255,255,0.4);
}
}

.input-section{
input{
border: none;
background: transparent;
text-align: end;
border-bottom: .5px solid rgb(255,255,255,0.3);
color: white;
font-size: 22px;

&::placeholder{
font-size: 22px;
letter-spacing: 1px;
}
}

.max-btn{
font-size: 14px;
border-radius: 4px;
padding: 0px 15px;
background: transparent;
color: white;
border: 1px solid rgb(57,59,74);

&:hover{
background: rgb(255,255,255,0.4);
border: 1px solid rgb(255,255,255,0.4);
}
}

}

`

export const AddProtocol2Styled = styled.div`

margin-top: 24px;
.back-icon,.more-icon{
cursor: pointer;
}
color: white;
border-radius: 7px;
background-color: #232535;
max-width: 450px;
padding: 20px;

.method-btn{
color: white;
padding: 3px 9px;
border: 1px solid white;
border-radius: 7px;
font-size: 14px;
background: transparent;
max-width: 200px;

&:hover{
background: rgb(255,255,255,0.4);
border: 1px solid rgb(255,255,255,0.4);
}
}

input{
border: none;
background: transparent;
text-align: end;
border-bottom: .5px solid rgb(255,255,255,0.3);
color: white;
font-size: 22px;

&::placeholder{
font-size: 22px;
letter-spacing: 1px;
}
}

.input-section{

.max-btn{
font-size: 14px;
border-radius: 4px;
padding: 0px 15px;
background: transparent;
color: white;
border: 1px solid rgb(57,59,74);

&:hover{
background: rgb(255,255,255,0.4);
border: 1px solid rgb(255,255,255,0.4);
}
}

}

`
