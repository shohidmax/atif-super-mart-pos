import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const SalesReport = () => {
  const [salese, setSales] = useState([]);

// load all data from database
  const load = () => {
      const url = 'https://atifsupermart.onrender.com/sale';
      fetch(url)
          .then(r => r.json())
          .then(data => setSales(data))
  }

// load all data from database form and end date
  const hadelGetdata = e => {
      e.preventDefault();
      const sdate = e.target.sdate.value;
      const edate = e.target.edate.value;
      console.log(sdate, edate);
      const finddata = { sdate, edate };
      const url = `https://atifsupermart.onrender.com/datefilter?sdate=${sdate}&edate=${edate}`;
      fetch(url)
          .then(r => r.json())
          .then(data => {
              if (!data.length) {
                  return toast.error('Data Load faild Please Try again !!!')
              }
              toast.success('Data Load Succesfully !!!')
              setSales(data);
              console.log(data);
          })
  }


// update  data 
  const handelAddSale = (e) => {
      e.preventDefault();
      const date = e.target.date.value;
      const name = e.target.name.value;
      const about = e.target.about.value;
      const newSale = { date, name, about };
      // console.log(newSale);
      if (newSale) {
          fetch('https://atifsupermart.onrender.com/sale', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(newSale)
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  toast.success('Sale added successfully!!!');
                  e.target.reset();
                  load()
              })

      }
  };
  const rrq = {
    "_id": "6398cd48733c4e4b74c03f6a",
    "Sale_Time": "1620",
    "Shop_ID": "AM01",
    "Sale_Date": "2022-12-14",
    "Sale_Invoice": "14122022AM01010001",
    "Coustomer_Name": "",
    "Sale_Discount": "",
    "Sale_Pay_Type": "CASH",
    "Sale_Quntity": 2,
    "Pay_Amound": 1,
    "RTN_Amound": 1,
    "Sale_Data": [
        
    ]
};

  return (
    <div>
      <button className='btn' onClick={load}>load data</button>

      <div className='flex mx-auto justify-center'>
        <h1>get date wise data </h1>
        <form onSubmit={hadelGetdata}>
          <input name="sdate" className="input overflow-hidden input-bordered input-secondary w-full max-w-xs m-2 p-2 m-auto" type="date" placeholder='Enter Your BarCode Hare' required />
          <input name="edate" className="input overflow-hidden input-bordered input-secondary w-full max-w-xs m-2 p-2 m-auto" type="date" placeholder='Enter Your BarCode Hare' required />
          <input type="submit" value='submit' className='btn btn-primary' />

        </form>
      </div>
      <div>
        <ul>
          {
            salese.map((r, q) => <li className='text-2xl bold text-start' key={r._id}>{q + 1} Date: {r.Sale_Date} ----- name: {r.Sale_Invoice} about: {r.about}</li>)
          }
        </ul>
      </div>

      <div>


      </div>




    </div>
  );
};


export default SalesReport;


// <div className='border-4'>
// <form onSubmit={handelAddSale}>

//   <input name="date" className="input overflow-hidden input-bordered input-secondary w-full max-w-xs m-2 p-2 m-auto" type="date" placeholder='Enter Your BarCode Hare' required /><br />
//   <input name="name" className="input overflow-hidden input-bordered input-secondary w-full max-w-xs m-2 p-2 m-auto" type="text" placeholder='Enter Your BarCode Hare' required /><br />
//   <input name="about" className="input overflow-hidden input-bordered input-secondary w-full max-w-xs m-2 p-2 m-auto" type="text" placeholder='Enter Your BarCode Hare' required /><br />
//   <input className="btn btn-primaryt  " type="submit" value='submit' required /><br />

// </form>
// </div>