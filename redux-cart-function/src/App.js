import products from "./products.json"
import Product from "./Components/Product";
import './App.css';
import Cart from "./Components/Cart";

function App() {
  console.log(products.products)
  return (
    <div className="App">
      <Cart/>
      <div className="products">
  {products.products.map((product) => {
    console.log(product)
    return <Product {...product} key={product.id} />;
  })}
</div>
    </div>
  );
}

export default App;
