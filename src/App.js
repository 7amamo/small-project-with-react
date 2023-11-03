import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componenet/Navbar';
import ProductList from './componenet/ProductList';
import About from './componenet/About';
import ProductDetails from './componenet/ProductDetails';
import Contact from './componenet/contact';
// import Contact from './componenet/contactontact';
// import Product from './componenet/Product';
// import Welcom from './componenet/Welcom';
// import Welcom from './componenet/Welcom';
// import Test from './componenet/test';
// import ProductsList from './componenet/productsList';

function App() {
  return (
    <div className="App">
      {/* <Welcom name="ahmed" age = "21"/> */}
      {/* <Test  age = "22"/>
      <Test  age = "22"/>
      <Test  age = "22"/> */}
    {/* <Welcom name="name" type="text"/> */}
    {/* <Welcom name="password" type="password"/> */}
    {/* <ProductsList/> */}
    <Navbar/>
    <Routes>
      <Route path ='/' element={<ProductList/>}/>
      <Route path ='about' element={<About/>}/>
      <Route path ='contact' element={<Contact/>}/>
      <Route path ='products/:productid' element={<ProductDetails/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
