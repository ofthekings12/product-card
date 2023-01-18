import "./App.scss";
import image1 from "./images/image1.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="product-img" src={image1} alt="perfume"></img>
        <div className="product-details">
          <div className="header">P E R F U M E</div>
          <div className="product-name">Gabrielle Essence Eau De Parfum</div>
          <div className="product-description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</div>
        <div className="prices">
          <div className="current-price">$149.99</div>
          <div className="previous-price">$169.99</div>
        </div>
        <button className="button">Add to Cart</button>
          </div>
      </div>
    </div>
  );
}

export default App;
