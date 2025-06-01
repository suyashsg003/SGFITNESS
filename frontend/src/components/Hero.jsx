import React from 'react'
import { Link } from 'react-router-dom';
const Hero = () => {
   const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <section className="hero">
      <div className="content">
        <div className="title">
        <h1>YOUR</h1>
        <h1>JOURNEY TO</h1>
        <h1>BE FIT</h1>
      </div>
      <div className="sub-title">
        <p>Join us at SG_FITNESS to transform your fitness journey.</p>
        <p> Whether you're a beginner or a seasoned athlete,<br></br>
        we have the resources and community to help you achieve your goals.</p>
      </div>
     <div className="buttons">
        <button onClick={scrollToContact}>Join Now</button>
        <button onClick={scrollToPricing}>Discover Plans</button>
      </div>
      </div>
    </section>
  )
}

export default Hero
