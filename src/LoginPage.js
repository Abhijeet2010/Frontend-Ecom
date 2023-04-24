import { useNavigate } from "react-router-dom";
import { Button } from "./styles/Button";
import { useContext, useState } from "react";
import { userContext } from "./App";
import { useDispatch } from "react-redux";
import { login } from "./Slices/authSlice";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(userContext);

  const rtkDispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://backend-ecom-uc6y.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
        withCredentials: true,
      });
      const data = await res.json();
      console.log(data);

      if (res.status === 400) {
        alert("invalid credentials");
      } else {
        dispatch({ type: "USER", payload: true });
        alert("login successfull, welcome");
        setEmail("");
        setPassword("");
        navigate("/");
        rtkDispatch(login(data.username));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="loginPage">
      <form className="" method="POST" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          className="input"
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <br />
        <Button className="btnnn" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
