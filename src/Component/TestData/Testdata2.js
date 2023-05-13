import { useState } from "react";
import LoadVlogs from "../Utilitis/LoadVlogs";
import LoadingSpin from "../Utilitis/LoadingSpin/LoadingSpin";


function Testdata2() {
  const [sata, setSata] = useState([]);

    const dataH = {
    "_id": "642bc96865c00c04f0c60dc6",
    "Hold_ID": "mbo445325",
    "Hold_attendent": "pre mbo",
    "Hold_quntity": 1,
    "Hold_items": 1,
    "Hold_Amound": 25,
    "Hold_data": [
        {
            "_id": "633f4e807784639f332e3a8e",
            "Supplier_Name": "COCACOLA BANGLADESH",
            "BarCode": 8907525000114,
            "Group": "DRINKS & BEVERAGES",
            "Product": "SOFT DRINKS",
            "Brand": "COCACOLA",
            "Style": "COCACOLA 250ML",
            "Stock_Qty": 0,
            "StockQty": 26,
            "CPU": 21.91,
            "CPU_Value": 0,
            "RPU": 25,
            "RPU_Value": 0,
            "Damage_Quntity": 3,
            "Comment": 0,
            "Status": "active",
            "orderq": 6
        }
    ]
};
    const dataS = [
      {
          "_id": "633f4e807784639f332e3877",
          "Supplier_Name": "ACI LTD.",
          "BarCode": 8139003002505,
          "Group": "NOODLES & PASTA",
          "Product": "NOODLES",
          "Brand": "ACI",
          "Style": "THAI NOODLES 150GM",
          "Stock_Qty": 0,
          "StockQty": 10,
          "CPU": 31.04,
          "CPU_Value": 0,
          "RPU": 40,
          "RPU_Value": 0,
          "Damage_Quntity": 1,
          "Comment": 0,
          "Status": "active",
          "orderq": 1
      },
      {
          "_id": "633f4e807784639f332e3a02",
          "Supplier_Name": "BASHUNDHARA GROUP LTD",
          "BarCode": 8941193006054,
          "Group": "NOODLES & PASTA",
          "Product": "PASTA",
          "Brand": "BASHUNDHARA",
          "Style": "MACARONI MIX 400GM",
          "Stock_Qty": 0,
          "StockQty": 3,
          "CPU": 43.55,
          "CPU_Value": 0,
          "RPU": 60,
          "RPU_Value": 0,
          "Damage_Quntity": 0,
          "Comment": 0,
          "Status": "active",
          "orderq": 1
      },
      {
          "_id": "633f4e807784639f332e39d8",
          "Supplier_Name": "ATIF SUPER MART",
          "BarCode": 6928343080289,
          "Group": "TOILETRIES",
          "Product": "TOOTH BRUSH",
          "Brand": "LMKANG",
          "Style": "LMLANE TOOTHBRUSH",
          "Stock_Qty": 0,
          "StockQty": 5,
          "CPU": 25,
          "CPU_Value": 0,
          "RPU": 40,
          "RPU_Value": 0,
          "Damage_Quntity": 0,
          "Comment": 0,
          "Status": "active",
          "orderq": 1
      },
      {
          "_id": "633f4e807784639f332e3976",
          "Supplier_Name": "ATIF SUPER MART",
          "BarCode": 8859561500205,
          "Group": "BABY FOOD & CARE",
          "Product": "BABY CARE",
          "Brand": "ALPHA BABY",
          "Style": "SILICONE FINGER TOOTHBRUSH",
          "Stock_Qty": 0,
          "StockQty": 6,
          "CPU": 100,
          "CPU_Value": 0,
          "RPU": 120,
          "RPU_Value": 0,
          "Damage_Quntity": 0,
          "Comment": 0,
          "Status": "active",
          "orderq": 1
      },
      {
        "_id": "633f4e807784639f332e3a8e",
        "Supplier_Name": "COCACOLA BANGLADESH",
        "BarCode": 8907525000114,
        "Group": "DRINKS & BEVERAGES",
        "Product": "SOFT DRINKS",
        "Brand": "COCACOLA",
        "Style": "COCACOLA 250ML",
        "Stock_Qty": 0,
        "StockQty": 26,
        "CPU": 21.91,
        "CPU_Value": 0,
        "RPU": 25,
        "RPU_Value": 0,
        "Damage_Quntity": 3,
        "Comment": 0,
        "Status": "active",
        "orderq": 1
    }
  ]
  const handleConvert = (a, b) =>{
    console.log('bangladesh', a, b);
    const holdData = a.Hold_data;
    console.log(holdData);
  }
  return (
    <div className="App">
    <LoadVlogs/>
    <LoadingSpin></LoadingSpin> 
      <h1>{sata}..........</h1>
      <button className="btn btn-primary" onClick={() => handleConvert(dataH, dataS)}>slip</button>
    </div>
  );
}

export default Testdata2;

