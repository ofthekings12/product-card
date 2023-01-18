import "./App.scss";
import image1 from "./images/image1.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="product-img" src={image1} alt="perfume"></img>
        <div className="product-details">
          <h1 className="header">P E R F U M E</h1>
          <h2 className="product-name">Gabrielle Essence Eau De Parfum</h2>
          <h3 className="product-description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</h3>
        <div className="prices">
          <div className="current-price">$149.99</div>
          <div className="previous-price">$169.99</div>
        </div>
        <button>Add to cart</button>
          </div>
      </div>
    </div>
  );
}

export default App;
