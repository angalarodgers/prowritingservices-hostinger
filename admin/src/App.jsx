import { useState, useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthContext } from "./context/authContext";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Orders from "./pages/orders/Orders";
import Landing from "./pages/landing/Landing";
import AssignWriter from "./pages/assignWriter/AssignWriter";
import Main from "./pages/main/Main";

function App() {
  const { currentUser } = useContext(AuthContext);

  // Create a client
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <>
          <Topbar />

          <Outlet />
          <Footer />
        </>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/assign-writer",
          element: <AssignWriter />,
        },
        {
          path: "/main",
          element: <Main />,
        },
      ],
    },
    {
      path: "/",
      element: <Landing />,
    },

    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
