import "./style.css";
import Intro from "../intro"
import logointro from "../../assets/images/logoIntro.png"
import { useTranslation } from "react-i18next";

const Accueil = () => {
  const { t } = useTranslation();
  return(

<div className="container accueil">
<Intro/>
<div className="container_logo">
<img  src={logointro} alt={t("logo_alt")}></img>
</div>
</div>

  ) 
};

export default Accueil;