import React from "react";
import { Footer, Header } from "./index";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { HeaderNavigation } from "../utils/Navigation/HeaderNavigation";
import "../Navbar.css";
import { useSelector } from "react-redux";



function ProtectedLayout({ children }) {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated=> , ",isAuthenticated);
  if (!isAuthenticated) {
    return navigate("/login");
  }

  return (
    <main
      className="flex flex-col justify-between"
      style={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <div className="h-[100vh]">
        <div className="bg-green-500 lg:w-full h-full">{children}</div>
      </div>
      <Footer />
    </main>
  );
}

export default ProtectedLayout;
