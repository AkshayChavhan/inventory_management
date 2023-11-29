import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./component/Layout.jsx";
import { About, Contact, Home, Login , Signup } from "./component/index.js";



// // One way of routing
// const router = createBrowserRouter([
//   {
//     path:"/" ,
//     children:[
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ])

// // One way of routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/"
      element={<Layout ><Home /> </Layout>}
      />
      <Route path="about"
      element={<Layout ><About /> </Layout>}
      />
      <Route path="contact"
      element={<Layout ><Contact /> </Layout>}
      />
      <Route path="login"
      element={<Login /> }
      />
       <Route path="signup"
      element={<Signup /> }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
    </RouterProvider>
  </React.StrictMode>
);
