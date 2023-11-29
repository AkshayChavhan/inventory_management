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
import ProtectedLayout from "./component/ProtectedLayout.jsx";
import { About, Contact, Home, Login, Signup } from "./component/index.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

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
      <Route
        path="/"
        element={
          <ProtectedLayout>
            <Home />{" "}
          </ProtectedLayout>
        }
      />
      <Route
        path="about"
        element={
          <ProtectedLayout>
            <About />{" "}
          </ProtectedLayout>
        }
      />
      <Route
        path="contact"
        element={
          <ProtectedLayout>
            <Contact />{" "}
          </ProtectedLayout>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
    </Provider>
  </React.StrictMode>
);
