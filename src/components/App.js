import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import "../index.css"
function App() {
  function handleClickDarkMode() {
    setAppClass(!appClass)
  }
  const [appClass, setAppClass] = useState(false)

  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClickDarkMode}  >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
