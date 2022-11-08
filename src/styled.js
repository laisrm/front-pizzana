import styled from "styled-components"

export const Back = styled.img`
width: 100%;
height: 1700px;
position: relative;
@media (max-width: 800px)
{ 
  width: 100%;
  height: 700px;}
`

export const Todo = styled.div`
background-color: black;
width: 100%;
margin: 0;
padding: 0;
border: none;
outline: none;
overflow: hidden;
@media (max-width: 800px)
{
margin: 0;
padding: 0;
border: none;
outline: none;
height: 970px;
width: 100%;
overflow: hidden;
background-color: black;
}
`
export const ContainerImg = styled.div`
display: flex;
justify-content: center;
width: 100%;
@media (max-width: 800px)
{ 
  display: flex;
justify-content: center;
width: 100%;  
margin-top: 3%;
}
`

export const ContainerMain = styled.div`
  display: flex;
  width:100%;
margin-top: 50%;
color: white;
position: absolute;
  @media (max-width: 800px)
{ 
  width: 100%;
height: 50px;
margin-left: 3%;
margin-top: 58%;
}
`
export const Logo = styled.img`
display: flex;
float: left;
overflow: hidden;
position: absolute;
width: 50%;
@keyframes fa-blink {
    0% { opacity: 1; }
     80% { opacity: 0.8; }
     100% { opacity: 0; } 
 }
   -webkit-animation: fa-blink 1.0s linear infinite;
   -moz-animation: fa-blink 1.0s linear infinite;
   -ms-animation: fa-blink 1.0s linear infinite;
   -o-animation: fa-blink 1.0s linear infinite;
   animation: fa-blink 1.9s linear infinite;

@media (max-width: 800px)
{ 
  display: flex;
float: left;
overflow: hidden;
position: absolute;
width: 50%;
}
`
export const Pizza = styled.img`
display: flex;
margin-top: 5%;
margin-left: 4%;
width: 25%;
float: left;
overflow: hidden;
position: absolute;
@media (max-width: 800px)
{ 
  width: 25%;
margin-left: 4%;
margin-top: 5%;
}
`
export const Cardapio = styled.img`
display: flex;
width: 80%;
opacity: 0.8;
@media (max-width: 800px)
{ 
  width: 80%;
margin-top: 85%;}
`
export const Button = styled.button`
display: flex;
background: none;
border: none;
margin-top: 32%;
margin-left: 12%;
width: 40%;
float: left;
overflow: hidden;
position: absolute;
:hover,
button:focus {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);};
@media (max-width: 800px)
{ 
  width: 40%;
margin-left: 12%;
margin-top: 2%;}
`

export const Sub = styled.p`
width: 20%;
margin-left: 70%;
margin-top: 5%;
position: absolute;
color: whitesmoke;
font-size: x-large;
font-style: italic;  
font-family: Brush Script MT, Brush Script Std, cursive;	
@media (max-width: 800px)
{ 
  width: 50%;
margin-left: 75%;
margin-top: 2%;
font-size: small;
}
`
export const ContainerPizza = styled.div`
display: flex;
flex-direction: column;
margin: 4%;
width: 25%;
@media (max-width: 800px)
{ 
  margin: 0;
width: 100%
}
`

export const ContainerCarrinho = styled.div`
position: absolute;
color:yellow;
margin-top: 60%;
margin-right: 1%;
width: 70%;
@media (max-width: 800px)
{ 
  margin-top: 60%;
margin-right: 1%;
}
`

export const Footer = styled.img`
width: 100%;
height: 15em;
@media (max-width: 800px)
{ 
  width: 100%;
height: 10%;
}
`
export const Delivery = styled.img`
width: 25%;
position: absolute;
margin-left: 25%;
margin-top: 125%;
@media (max-width: 800px)
{ 
  width: 25%;
position: absolute;
margin-left: 0;
margin-top: 180%;
}
`