import { useState } from "react";
import "./App.css";
import { createBrowserRouter, HashRouter } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Blog from "./Blog";
import FAQ from "./FAQ";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
]);

function App() {
  return (
    <main>
      <HashRouter router={router}></HashRouter>
    </main>
  );
}

export default App;
