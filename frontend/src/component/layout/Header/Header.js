import React from "react";
import { ReactNavbar } from "overlay-navbar";
//import WebFont from "webfontloader";
import "./Header.css";

const options = {
  burgerColorHover: "#eb4034",
  // logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Search",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",

  link1Url: "/search",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",

  link1Size: "1.3vmax",
  link1Color: "rgb(35, 35, 35)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",

  profileIconColor: "rgba(35, 35, 35,0.8)",
  //SearchIconElement: "",
  //searchIconColor: "white",
  cartIconColor: "white",
  profileIconColorHover: "#eb4034",
  // searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
