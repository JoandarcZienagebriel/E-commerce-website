import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/mainlayout';
import Home from './pages/home';
import About from './pages/about';
import Sweaters from './pages/sweaters';
import Contact from './pages/contact';
import Cart from './pages/cart';
import pink from './assets/img/pink.avif';
import white from './assets/img/white.avif';
import brown from './assets/img/brown.avif';
import blue from './assets/img/blue.avif';
import camicia from './assets/img/camicia.avif';
import coal from './assets/img/Charcoal.avif';
import fluffy from './assets/img/Fluffy.avif';
import orange from './assets/img/Orange.avif';
import storm from './assets/img/Storm.avif';
import tan from './assets/img/Tan.avif';
import vneck from './assets/img/V.avif';
export default function App() {
  const[cart, setCart]= useState([])
  const products= [
    { id: 1,
      name: 'brown sweater',
      img: camicia,
      price: '120'
    },
    { id: 2,
      name: 'pink and yellow squares sweater',
      img: pink,
      price: '320'
    },
    { id: 3,
      name: 'Charcoal turtle neck sweater',
      img: coal,
      price: '300'
    },
    { id: 4,
      name: 'Fluffy white sweater',
      img: fluffy,
      price: '320'
    },
    { id: 5,
      name: 'Orange tank-top sweater',
      img: orange,
      price: '420'
    },
    { id: 6,
      name: 'Storm gray sweater',
      img: storm,
      price: '390'
    },
    { id: 7,
      name: 'Tan sweater',
      img: tan,
      price: '320'
    },
    { id: 8,
      name: 'V-neck gray sweater',
      img: vneck,
      price: '320'
    },
   
    { id: 9,
      name: 'Friends sweaters',
      img: white,
      price: '320'
    },
    { id: 10,
      name: 'Brown sweater',
      img: brown,
      price: '320'
    }
  ]
  const addToCart = (product)=>{
    const existingItem= cart.find((item)=>item.id === product.id)
  
      if(existingItem){
        setCart(cart.map((item)=>
           item.id === product.id ? {...item, quantity: item.quantity +1} : item
        ))

      }
      else {
       setCart([
        ...cart,
        { ...product, quantity: 1 },
      ])
      }
    };

     const removeItem = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };
  

const increaseQ = (id)=>{
   setCart(cart.map((item)=>
           item.id === id ? {...item, quantity: item.quantity +1}: item));
};

const decreaseQ = (id) => {
  setCart(
    cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};
  return (
    <BrowserRouter>
   <Routes>
    <Route element={<MainLayout cart={cart}/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/sweaters' element={<Sweaters products={products}
      addToCart={addToCart}/>} />
    <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/cart' element={<Cart increaseQ={increaseQ} decreaseQ={decreaseQ} cart={cart} removeItem={removeItem} />}/>
    </Route>
   </Routes>
    </BrowserRouter>


 
  )
}
