import React from "react";
import './shoptable.css'

function CommonShopTable() {
  const items = {
    "Rope (50 feet, hempen)": 1,
    "Torch": 0.01,
    "Rations (1 day)": 0.5,
    "Waterskin": 0.2,
    "Backpack": 2,
    "Healing Potion (Common)": 50,
    "Lantern (hooded)": 5,
    "Bedroll": 1,
    "Traveler's Clothes": 2,
    "Spellbook": 50,
    "Thieves' Tools": 25,
    "Shortsword": 10,
    "Longbow": 50,
    "Arrows (20)": 1,
    "Shield": 10,
    "Leather Armor": 10,
    "Chain Mail": 75,
    "Flask of Oil": 0.1,
    "Tinderbox": 0.5,
    "Crowbar": 2
  };

  return (
    <div>
      <h2>Common Shop Items</h2>
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
              <td>{item}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommonShopTable;

