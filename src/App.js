import { useEffect } from 'react';

import './App.css';
import { Routes, Route } from "react-router-dom";
import Addproduct from './Component/Form/Addproduct/Addproduct';
import Adduser from './Component/Form/Adduser/Adduser';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home'; 
import Suppliermodal from './Component/Element/Suppliermodal';
import Brandmodal from './Component/Element/Brandmodal';
import Productmodal from './Component/Element/Productmodal';
import Productsmodal from './Component/Element/Productsmodal';
import Groupmodal from './Component/Element/Groupmodal';
import Addsr from './Component/Form/Addsr/Addsr';
import Allmanage from './Component/Inventry/Allmanage/Allmanage'; 
import SizeStyle from './Component/Pages/SizeStyle/SizeStyle';
import Sales from './Component/Inventry/Sales/Sales';
import SaleModal from './Component/Element/SaleModal';
import Print from './Component/Print/Print';
import Print1 from './Component/Print/Print1';
import Sales2 from './Component/Pages/Sales2/Sales2';
import Damage from './Component/Damage/Damage';
import Addsuppler from './Component/Form/Addsuppler/Addsuppler';
import Updatedamage from './Component/Inventry/Updatedamage/Updatedamage';
import Stockservice from './Component/Inventry/Stockservice/Stockservice';
import Testdata from './Component/Utilitis/Testdata';
import Login from './Component/Authorization/Login/Login';
import SignUp from './Component/Authorization/Signup/SignUp';
import Requireauth from './Component/Authorization/Shaired/Requireauth';
import { Toaster } from 'react-hot-toast';
import Srlist from './Component/Pages/Srlist/Srlist';
import Account from './Component/Accounts/Account';
import RequireManager from './Component/Authorization/Shaired/RequireManager';
import Recept from './Component/Invoice/Recept/Recept';
import Inputs from './Inputs/Inputs';
import Qr from './Component/Utilitis/Qr';
import Salesreportq from './Component/Invoice/Report/Salesreportq';
import BarCode from './Component/Invoice/BarCode/BarCode';
import SalesReport from './Component/Invoice/SalesReport/SalesReport';
import POS from './Component/Pages/POS/POS';
import Search from './Ecommarce/Search/Search';
import Dashboard from './Component/Pages/Dashboard/Dashboard';
import DashboardProfile from './Component/Pages/DashboardProfile/DashboardProfile';
import Notfound from './Component/Pages/Notfound/Notfound';
import Preceve from './Component/Inventry/Preceve/Preceve';
import Testdata2 from './Component/TestData/Testdata2';
import Shopreceve from './Component/Inventry/Shopreceve/Shopreceve';
import Calculator from './Component/Footer/Calculator';
import DailyCost from './Component/Accounts/DailyCost/DailyCost';
import SaleseList from './Component/Accounts/DailyCost/SaleseList';
import DataPdf from './Component/Accounts/DailyCost/DataPdf';
import A4pdf from './Component/Accounts/DailyCost/A4pdf';
import Kitkat from './Component/Invoice/BarCode/Kitkat';
import Avatar from './Component/Pages/Dashboard/Avatar'; 
import SnakeGame from './Component/Game/SnakeGame';
function App() {
  // atifsupermart20219922
  // pass FG22zi4j6kRnYTIyP9
  useEffect(() => {
    const q = document.addEventListener('knpeydown', detectKeydown, true)
    console.log(q);
  }, []);

  const detectKeydown = (e) => {
    console.log(e.key, 'clicked E Text');
  }
 
  
  return (
   

    <div className="App ">
      <Header ></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/adduser" element={<Adduser></Adduser>} />
        <Route path="/cal" element={<Calculator/>} />
        <Route path="/addproduct" element={<Addproduct></Addproduct>} />
        <Route path="/addssr" element={<Addsr></Addsr>} />
        <Route path="/rpt" element={<Recept></Recept>} />
        <Route path="/Allmanage" element={<Allmanage></Allmanage>} />
        <Route path="/sizestyle" element={<SizeStyle></SizeStyle>} />
        <Route path="/sales2" element={<Sales></Sales>} />
        <Route path="/print" element={<Print></Print>} />
        <Route path="/print1" element={<Print1></Print1>} />
        <Route path="/Sales" element={<Requireauth><Sales2></Sales2></Requireauth>} />
        <Route path="/srlist" element={<Requireauth><Srlist></Srlist></Requireauth>} />
        <Route path="/damage" element={<Damage></Damage>} />
        <Route path="/Addsupplier" element={<Addsuppler></Addsuppler>} />
        <Route path="/damageq" element={<Requireauth><Updatedamage></Updatedamage></Requireauth>} />
        <Route path="/Order" element={<Requireauth><RequireManager><Stockservice></Stockservice></RequireManager></Requireauth>} />
        <Route path="/Test" element={<Testdata></Testdata>} />
        <Route path="/test2" element={<Testdata2></Testdata2>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/accounts" element={<Account></Account>} />
        <Route path="/rpt" element={<Recept></Recept>} />
        <Route path="/inputs" element={<Inputs></Inputs>} />
        <Route path="/bar" element={<Salesreportq></Salesreportq>} />
        <Route path="/sr" element={<SalesReport></SalesReport>} />
        <Route path="/search" element={<Search></Search>} />
        <Route path="/pr" element={<Preceve></Preceve>} />
        <Route path="/hisab" element={<Requireauth><DailyCost></DailyCost> </Requireauth>} />
        <Route path="/snake" element={<SnakeGame/>} />
        <Route path="/salereport" element={<SalesReport></SalesReport>} />
        <Route path="/receve" element={<Shopreceve/>} />
        <Route path="/pdf" element={<DataPdf/>} />
        <Route path="/kitkat" element={<Kitkat></Kitkat>} />
        <Route path="/pdf2/:id" element={<A4pdf/>} />
        <Route path="/hisabkhata" element={<Requireauth> <SaleseList/> </Requireauth>} />
        <Route path="/dashboard" element={<Dashboard />}> 
          <Route index element={<DashboardProfile/>}></Route>
          <Route path="/dashboard/addsr" element={<Sales2></Sales2>}></Route>
          <Route path="/dashboard/qr" element={<Qr></Qr>} />
          <Route path="/dashboard/barcode" element={<BarCode></BarCode>} />
          <Route path="/dashboard/rpt" element={<Recept></Recept>} />
          <Route path="/dashboard/avatar" element={<Avatar></Avatar>} />
          <Route path="/dashboard/srlist" element={<Requireauth><Srlist></Srlist></Requireauth>} />
        </Route>
        <Route path='*' element={<Notfound></Notfound>}>not found</Route>
        {/* <Route path="/wpdate:id" element={<Modal1></Modal1>}/> */}
        {/* <Route path="/sr" element={}/> */}
      </Routes>


      <Suppliermodal></Suppliermodal>
      <Brandmodal />
      <Groupmodal></Groupmodal>
      <Productmodal></Productmodal>
      <Productsmodal />
      <SaleModal></SaleModal>
      <Toaster position='top-right' reverseOrder={true} />
      {/*     
    <h1>ATIF SUPER MART </h1>
    <a href="tel:+8801793496030">call</a>
    <a className='m-6' href={`tel:+${call}`}>call</a> */}
    <div>
    
    </div> 

      {/* <Footer Supplier={Supplier} Brand={Brand} Groups={Groups} Product={Product} Products={Products}></Footer> */}
    </div>
  );
};

export default App;
