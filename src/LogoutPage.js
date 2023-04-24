import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./App";

const LogoutPage = () => {
  const { dispatch } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    const calllogOutPage = async () => {
      try {
        const res = await fetch(
          "https://backend-ecom-uc6y.onrender.com/logout",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        dispatch({ type: "USER", payload: false });
        navigate("/login", { replace: true });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (error) {
        console.log(error);
      }
    };
    calllogOutPage();
  }, [dispatch, navigate]);
  return (
    <div>
      <h1>Logout Ka page</h1>
    </div>
  );
};

export default LogoutPage;
