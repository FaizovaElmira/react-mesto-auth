import headerLogo from "../images/logo.svg";
import { Link, Routes, Route } from "react-router-dom";

function Header({ email, onSignOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <Routes>
        <Route
          path="/"
          element={
            <div className="header__info">
              <p className="header__email">{email}</p>
              <button className="header__button" onClick={onSignOut}>
                Выйти
              </button>
            </div>
          }
        ></Route>
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
