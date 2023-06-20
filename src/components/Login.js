import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "../utils/auth";

const Login = ({ handleLogin, setEmail, setToolTipPopupOpen }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    auth
      .authorize(formValue.password, formValue.email)
      .then((res) => {
        localStorage.setItem("token", res.token);
        handleLogin();
        navigate("/");
      })
      .catch((err) => {
        setEmail(false);
        setToolTipPopupOpen(true);
      });
  };

  return (
    <div className="auth">
      <h2 className="auth__subtitle">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          required
          name="email"
          type="email"
          value={formValue.email}
          placeholder="Email"
          onChange={handleChange}
          autoComplete="current-password"
        />
        <input
          className="auth__input"
          required
          name="password"
          type="password"
          value={formValue.password}
          placeholder="Пароль"
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button className="auth__button-submit" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
