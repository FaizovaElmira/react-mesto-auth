import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/sign-in");
  }

  return (
    <div className="auth">
      <h2 className="auth__subtitle">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          required
          name="email"
          type="email"
          value={formValue.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="auth__input"
          required
          name="password"
          type="password"
          value={formValue.password}
          placeholder="Пароль"
          onChange={handleChange}
        />
        <button className="auth__button-submit" type="submit">
          Зарегистрироваться
        </button>
        <Link className="auth__signin-link" to="/sign-in">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;