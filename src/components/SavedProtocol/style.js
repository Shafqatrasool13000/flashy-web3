import styled from "styled-components";
import { secondaryDark } from "../Global";

export const SavedProtocolStyled = styled.div`

margin-top: 24px;

.list{


.box{

background-color: ${secondaryDark};
color: #ffffff;
padding: 14px;
border-radius: 7px;
margin: 0 auto;

.method-btn{
color: white;
padding: 3px 9px;
border: 1px solid rgb(38, 105, 245) ;
border-radius: 7px;
font-size: 14px;
max-width: 160px;
background-color: transparent;

&:hover{
background: rgb(255,255,255,0.4);
border: 1px solid rgb(80, 132, 236);
}
}

.title{
font-weight: 700;
font-size: 18px
}

.token{
font-weight: 700;
font-size: 16px;
margin-bottom: 0;
}
.price{
font-size: 18px;
margin-bottom: 0;
font-weight: 700;

}

.bottom-border{
border-bottom: 1px solid white;
width: 94%;
margin: 0 auto;
}
}


}
`

export const EditProtocolStyled = styled.div`
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
background-color: transparent;
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

.set-btn{
background-color:rgb(58,62,91);
&:hover{
opacity: 0.5;
}
}

`