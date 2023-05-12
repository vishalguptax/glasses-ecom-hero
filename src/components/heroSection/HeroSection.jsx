import heroImg from "../../assets/heroImg.png";
import "./heroSection.css";
import { BsArrowDownRightCircle } from "react-icons/bs";
const HeroSection = () => {
  return (
    <main>
      <div className="hero">
        <div className="heroTextSection">
          <span className="heroText">
            Glasses <br /> & Lens
          </span>
          <p>
            Buy the best high-quality sunglasses from us. <br />
            More than 100 types of assortment.
          </p>
          <div className="heroButtonSection">
            <button>Start Shopping</button>
            <span>
              Explore More
              <BsArrowDownRightCircle />
            </span>
          </div>
        </div>
        <div>
          <img className="heroImg" src={heroImg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
