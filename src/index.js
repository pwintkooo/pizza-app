import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function Header() {
  return <h1 style={{color: 'orange', fontSize: '48px', textTransform: "uppercase"}}>Andy's Pizza Co.</h1>;
}

function Pizza({img, name, desc, price}) {
  return (
    <div className="pizza">
      <img src={img}/>
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>{price}</p>
    </div>
  );
}

function Menu({isOpen}) {
  const pizzas = [
    {
      img : '/pizzas/focaccia.jpg',
      name : 'Focaccia',
      desc : 'Bread with italian olive oil and rosemary',
      price : 6
    },
    {
      img : '/pizzas/spinaci.jpg',
      name : 'Pizza Spinaci',
      desc : 'Tomato mozarella spinach, and ricotta cheese',
      price : 12
    },
    {
      img : '/pizzas/salamino.jpg',
      name: 'Pizza Salamino',
      desc : 'Tomato, mozarella, and pepperoni',
      price : 15
    },
    {
      img : '/pizzas/margherita.jpg',
      name : 'Pizza Margherita',
      desc : 'Tomato and mozarella',
      price : 10
    },
    {
      img : '/pizzas/funghi.jpg',
      name : 'Pizza Funghi',
      desc : 'Tomato, mozarella, mushrooms, and onion',
      price : 12
    },
    {
      img : '/pizzas/prosciutto.jpg',
      name : 'Pizza Prosciutto',
      desc : 'Tomato, mozarella, ham, aragula, and burrata cheese',
      price : 18
    }
  ];

  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      { isOpen && <h3>Authentic Italian cuisine, all from our stone oven</h3>}
      <div className="pizzas">
        {pizzas.map(pizza => (
          <Pizza
            img = {pizza.img}
            name = {pizza.name}
            desc = {pizza.desc}
            price = {pizza.price}
          />
        ))}
      </div>
    </div>
  )
}

function Footer({isOpen}) {
  return (
    <footer className='footer'>
      <Order isOpen = {isOpen}/>
    </footer>
  )
}

function Order({isOpen}) {
  return(
    <div className="order">
      { isOpen ? (
        <>
          <h3>We're currently open</h3>
          <button className="btn">Order</button>
        </>) : ( 
          "Sorry we're closed")}
    </div>
  )
}

function App() {
  // const currentHour = new Date().getHours();
  let currentHour = 11;
  const isOpen = currentHour >= 10 && currentHour <= 22;
  return (
    <div className='container'>
      <Header />
      <Menu isOpen={isOpen}/>
      <Footer isOpen={isOpen}/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
