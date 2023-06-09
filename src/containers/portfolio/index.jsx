import "./style.min.css";
import PortfolioGrille from "../../components/portfolioGrille";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div id={t("portfolio_id")} className="portfoloi">
      <h1 className="title"> {t("portfolio_title")} </h1>
      <PortfolioGrille />
    </div>
  );
};

export default Portfolio;
