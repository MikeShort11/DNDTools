import '../../App.css';
import CommonShopTable from "./CommonShop";
import MediumShopTable from "./MediumShop";
import RareShopTable from "./RareShop";



function ShopTables() {

  return (
    <>
      <div className="ShopTables" id="ShopTables">
        <CommonShopTable />
        <MediumShopTable />
        <RareShopTable />
      </div>
    </>
  )
}

export default ShopTables;

