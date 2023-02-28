import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./constants/navbar/Navbar";
import Footer from "./constants/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import DashNavbar from "./constants/dash-navbar/DashNavbar";
import CreateOrder from "./pages/create-order/CreateOrder";
import DashFooter from "./constants/dash-footer/DashFooter";
import UploadFiles from "./pages/upload-files/UploadFiles";
import NewOrders from "./pages/new-orders/NewOrders";
import AddFunds from "./pages/addFunds/AddFunds";
import OrderInprogress from "./components/OrderInprogress";
import OrdersInProgress from "./pages/orders-in-progress/OrdersInProgress";
import ViewOrder from "./pages/view-order/ViewOrder";
import CompletedOrders from "./pages/completed-orders/CompletedOrders";
import CanceledOrders from "./pages/canceled-orders/CanceledOrders";
import Writers from "./pages/writers/Writers";
import Notifications from "./pages/notifications/Notifications";
import ContactSupport from "./pages/contact-support/ContactSupport";

function App() {
  const [count, setCount] = useState(0);
  const { currentUser } = useContext(AuthContext);

  // Create a client
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
          <Navbar />
          <DashNavbar />
          <Outlet />
          <div className="container">
            <DashFooter />
          </div>
        </main>
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
          path: "/create-order",
          element: <CreateOrder />,
        },
        {
          path: "/upload-file",
          element: <UploadFiles />,
        },
        {
          path: "/new-orders",
          element: <NewOrders />,
        },
        {
          path: "/add-funds",
          element: <AddFunds />,
        },
        {
          path: "/orders-in-progress",
          element: <OrdersInProgress />,
        },
        {
          path: "/view-order",
          element: <ViewOrder />,
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
          path: "/writers",
          element: <Writers />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/contact-support",
          element: <ContactSupport />,
        },
      ],
    },

    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
