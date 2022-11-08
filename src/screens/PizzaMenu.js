import axios from "axios"
import { useEffect, useState } from "react"
import { PizzaCard } from "../components/PizzaCard";
import { BASE_URL } from "../constants";
import styled from "styled-components";

export const ContainerSection = styled.section`
    ul{
        display: flex;
        flex-direction: column;
        width: 155%;
        letter-spacing: 1px; 
        font-size: large;
        padding: 5%
    }  ;
    @media (max-width: 800px)
{ 
    ul{
        width: 100%;
        letter-spacing: 1px; 
        font-size: x-small;
        padding: 1%
    }
}  
   
`


export const PizzaMenu = (props) => {
  const { addToCart } = props

  const [ pizzas, setPizzas ] = useState([])

  useEffect(() => {
      axios.get(`${BASE_URL}/pizzas`)
          .then((res) => {
              setPizzas(res.data.pizzas)
          })
          .catch((err) => {
              console.log(err)
          })
  }, [])

    return (
      <ContainerSection>
      <ul>
          {pizzas.map((pizza) => {
              return (
                  <PizzaCard
                      key={pizza.name}
                      pizza={pizza}
                      addToCart={addToCart}
                  />
              )
          })}
      </ul>
  </ContainerSection>
    )
}