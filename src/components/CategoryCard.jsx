import React from "react";
import "./../App.css";
import Inspiration from "../assets/inspiration.png";
import Art from "../assets/art.png";
import Management from "../assets/management.png";
import Love from "../assets/love.png";
import Life from "../assets/life.png";
import Sports from "../assets/sports.png";
import Funny from "../assets/funny.png";
import Students from "../assets/students.png";

const CATEGORY_IMG_CONFIG = {
  inspire: Inspiration,
  management: Management,
  sports: Sports,
  life: Life,
  funny: Funny,
  love: Love,
  art: Art,
  students: Students,
};

export default function CategoryCard({
  category,
  categoryTitle,
  onMouseEnter,
}) {
  return (
    <div
      className="category"
      id={category}
      onMouseEnter={() => onMouseEnter(category)}
    >
      {categoryTitle}
      <div className="category-image-container">
        <img src={CATEGORY_IMG_CONFIG[category]} alt={category} />
      </div>
    </div>
  );
}
