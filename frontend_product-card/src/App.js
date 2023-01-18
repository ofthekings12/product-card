import "./App.scss";
import image1 from "./images/image1.jpg"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="product-img">
          <img src={image1} alt="perfume"></img>
        </div>
        
        <div className="product-details">product details</div>
      </div>
    </div>
  );
}

export default App;
