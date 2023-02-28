import React from "react";
import AuthFooter from "../../constants/auth-footer/AuthFooter";
import AuthNavbar from "../../constants/auth-navbar/AuthNavbar";
import LoginMain from "./LoginMain";

const Login = () => {
  return (
    <>
      <AuthNavbar />
      <LoginMain />
      <AuthFooter />
    </>
  );
};

export default Login;
