import styled from "styled-components"

export const ContainerLi = styled.li`
    display: flex;
    padding: 5%;
    @media (max-width: 800px)
{ 
  padding: 1%;
  p{
    font-size: x-small;
}
}
`
export const ButtonRemove = styled.button`
width: 50%;
background-color: beige;
color: red;
border-color: beige;
border-radius: 3%;
margin-left: 3%;
@media (max-width: 800px)
{ 
width: 80%;
height: 15%;
border-radius: 3%;
margin-left: 3%;
p{
    font-size: x-small;
}
}
`
export const OrderItemCard = (props) => {
    const { pizza, removeFromCart } = props
    return (
        <ContainerLi>
            <p>
                Pizza {pizza.name}
                - {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'BRL' }
                )}
               <br/> x {pizza.quantity}</p>
            <ButtonRemove onClick={() => removeFromCart(pizza)}><p><strong>Remover item</strong></p></ButtonRemove>
        </ContainerLi>
    )
    
}