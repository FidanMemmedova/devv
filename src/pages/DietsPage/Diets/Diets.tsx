import "./Diets.scss";
import { DietProducts } from "./DietProducts/DietProducts";
import { DietsRecommendation } from "./DietsRecommendation/DietsRecommendation";

export const Diets: React.FC = () => {
  return (
    <div className="diets">
      <h2>Diets</h2>
   < DietProducts></DietProducts>
   <DietsRecommendation></DietsRecommendation>
    </div>
  );
};
