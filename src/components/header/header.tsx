import { Link } from "../../shared/link/Link";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import preview from "../../assets/Video-Preview.png";
import "./header.scss";
import { Button } from "../../shared/button/Button";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__main-container">
        <div className="header__wrapper">
          <img className="header__logo" src={logo} alt="Purple School" />
          <nav className="header__menu">
            <Link active title="Курсы" />
            <Link title="О школе" />
            <Link title="Блог" />
            <Link title="База знаний" />
          </nav>
          <button type="button" className="header__login">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="9.5"
                r="3"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <circle
                cx="12"
                cy="12.5"
                r="10"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M17.9691 20.5C17.81 17.6085 16.9247 15.5 11.9999 15.5C7.07521 15.5 6.18991 17.6085 6.03076 20.5"
                stroke="currentColor"
                currentColorstroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span>Вход</span>
          </button>
          <button type="button" className="header__login-media">
            <img src={menu} alt="" />
          </button>
        </div>
        <div className="header__container">
          <div className="header__info">
            <h1>
              Доступные курсы по <br /> <span>Разработке и DevOps</span>
            </h1>
            <div className="header__info-buttons">
              <Button title="Выбрать курс" status />
              <Button title="О школе" />
            </div>
          </div>
          <div className="header__preview">
            <img src={preview} alt="Превью" />
          </div>
        </div>
      </div>
    </header>
  );
};
