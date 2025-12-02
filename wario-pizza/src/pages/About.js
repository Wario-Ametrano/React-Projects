import "../styles/About.css";
import Multiplepizza from '../assets/multiplePizza.jpeg';

export default function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage:`url(${Multiplepizza})`}}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Welcome to Wario Pizza, where we serve up delicious pizzas made with the freshest ingredients and a whole lot of love. Our story began in a small kitchen with a big dream: to create the perfect pizza experience for our community. Over the years, we've grown into a beloved local pizzeria, known for our mouth-watering pies and friendly atmosphere.
        </p>
        <p>
          At Wario Pizza, we believe that pizza is more than just food – it's a way to bring people together. Whether you're celebrating a special occasion or just craving a tasty meal, our diverse menu has something for everyone. From classic Margherita to adventurous gourmet toppings, we craft each pizza with care and attention to detail.
        </p>
        <p>
          Thank you for being a part of our journey. We look forward to serving you and sharing our passion for pizza with you for many years to come!
        </p>
      </div>
    </div>
  )
}