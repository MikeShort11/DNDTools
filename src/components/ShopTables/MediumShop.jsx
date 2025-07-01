import React from "react";
import './shop.css'
import '../../index.css'



function MediumShopTable() {
  const items = {
    "Potion of Healing (Greater)": 100,
    "Alchemist's Fire (flask)": 50,
    "Scroll of Protection": 75,
    "Bag of Holding": 400,
    "Cloak of Elvenkind": 500,
    "Goggles of Night": 300,
    "Boots of Striding and Springing": 600,
    "Gloves of Thievery": 500,
    "Periapt of Wound Closure": 700,
    "Slippers of Spider Climbing": 800,
    "Thieves' Tools": 25,
    "Lantern (hooded)": 5,
    "Chain Shirt": 50,
    "Longsword (silvered)": 100,
    "Shield +1": 500
  };

  return (
    <div>
      <h2>Medium Rarity Shop Items</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price (gp)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([item, price]) => (
            <tr key={item}>
              <td id="item">{item}</td>
              <td id="price">{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MediumShopTable;



