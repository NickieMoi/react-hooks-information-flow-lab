import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

import Header from "./Header";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [items, setitems] = useState(itemData)
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />

      <Header isDark = {isDarkMode} onDarkModeClick = { handleDarkModeClick }/>
      <ShoppingList items={ items } />
    </div>
  );
}
export default App;