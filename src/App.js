import Navbar from "./components/Navbar";
import "./styling/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Welcome from "./pages/Welcome";
import Data from "./pages/Data";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import facade from "./apiFacade";
// import jwt_decode from "jwt-decode";

function App() {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [loggedIn, setLoggedIn] = useState(false);

  // const Login = ({ loggedIn, setLoggedIn, setRole, setUsername }) => {
  //   const init = { username: "", password: "" };
  //   const [loginCredentials, setLoginCredentials] = useState(init);

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  // const login = (user, pass) => {
  //   facade.login(user, pass, setRole).then((res) => {
  //     setLoggedIn(true);
  //     setUsername(user);
  //     let token = facade.getToken();
  //     let decoded = jwt_decode(token);
  //     setRole(decoded.roles);

  //     navigate("/");
  //   });
  // };

  // const navigate = useNavigate();

  return (
    <div className="App">
      <Router basename="/sem3ca2">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/data" element={<Data />} />
          <Route
            path="/login"
            element={
              <Login
                performLogin={performLogin}
                onChange={onChange}
                loggedIn={loggedIn}
                performLogout={logout}
                username={loginCredentials.username}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
