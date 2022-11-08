import styled from "styled-components"

export const Container = styled.li`
    margin: 3em;
    height: 5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3, .price 
    {
        text-align: center;
        font-size: large;
    }
    h3, .name
    {
        color: yellow;
        font-size: xx-large;
        text-align: left;
    };
    @media (max-width: 800px)
{ 
  width: 50%;
  margin: 1%;
    height: 3%;
    h3, .price 
    {
        text-align: center;
        font-size: small;
    }
    h3, .name
    {
        color: yellow;
        font-size: medium;
        text-align: left;
    }
}  
    
`
export const Butao = styled.button`
background-color: beige;
color: red;
height: 3rem;
width: 100%;
border-color: beige;
border-radius: 3%;
p{
        font-size: x-large
    };

    @media (max-width: 800px)
{ 
  width: 100%;
  height: 1rem;
  p{
        font-size: x-small
    }
}  
`

export const PizzaCard = (props) => {
    
    const {pizza, addToCart} = props 
    
    return (
        <Container>
            <h3><strong>{pizza.name}</strong></h3>
            <p className="card-price">
                {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'BRL' }
                )}
            </p>
            <p>
               <u>Plot:</u> {pizza.ingredients.map((item) => {
                    return (
                        <span key={item}>{`${item} `}</span>
                        
                    )
                })}
            </p>
            <Butao onClick={() => addToCart(pizza)}><p><strong>Quero essa</strong></p></Butao>
        </Container>
    )
}