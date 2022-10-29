
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Addproduct from './Component/Form/Addproduct/Addproduct';
import Adduser from './Component/Form/Adduser/Adduser';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home';
import useSupplier from './Hooks/Supplier/useSupplier';
import useBrand from './Hooks/Brand/useBrand';
import useProduct from './Hooks/Product/useProduct';
import useGroups from './Hooks/Groups/useGroups';
import Modal1 from './Component/Element/Modal1';
import Suppliermodal from './Component/Element/Suppliermodal';
import Brandmodal from './Component/Element/Brandmodal';
import Productmodal from './Component/Element/Productmodal';
import Productsmodal from './Component/Element/Productsmodal';
import Groupmodal from './Component/Element/Groupmodal';
import Addsr from './Component/Form/Addsr/Addsr';
import Allmanage from './Component/Inventry/Allmanage/Allmanage';
import useProducts from './Hooks/useProducts/useProducts';
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
import Footer from './Component/Footer/Footer';
import Testdata from './Component/Utilitis/Testdata';
import Login from './Component/Authorization/Login/Login';
import SignUp from './Component/Authorization/Signup/SignUp';
import Requireauth from './Component/Authorization/Shaired/Requireauth';
import toast, { Toaster } from 'react-hot-toast';
import Srlist from './Component/Pages/Srlist/Srlist';
import Account from './Component/Accounts/Account';
import RequireManager from './Component/Authorization/Shaired/RequireManager';
import Recept from './Component/Invoice/Recept/Recept';
function App() {
  const [Supplier, setSupplier] = useSupplier();
  const [Brand, setBrand] = useBrand();
  const [Product, setProduct] = useProduct();
  const [Groups, setGroups] = useGroups();
  const [Products, setProducts] = useProducts();
// atifsupermart20219922
// pass FG22zi4j6kRnYTIyP9
  return (
    <div className="App ">
    <Header ></Header>
    
    <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adduser" element={<Adduser></Adduser>} />
        <Route path="/addproduct" element={<Addproduct></Addproduct>} />
        <Route path="/addssr" element={<Addsr></Addsr>} />
        <Route path="/rpt" element={<Recept></Recept>} />
        <Route path="/Allmanage" element={<Allmanage></Allmanage>} />
        <Route path="/sizestyle" element={<SizeStyle></SizeStyle>} />
        <Route path="/sales2" element={<Sales></Sales>} />
        <Route path="/print" element={<Print></Print>} />
        <Route path="/print1" element={<Print1></Print1>} />
        <Route path="/Sales" element={<Requireauth><RequireManager><Sales2></Sales2></RequireManager></Requireauth>} />
        <Route path="/srlist" element={<Requireauth><Srlist></Srlist></Requireauth>} />
        <Route path="/damage" element={<Damage></Damage>} />
        <Route path="/Addsupplier" element={<Addsuppler></Addsuppler>} />
        <Route path="/damageq" element={<Requireauth><Updatedamage></Updatedamage></Requireauth>}/>
        <Route path="/Order" element={<Requireauth><RequireManager><Stockservice></Stockservice></RequireManager></Requireauth>}/>
        <Route path="/Test" element={<Testdata></Testdata>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/signup" element={<SignUp></SignUp>}/>
        <Route path="/accounts" element={<Account></Account>}/>
        <Route path="/rpt" element={<Recept></Recept>}/>
      </Routes>
    
    <Modal1></Modal1>
    <Suppliermodal></Suppliermodal>
    <Brandmodal/>
    <Groupmodal></Groupmodal>
    <Productmodal></Productmodal>
    <Productsmodal/>
    <SaleModal></SaleModal>
    <Toaster
    position='top-right'
    reverseOrder={true}  

    />
{/*     
    <h1> ATIF SUPER MART </h1>
    <a href="tel:+8801793496030">call</a>
    <a className='m-6' href={`tel:+${call}`}>call</a> */}

     {/* <Footer Supplier={Supplier} Brand={Brand} Groups={Groups} Product={Product} Products={Products}></Footer> */}
    </div>
  );
}
// yarn add @fontsource/libre-barcode-39 // npm install @fontsource/libre-barcode-39

export default App;
