import React, { useState, useEffect, useCallback } from "react";
import Quote from "./components/QuoteCard";
import CategoryCard from "./components/CategoryCard";
import "./App.css";

function App() {
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://quotes.rest/qod/categories?language=en&detailed=false"
      )
        .then((response) => response.json())
        .catch(() => console.log("error"));
      setCategories(response?.contents?.categories);
    };
    fetchCategories();
  }, []);

  const handleCategoryHover = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  return (
    <div className="main">
      <header className="header">Quote of the day</header>
      <div className="body">
        {categories &&
          Object.keys(categories).map((key, index) => (
            <div className="card-wrapper">
              <div className="card-container">
                <CategoryCard
                  key={index}
                  category={key}
                  categoryTitle={categories[key]}
                  onMouseEnter={handleCategoryHover}
                />
                {selectedCategory && (
                  <Quote selectedCategory={selectedCategory} category={key} />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
