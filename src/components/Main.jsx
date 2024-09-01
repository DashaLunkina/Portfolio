import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main className="main-container">
      <section className="section">
        <h2>Introduction</h2>
        <p>Welcome to our website! Here we will introduce you to our mission and values.</p>
      </section>
      <section className="section">
        <h2>About Us</h2>
        <p>Learn more about our history, team, and what drives us to do what we do.</p>
      </section>
      <section className="section">
        <h2>Contact</h2>
        <p>Feel free to reach out to us via email or follow us on social media.</p>
      </section>
    </main>
  );
}

export default Main;
