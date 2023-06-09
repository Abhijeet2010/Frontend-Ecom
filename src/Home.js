import { useNavigate } from "react-router-dom";
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const callHomePage = async () => {
      try {
        const res = await fetch("https://backend-ecom-uc6y.onrender.com/", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
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
    callHomePage();
  }, [navigate]);

  const data = {
    name: "I Shop Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
