import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function Header() {
  return(
    <div className="header">
      <h1>PWINT KO OO's Pizza Co.</h1>
    </div>
  )
}

function Pizza({img, name, desc, price}) {
  return (
    <div className="pizza">
      <img src={img} alt={name}/>
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>{price}</p>
    </div>
  );
}

function Menu() {
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

  const currentHour = new Date().getHours();
  // let currentHour = 9;
  const isOpen = currentHour >= 10 && currentHour <= 22;

  const [searchPizza, setSearchPizza] = useState('');

  const handleSearchChange = (event) => {
    setSearchPizza(event.target.value);
  };

  const filteredPizzas = pizzas.filter(pizza => 
    pizza.name.toLowerCase().includes(searchPizza.toLowerCase())
  );

  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      { isOpen && <h3>Authentic Italian cuisine, all from our stone oven</h3>}
      <input className="searchBar"
        type = 'text'
        placeholder="Search for a pizza..."
        value = {searchPizza}
        onChange={handleSearchChange}
      />
      <div className="pizzas">
        {filteredPizzas.map(pizza => (
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

function Footer() {
  const currentHour = new Date().getHours();
  // let currentHour = 9;
  const msg = (currentHour >= 10 && currentHour <= 22 ? <Order/> : "Sorry we're closed"); 
  return(
    <footer className='footer'>{msg}</footer>
  )
}

function Order() {
  return(
    <div className="order">
      <h3>We're currently open</h3>
      <button className='btn'>Order</button>
    </div>
  )
}

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu/>
      <Footer/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
