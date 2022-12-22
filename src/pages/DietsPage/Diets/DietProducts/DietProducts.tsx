import React from "react";
import "./DietProducts.scss";
import { Product } from "./Product/Product";
export const DietProducts: React.FC = () => {
  const productArray = [
    {
      src: "image/DietPage/Mask-group-Slim.png",
      alt: "diets-product",
      name: "Slim",
      button1: "1000 kcal",
      button2: "1300 kcal",
      button3: "1500 kcal",
      information:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: 57,
    },
    {
      src: "image/DietPage/Mask-group-Fit.png",
      alt: "diets-product",
      name: "Fit",
      button1: "1800 kcal",
      button2: "2000 kcal",
      button3: "2500 kcal",
      information:
        " Taque earum rerum hic tenetur a sapiente maioresa odio non, scelerisque...",
      price: 65,
    },
    {
      src: "image/DietPage/Mask-group-Vegan.png",
      alt: "diets-product",
      name: "Vegan",
      button1: "1300 kcal",
      button2: "1500 kcal",
      button3: "2000 kcal",
      information:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: 59,
    },

    {
      src: "image/DietPage/Mask-group-Keto.png",
      alt: "diets-product",
      name: "Keto",
      button1: "1300 kcal",
      button2: "1500 kcal",
      button3: "2000 kcal",
      information:
        " Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: 62,
    },
    {
      src: "image/DietPage/Mask-group-Gym.png",
      alt: "diets-product",
      name: "Gym",
      button1: "2000 kcal",
      button2: "2500 kcal",
      button3: "3000 kcal",
      information:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: 68,
    },
    {
      src: "image/DietPage/Mask-group-Office-box.png",
      alt: "diets-product",
      name: "Office box",
      button1: "1200 kcal",
      button2: "1500 kcal",
      button3: "1800 kcal",
      information:
        "Taque earum rerum hic tenetur a sapiente maiores lacus enim, porta id tincidunt...",
      price: 50,
    },
    {
      src: "image/DietPage/Mask-group-For-moms.png",
      alt: "diets-product",
      name: "Office box",
      button1: "1800 kcal",
      button2: "2000 kcal",
      button3: "2500 kcal",
      information:
        " Taque earum rerum hic tenetur a sapiente maiores alias consequatur sapien id nisl fringilla, quis dignissim nibh...",
      price: 63,
    },
    {
      src: "image/DietPage/Mask-group-Low-IG.png",
      alt: "diets-product",
      name: "Low IG",
      button1: "1500 kcal",
      button2: "1800 kcal",
      button3: "2000 kcal",
      information:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores semper fringilla...",
      price: 58,
    },
  ];

  return (
    <div className="diet-products">
      {productArray.map((productItem, index) => (
        <React.Fragment key={index}>
          <Product
            name={productItem.name}
            button1={productItem.button1}
            button2={productItem.button2}
            button3={productItem.button3}
            information={productItem.information}
            price={productItem.price}
          ></Product>
        </React.Fragment>
      ))}
    </div>
  );
};
