import React from "react";
import "./NavBar.css";
import BurgerIcons from "../../Assets/icon-menu.svg";
import CloseBtn from "../../Assets/icon-menu-close.svg"
import Logo from "../../Assets/logo.svg";
import $ from 'jquery'; 

const NavBar = () => {
  const Toggle = (el)=>{
    document.getElementById("SideBar").classList = "active"
    document.getElementsByClassName("UnOrderLists ")[0].classList = "UnOrderLists active"
   }
   const CloseBtnToggle=(el)=>{
    document.getElementById("SideBar").classList="Nonactive"
    document.getElementsByClassName("UnOrderLists ")[0].classList="UnOrderLists Nonactive"
  } 
  return (
    <header className="header" lang="navigation">
      <nav className="navBar">
        <img alt="" src={Logo} id="LogoImg" ></img>
        <img alt="" src={BurgerIcons} id="BurgerIconImg" onClick={Toggle} ></img>
        
        <div id="SideBar" className="Nonactive">
        <img alt="" src={CloseBtn} id="CloseBtn" onClick={CloseBtnToggle} ></img>

        <ul className="UnOrderLists Nonactive">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
        </div>
       
      </nav>
    </header>
  );
};

export default NavBar;
