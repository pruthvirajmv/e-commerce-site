import React, { useEffect } from "react";
import yonex from "../../assets/brands/yonex.png"; 
import nivia from "../../assets/brands/nivia.jpg"; 
import liNing from "../../assets/brands/li-ning.png"; 




import "./home.css";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  useEffect(() => {
    document.title = "ecom | home";
  }, []);

  const navigate = useNavigate();

  return <>
    <div className="home-avatar">
      <div >
          <h1 className="company-name">BaddyMart</h1>
          <p className="company-tag">serve it, smash it!</p>
      </div>
      <button
        onClick={() => navigate("/products")}
       className="bttn bttn-secondary shop">SHOP NOW</button>
    </div>


    <section className="brand-shop">
      <h1 className="text-gray">Shop by brand</h1>
      <div className="brand-display">
      <Link to={{
        pathname: "/products",
        search: "?brand=Yonex"
      }}>
          <img 
            src={yonex} />
      </Link>

      <Link to={{
        pathname: "/products",
        search: "?brand=Nivia"
        }}>
          <img 
            src={nivia} />
      </Link>
      
      <Link to={{
        pathname: "/products",
        search: "?brand=Li-Ning"
        }}>
          <img 
            src={liNing} />
      </Link>

      </div>
    </section>
  </>;
}
