import React from "react";
import useSupplier from "../../Hooks/Supplier/useSupplier";

const Suppliermodal = () => {
  const [Supplier] = useSupplier();
  const handleAddSupplier = event =>{
    event.preventDefault();
    const Brand_Type_Name = event.target.Brand_Type_Name.value;
    const ID = Supplier.length + 1;
      // make object 
    const Branddata = {ID, Brand_Type_Name};

    // send data to the server
    fetch('https://atifsupermart.onrender.com/supplier', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(Branddata)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
        alert('Supplier added successfully!!!');
        event.target.reset();
    })
}



  /// supplier
  // "SID": 142,
  // "Name": "AB GROUP",
  // "Product_Name": "",
  // "address_1": "",
  // "Phone": "",
  // "Reg_Name": "AB GROUP"

  return (
    <div>
      <div className="modal " id="Supplier-modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h2 className="font-bold text-lg m-3">
            Add Supplier {Supplier.length}
          </h2>
          
          <div className="">
          
          <form >
                <input type="text" placeholder="Type here" className="input mb-4 input-bordered input-accent w-full max-w-xs" /><br/>
                <input type="text" placeholder="Type here" className="input mb-4 input-bordered input-accent w-full max-w-xs" /><br/>
                <input type="text" placeholder="Type here" className="input mb-4 input-bordered input-accent w-full max-w-xs" /><br/>
                <input type="text" placeholder="Type here" className="input mb-4 input-bordered input-accent w-full max-w-xs" /><br/>
                <input type="text" placeholder="Type here" className="input mb-4 input-bordered input-accent w-full max-w-xs" /><br/>
                <input type="number" placeholder="Mobile Number" className="input mb-4 input-bordered input-accent w-full max-w-xs" /><br/>
                <input className='btn w-full max-w-xs btn-primary' type="submit" value='Submit' /><br/>
               
            </form>
          
          </div>
          <div className="modal-action">
            <a href="#" className="btn">
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliermodal;
