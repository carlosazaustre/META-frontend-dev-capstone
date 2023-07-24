import "./CallToAction.css";
import ïmgRestaurant from "../assets/restaurant_chefB.jpg";

function CallToAction() {
  return (
    <section className="CallToAction">
        <div className="content">
            <div>
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="CallToAction-button">Reserve a Table</button>
            </div>
            <figure>
                <img width="200px" src={ïmgRestaurant} alt="Restaurant" />
            </figure>   
        </div>
        
    </section>
  );
}

export default CallToAction;