import "./productCard.css";

import glass1 from "../../assets/glass1.jpg";
import glass2 from "../../assets/glass2.jpg";
import glass3 from "../../assets/glass3.jpg";

const ProductCard = () => {
  return (
    <div className="productSection">
      <h4>
        Trend <br />
        Products
      </h4>
      <div className="cardSection">
        <div className="card">
          <div className="cardHead">
            <p className="cardTitle">
              Studio <br />
              <span className="glassTypeText">Vison</span>
            </p>
            <div className="cardheadRight">
              <span className="cardPrice">$223</span>
              <span className="cardButton btn">+</span>
            </div>
          </div>
          <div>
            <img className="cardImg" src={glass1} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="cardHead">
            <p className="cardTitle">
              Boost <br />
              <span className="glassTypeText">Sports</span>
            </p>
            <div className="cardheadRight">
              <span className="cardPrice">$459</span>
              <span className="cardButton btn">+</span>
            </div>
          </div>
          <div>
            <img className="cardImg" src={glass3} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="cardHead">
            <p className="cardTitle">
              Rim <br />
              <span className="glassTypeText">Sunglasses</span>
            </p>
            <div className="cardheadRight">
              <span className="cardPrice">$175</span>
              <span className="cardButton btn">+</span>
            </div>
          </div>
          <div>
            <img className="cardImg" src={glass2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
