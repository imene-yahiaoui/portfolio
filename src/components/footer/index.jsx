import "./style.min.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <h2> {t("footer")} </h2>
      <a href="/CookiesPolicy">{t("cookie")}</a>
   
    </div>
  );
};

export default Footer;
