import './App.css';
import {useState, useEffect} from "react";


const url = "http://localhost:3000/products";

function App() {


  const [products, setProducts] = useState([]);
 
  useEffect( ()=> {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
    fetchData()
  },[]);  

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {products.map( (products)=> (
          <li key={products.id}>{products.name} = R$ {products.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
