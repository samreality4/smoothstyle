import React from "react";
import "./homepage.styles.scss";

const Homepage = () => {
  return <div className="homepage">
    <div className="directory-menu">
      <div className="menu-tem">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-tem">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-tem">
        <div className="content">
          <h1 className="title">WOMAN</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-tem">
        <div className="content">
          <h1 className="title">MEN</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>;
};

export default Homepage;