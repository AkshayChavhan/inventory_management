import React ,  { useEffect } from "react";
import { Footer, Header } from "./index";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { HeaderNavigation } from "../utils/Navigation/HeaderNavigation";
import "../Navbar.css";
import { useSelector , useDispatch } from "react-redux";

// ProtectedLayout.js
import { fetchUserDetailsAsync } from './handle';  // Adjust the path



function ProtectedLayout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (isAuthenticated && username) {
        const result = await fetchUserDetailsAsync(username);
        dispatch(result);
      }
    };

    fetchUserDetails();
  }, [dispatch, isAuthenticated, username]);

  if (!isAuthenticated) {
    return navigate('/login');
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
