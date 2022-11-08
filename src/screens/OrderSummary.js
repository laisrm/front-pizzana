import { OrderItemCard } from "../components/OrderItemCard"
import styled from "styled-components"

export const ContainerSection = styled.section`
    width: 25em;
    height: 100%;
    margin-left: 60%;
    background-color: rgba(10,23,55,0.5);
    border: 5px rgba(10,23,55,0.6);

    h1{
        font-size: 3em;
        text-align: center;
        margin-bottom: 15%;
        letter-spacing: 3px; 
    };
    @media (max-width: 800px)
{ 
  width: 50%;
  margin-left:65%;
  h1{
        font-size: medium;
        text-align: center;
        margin-bottom: 15%;
        letter-spacing: 3px; 
    };
    h2{
        font-size: smaller;
        text-align: center;
        margin-bottom: 5%;
        margin-top: 8%;
        letter-spacing: 2px; 
    }
}
    
`

export const Confirmar = styled.button`
background-color: lightyellow;
color: red;
width: 100%;
border-color: beige;
border-radius: 3%;
p{
        font-size: x-large
    }
margin-top: 15%;
height: 4em;
@media (max-width: 800px)
{ 
    width: 100%;
border-color: beige;
border-radius: 3%;
p{
        font-size: small
    }
margin-top: 15%;
height: 2em;
}
`

export const OrderSummary = (props) => {
    const { cart, removeFromCart, total, confirmOrder } = props

    return (
        <ContainerSection>
            <h1>Pedido</h1>

            {cart.map((pizza) => {
                return (
                    <OrderItemCard key={pizza.name} pizza={pizza} removeFromCart={removeFromCart} />
                )
            })}

            <h2>Total: {total.toLocaleString(
                'pt-br',
                { style: 'currency', currency: 'BRL' }
            )}</h2>
            <Confirmar onClick={confirmOrder}><p><strong>Confirmar Pedido</strong></p></Confirmar>
        </ContainerSection>
    )
}