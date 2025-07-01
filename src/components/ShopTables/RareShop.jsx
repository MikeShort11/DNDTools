import React from "react";
import './shop.css'
import '../../index.css'



function RareShopTable() {
  const items = {
    "Potion of Superior Healing": 450,
    "Ring of Protection": 2000,
    "Amulet of Health": 4000,
    "Flame Tongue (sword)": 5000,
    "Wand of Fireballs": 6000,
    "Armor +2": 7000,
    "Cloak of Displacement": 5500,
    "Rod of the Pact Keeper +2": 5000,
    "Boots of Speed": 4000,
    "Bracers of Defense": 3500,
    "Portable Hole": 8000,
    "Ring of Evasion": 7500
  };

  return (
    <div>
      <h2>Rare Shop Items</h2>
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

export default RareShopTable;

