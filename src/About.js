import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import Trusted from "./components/Trusted";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const callAboutPage = async () => {
      try {
        const res = await fetch(
          "https://backend-ecom-uc6y.onrender.com/about",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await res.json();
        console.log(data);
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (error) {
        console.log(error.message);
        navigate("/login");
      }
    };

    callAboutPage();
  }, [navigate]);

  const { myName } = useProductContext();

  const data = {
    name: "IShop Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />

      <Trusted />
    </>
  );
};

export default About;
