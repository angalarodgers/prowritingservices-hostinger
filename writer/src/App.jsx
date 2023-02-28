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
import ViewOrder from "./pages/view-order/ViewOrder";
import ActiveOrders from "./pages/active-orders/ActiveOrders";
import CompletedOrders from "./pages/completed-orders/CompletedOrders";
import CanceledOrders from "./pages/canceled-orders/CanceledOrders";
import Messages from "./pages/messages/Messages";
import Compose from "./pages/messages/Compose";

function App() {
  const { currentUser } = useContext(AuthContext);

  // Create a client
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <>
          <Topbar />
          <br />
          <Outlet />
          <Footer />
        </>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
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
          path: "/view-order",
          element: <ViewOrder />,
        },
        {
          path: "/active-orders",
          element: <ActiveOrders />,
        },
        {
          path: "/completed-orders",
          element: <CompletedOrders />,
        },
        {
          path: "/canceled-orders",
          element: <CanceledOrders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/compose-messages",
          element: <Compose />,
        },
      ],
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
