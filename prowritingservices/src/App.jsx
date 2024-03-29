import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./constants/Navbar";
import Footer from "./constants/Footer";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import OrderInit from "./constants/OrderInit";
import WriteMyEssay from "./components/WriteMyEssay";
import WriteMyResearchProposal from "./components/WriteMyResearchProposal";
import WriteMyResearchPaper from "./components/WriteMyResearchPaper";
import WriteMyCaseStudy from "./components/WriteMyCaseStudy";
import Thesis from "./components/Thesis";
import LabReport from "./components/LabReport";
import LiteratureReview from "./components/LiteratureReview";
import OpinionArticle from "./components/OpinionArticle";
import ArticleReview from "./components/ArticleReview";
import HowItWorks from "./constants/HowItWorks";
import WhyChooseUs from "./constants/WhyChooseUs";
import Pricing from "./constants/Pricing";
import Faq from "./pages/faq/Faq";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <header className="bg-gradient-dark"></header>
        <div
          className="card card-body shadow-xl mx-3 mx-md-4 mt-3"
          style={{ backgroundColor: "#D8E8F2" }}
        >
          {/* Section with four info areas left & one card right with image and waves */}
          <section className="py-7">
            <div className="container">
              <div className="row align-items-center">
                <Outlet />
                <OrderInit />
              </div>
            </div>
          </section>
          <HowItWorks />
          <WhyChooseUs />
          <Pricing />
        </div>

        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/writer-my-essay",
          element: <WriteMyEssay />,
        },
        {
          path: "/writer-my-research-proposal",
          element: <WriteMyResearchProposal />,
        },
        {
          path: "/writer-my-research-paper",
          element: <WriteMyResearchPaper />,
        },
        {
          path: "/writer-my-case-study",
          element: <WriteMyCaseStudy />,
        },
        {
          path: "/writer-my-thesis-dissertation",
          element: <Thesis />,
        },
        {
          path: "/writer-my-lab-report",
          element: <LabReport />,
        },
        {
          path: "/writer-my-literature-review",
          element: <LiteratureReview />,
        },
        {
          path: "/writer-my-opinion-article",
          element: <OpinionArticle />,
        },
        {
          path: "/writer-my-article-review",
          element: <ArticleReview />,
        },
      ],
    },

    {
      path: "/about-us",
      element: <About />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
  ]);

  return (
    <div className="App">
      {" "}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
