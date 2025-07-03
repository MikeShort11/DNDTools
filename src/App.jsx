import ShopTables from "./components/ShopTables/index";
import InitiativeTracker from "./components/InitiativeTracker/index"

import './App.css';


function App() {

  return (
    <>
      <div className="ShopTables" id="ShopTables">
        <ShopTables />
      </div>
      <div>
        <InitiativeTracker />
      </div>
    </>
  )
}

export default App;
