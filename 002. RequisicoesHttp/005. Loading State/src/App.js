import './App.css';
import {useState, useEffect} from "react";
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const {data: items, httpConfig, loading, error} = useFetch(url)

  const handleSubmit = async (e)=> {
    e.preventDefault()
    const product = {name, price}
    httpConfig(product, "POST")
    setName("")
    setPrice("")
    
  }

  return (
    <div className="App">

      <h1>Product List</h1>

      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}

      <ul>
        {items && items.map( (products)=> (
          <li key={products.id}>{products.name} = R$ {products.price}</li>
        ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
        <label>
            Nome: 
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço: 
            <input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {loading && <input type="submit" disabled value="Aguarde"/>}
          {!loading && <input type="submit" value="Criar produto"/>}
        </form>
      </div>

    </div>

  );
}

export default App;
