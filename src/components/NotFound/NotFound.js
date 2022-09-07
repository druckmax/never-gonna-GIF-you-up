import React from "react";
import "./NotFound.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/context";


export default function NotFound() {
  const context = useContext(MainContext)

  return (
    <section className={`page_404 ${context.theme === 'light' && 'page_404--light'}`}>
      <h1>404</h1>
      <div className="description_404">
        <div className="description_404__text">
          <h3>Looks like you're lost</h3>
          <p>The page you are looking for is not available!</p>
        </div>
        <div className="btn_404">
          <Link to="/" className="link_404">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
