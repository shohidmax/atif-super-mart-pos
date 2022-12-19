import React, { useRef, useState } from "react";
import useBrand from "../../../Hooks/Brand/useBrand";
import useProducts from "../../../Hooks/useProducts/useProducts";
import img from './copy.png';

const Allmanage = () => {
  const [Brand, setBrand] = useBrand();
  const [Products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');


  };

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://atifsupermart.onrender.com//brand/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = Brand.filter((data) => data._id !== id);
            setBrand(remaining);
          }
        });
    }
  };

  const searchBar = async (e) => {
    const searchbar2 = e.target.value.toUpperCase();
    if (searchbar2) {
      let result = await fetch(`https://atifsupermart.onrender.com/search/${searchbar2}`);
      result = await result.json();
      console.log(result);
      if (result)
        setProducts(result);
        // console.log();
    } else {
    }
    console.log(searchbar2.toUpperCase());
  };

  const r = {
    _id: "633f4e807784639f332e3e80",
    Supplier_Name: "NESTLE BANGLADESH",
    BarCode: 8941100294604,
    Group: "BABY FOOD & CARE",
    Product: "MILK",
    Brand: "NESTLE",
    Style: "LACTOGEN 3 180GM",
    Stock_Qty: 0,
    StockQty: 2,
    CPU: 254,
    CPU_Value: 0,
    RPU: 265,
    RPU_Value: 0,
    Damage_Quntity: 0,
    Comment: 0,
    Status: "active",
  };

          // --------------------------------------------------------------------------------------------------
        // add to clip text
        // const [copySuccess, setCopySuccess] = useState('');

        const copyToClipBoard = async copyMe => {
            try {
              await navigator.clipboard.writeText(copyMe);
              setCopySuccess('Copied!');
            } catch (err) {
              setCopySuccess('Failed to copy!');
            }
        };


  return (
    <div>
      <div>
        <h1>All Product searched {search.length}</h1>
        <button onClick={copyToClipboard}>Copy</button> 
        <div>
          <input
            onChange={searchBar}
            name="loger"
            className="input border-2 input-bordered bg-red-100"
            type="text"
            placeholder="Barcode Hear"
          />
          <button class="btn btn-square border-2  mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-6" fill="none" viewBox="0 0 20 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
        </div>
      </div>
      <div class="divider divider-horizontal">OR</div>
      <div>
            <div>
            <div class="overflow-x-auto">
          <table ref={textAreaRef} class="table table-compact w-full ">
            <thead>
              <tr>
                <th>SN</th>
                <td>BarCode</td>
                <td>Group Name</td>
                <td>Product Name</td>
                <td>Brand Name</td>
                <td>Style Size</td>
                <td>CPU</td>
                <td>RPU</td>
                <td>Supplier</td>
                <td>Status</td>
                <td>Is Weighting</td>
                <td>Damage_Quntity</td>
              </tr>
            </thead>
            <tbody className="snap">
             {
                Products.map((r, index) => <tr class="hover">
                <th>{index + 1}</th>
                <td >{r.BarCode} <button className="btn-outline  hover:bg-transparent hover:rounded-full hover:animate-bounce hover::scale-110 transition duration-100 ease-in-out	 btn-xs" onClick={() => copyToClipBoard(r.BarCode)}><img style={{'width': '20px', 'height': 'auto'}} className='m-1' src={img} alt="" /></button> </td>
                <td>{r.Group}</td>
                <td>{r.Product}</td>
                <td>{r.Brand}</td>
                <td>{r.Style}</td>
                <td>{r.CPU}</td>
                <td>{r.RPU}</td>
                <td>{r.Supplier_Name}</td>
                <td>{r.Status}</td>
                <td>Is Weighting</td>
                <td>Damage_Quntity</td>
                               
              </tr>
                )
             }
            </tbody>
          </table>
        </div>
            </div>
      </div>
    </div>
  );
};

export default Allmanage;

// <ul>

// {
//     Brand.map(res =>
//         <li className=' p-2 m-2 text-3xl text-bold text-primary'>{res.Brand_Type_Name}<button className="btn p-2 m-2 btn-danger circle" onClick={() => handleUserDelete(res._id)}>X</button></li>

//         )
// }

// </ul>
