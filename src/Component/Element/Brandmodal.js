import React from 'react';
import useBrand from '../../Hooks/Brand/useBrand';

const Brandmodal = () => {
 const [Brand] = useBrand();


  const handleAddBrand = event =>{
    event.preventDefault();
    const Brand_Type_Name = event.target.Brand_Type_Name.value;
    let ID = 0;

    // lost hastel

var largest = Brand[1].ID;
console.log(largest,'prev', Brand[1].ID);
const datanew = {
  "_id": "62fb75936785e6929c2bbe67",
  "ID": 272,
  "Brand_Type_Name": "..........."
};

for (const i = 0; i < Brand.length; i++) {
    if (largest < Brand[i] ) {
        largest = Brand[i];
    }
}
largest=ID + 1 ;
console.log(largest + 1, 'brand number',  ID);
      // make object 
      ID = ID + 1;
    const Branddata = {ID , Brand_Type_Name};

    // send data to the server
    fetch('https://frozen-badlands-76581.herokuapp.com/brand', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(Branddata)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
        alert('Brand added successfully!!!');
        event.target.reset();
    })
}


    return (
        <div>
            <div className="modal" id="Brand-modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h2 className="font-bold text-lg m-4 p-4"> ADD Product Brand</h2>
                  <div>
                          <form onSubmit={handleAddBrand} >
                              <input disabled type="number" placeholder={ Brand.length + 1} className="input mb-4 input-bordered input-accent w-full max-w-xs" /><br/>
                              <input required type="text" name="Brand_Type_Name"  placeholder="Type Brand Name here" className="input mb-4 input-bordered input-accent w-full max-w-xs" required /><br/>
                              <input className='btn btn-primary w-full max-w-xs ' type="submit" value='Submit' /><br/>

                          </form>
                  </div>
                  <div className="modal-action">
                   <a href="#" className="btn"> Home</a>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default Brandmodal;