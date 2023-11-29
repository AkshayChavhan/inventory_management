import React from "react";
import { Link } from "react-router-dom";
import { FooterNavigation } from "../../utils/Navigation/HeaderNavigation";



function Footer() {

  return (
    <footer className="p-5 bg-[#a6a6a6]">
      {FooterNavigation.map((item) => {
        if (!item.show) {
          return;
        }
        return <Link key={item.name}><label className="p-5">{item.label}</label></Link>;
      })}
    </footer>
  );
}

export default Footer;
