import React from "react";
import "./Products.css";
import ProductOne from "../../Assets/image-retro-pcs.jpg";
import ProductTwo from "../../Assets/image-top-laptops.jpg";
import ProductThree from "../../Assets/image-gaming-growth.jpg";

function Products() {
  return (
    <div id="CardsWrapper" lang="contentinfo">
      <div className="Card">
        <img alt="" src={ProductOne} className="ProductsImges"></img>
        <div >
          <div className="InnerCard">
            <label>01</label>
            <h1>Reviving Retro PCs</h1>
            <p>what happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
      </div>
      <div className="Card">
        <img alt="" src={ProductTwo} className="ProductsImges"></img>
        <div >
          <div className="InnerCard">
            <label>02</label>
            <h1> Top 10 Laptops of 2022</h1>
            <p>Our best picks for various needs and budgets</p>
          </div>
        </div>
      </div>
      <div className="Card">
        <img alt="" src={ProductThree} className="ProductsImges"></img>
        <div >
          <div className="InnerCard">
            <label>03</label>
            <h1>The Growth of Gaming</h1>
            <p>How the pandemic has sparked fresh opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
