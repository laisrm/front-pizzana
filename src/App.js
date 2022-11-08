import { PizzaMenu } from "../src/screens/PizzaMenu";
import { OrderSummary } from "./screens/OrderSummary";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constants";
import back from './imagens/back.png'
import neon from './imagens/neon.png'
import gorda from './imagens/gorda.png'
import menu from './imagens/menu.png'   
import footer from './imagens/footer.JPG'     
import delivery from './imagens/delivery.png'                             
import * as A from './styled'
import { Link, animateScroll as scroll } from "react-scroll";



function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    
    const total = cart.reduce(
      (acc, item) => acc + (item.price * item.quantity),
      0
    ) 

    setTotal(total)
  
  },[cart])

  const addToCart = (pizzaToAdd) => {
    const foundIndex = cart.findIndex((pizzaInCart) => {
      return pizzaInCart.name === pizzaToAdd.name
    })

    if (foundIndex >= 0) {
      const newCart = [...cart]
      newCart[foundIndex].quantity += 1

      setCart(newCart)
    } else {
      const newCart = [...cart]
      const newPizza = {
        name: pizzaToAdd.name,
        price: pizzaToAdd.price,
        quantity: 1
      }

      newCart.push(newPizza)

      setCart(newCart)
    }
  }

  const removeFromCart = (pizzaToRemove) => {
    if (pizzaToRemove.quantity > 1) {
      const newCart = cart.map((pizza) => {
        if (pizza.name === pizzaToRemove.name) {
          pizza.quantity -= 1
        }

        return pizza
      })

      setCart(newCart)

    } else {
      const newCart = cart.filter((pizza) => {
        return (pizza.name !== pizzaToRemove.name)
      })
      setCart(newCart)
    }

  } 

  const confirmOrder = async () => {
    try{
      const body = {
        pizzas: cart
      }

      const res = await axios.post(`${BASE_URL}/orders`, body)
      alert(res.data.message)
    }
    catch (err) {
      alert(err.response)
    }
  }

  return (
    <A.Todo>
    <A.ContainerImg>
    <A.Back src={back}/>
    <A.ContainerCarrinho>
    <OrderSummary cart={cart} removeFromCart={removeFromCart} total={total} confirmOrder={confirmOrder} /> 
    </A.ContainerCarrinho> 
      <A.Logo src={neon}/>
      <A.Pizza src={gorda}/>
     <A.Button onClick={() => window.scrollTo(0,600)}><A.Cardapio src={menu}/></A.Button>
      <br/>
      <A.Sub>
    A melhor da cidade!
    </A.Sub>

    <A.ContainerMain>
    <A.ContainerPizza>
    <PizzaMenu addToCart={addToCart} />
    </A.ContainerPizza> 
    <br/> 
       
    </A.ContainerMain>
    <A.Delivery src={delivery}/>
    </A.ContainerImg>
    <A.Footer src={footer}/>
    </A.Todo>
  );
}

export default App;
