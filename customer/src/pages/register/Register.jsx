import React from "react";
import AuthFooter from "../../constants/auth-footer/AuthFooter";
import AuthNavbar from "../../constants/auth-navbar/AuthNavbar";
import RegisterMain from "./RegisterMain";

const Register = () => {
  return (
    <>
      <AuthNavbar />
      <RegisterMain />
      <AuthFooter />
    </>
  );
};

export default Register;
