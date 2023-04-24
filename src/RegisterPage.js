import { useNavigate } from "react-router-dom";
import { Button } from "./styles/Button";
import { useState } from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(
        "https://backend-ecom-uc6y.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
      const data = await res.json();
      console.log(data);

      if (res.status === 400 || !data) {
        alert("registation failed");
      } else {
        alert("registraion success");
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="registerPage">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="enter username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br /> <br />
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
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
