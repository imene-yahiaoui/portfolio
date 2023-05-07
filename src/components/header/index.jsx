/* eslint-disable react/style-prop-object */
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";
import "./style.css";
import useMediaQuery from "../../helpers/MediaQuery";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import DarkMode from "../darkMode";
const Header = () => {
  const matches = useMediaQuery("(max-width:767px)");
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleToggleMenux = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}
      className="header"
      id={t("home_path")}
    >
      <div className="navbar">
        <nav
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
          className="container"
        >
          <div className="logo">
            <Link to="/">
              <img src={logo} alt={t("logo_alt")} />
            </Link>
          </div>

          {!matches ? (
            <div className="nav-elements">
              <ul>
                <li className="nav_list">
                  <a href={t("home_path")}>{t("home_title")}</a>
                </li>
                <li className="nav_list">
                  <a href={t("skills_path")}>{t("skills_title")}</a>
                </li>
                <li className="nav_list">
                  <a href={t("portfolio_path")}>{t("portfolio_title")}</a>
                </li>
                <li className="nav_list">
                  <a href={t("contact_path")}>{t("contact_title")}</a>
                </li>
                <li>
                  <DarkMode />
                </li>
                <li>
                  <select
                    className="btn_lang"
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                    value={lang} // Ajouter cet attribut value
                  >
                    <option value="fr">fr</option>
                    <option value="en">en</option>
                    <option value="ar">ar</option>
                  </select>
                </li>
              </ul>
            </div>
          ) : (
            //show if it's mobil
            <div className="navbar-header">
              <div className="navbar-icon">
                {!showMenu ? (
                  <button for="open" onClick={handleToggleMenu}>
                    <FaBars />
                  </button>
                ) : (
                  <button for="close" onClick={handleToggleMenux}>
                    <FaTimes />
                  </button>
                )}
              </div>
              <div className={`navbar-menu${showMenu ? " active" : ""}`}>
                <ul className="nav-menu titles">
                  <li className="nav_list">
                    <a href={t("home_path")}>{t("home_title")}</a>
                  </li>
                  <li className="nav_list">
                    <a href={t("skills_path")}>{t("skills_title")}</a>
                  </li>
                  <li className="nav_list">
                    <a href={t("portfolio_path")}>{t("portfolio_title")}</a>
                  </li>
                  <li className="nav_list">
                    <a href={t("contact_path")}>{t("contact_title")}</a>
                  </li>
                  <li>
                    <DarkMode />
                  </li>
                  <li>
                    <select
                      className="btn_lang"
                      onChange={(e) => i18n.changeLanguage(e.target.value)}
                      value={lang} // Ajouter cet attribut value
                    >
                      <option value="fr">fr</option>
                      <option value="en">en</option>
                      <option value="ar">ar</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
