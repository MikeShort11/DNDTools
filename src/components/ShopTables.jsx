import './App.css'
import CommonShopTable from "./shopTablesLocal/CommonShop";
import MediumShopTable from "./shopTablesLocal/MediumShop";
import RareShopTable from "./shopTablesLocal/RareShop";



function ShopTables() {

  return (
    <>
      <div class="ShopTables" id="ShopTables">
        <CommonShopTable />
        <MediumShopTable />
        <RareShopTable />
      </div>
    </>
  )
}

export default ShopTables();

