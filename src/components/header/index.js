import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../../assets/data/data";
import { User } from "./User";
import "./style.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <User />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
