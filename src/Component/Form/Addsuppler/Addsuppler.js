import React from "react";
import useBrand from "../../../Hooks/Brand/useBrand";
import useGroups from "../../../Hooks/Groups/useGroups";
import useProduct from "../../../Hooks/Product/useProduct";
import useSupplier from "../../../Hooks/Supplier/useSupplier";

const Addsuppler = () => {
  const [Supplier, setSupplier] = useSupplier();
  const [Brand, setBrand] = useBrand();
  const [Product, setProduct] = useProduct();
  const [Groups, setGroups] = useGroups();
  console.log(Brand);
  return (
    <div className="border-2 m-4 p-4 flex bg-sky-300">
      <div className="flex-auto w-1/4"></div>
      <div className="border-1 flex-auto w-2/4">
        <form>
          {/* supplier opsion */}
          <div className="flex justify-center m-2 ">
            <label className="mx-2">Your Supplier </label>
            <select
              placeholder="please select your supplier"
              className="input input-bordered input-sm w-3/4 max-auto"
            >
              {Supplier.map((r, index) => (
                <option>
                  {r.Name} ID: {r.SID}
                </option>
              ))}
            </select>
            <a href="#my-modal-2" className="btn btn-sm px-2 mx-2">
              +
            </a>
          </div>
          {/* supplier lebel */}
          {/* 
                  <div className='flex justify-center m-2 '> 
                  <label className='mx-2'>Group </label>
                  <select placeholder="please select your supplier" className="input input-bordered input-sm w-3/4 max-auto">
                    {
                        Supplier.map((r , index) => <option>{r.Name}  ID: {r.SID}</option>)
                    }
                    </select>
                  <a href="#my-modal-2" className="btn btn-sm px-2 mx-2" >+</a>
                  </div> */}

          {/* Group and Product  */}
          <div className="flex justify-between ">
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">Group </label>
              <select
                placeholder="please select your supplier"
                className="input input-bordered input-sm w-2/4 max-auto"
              >
                {Groups.map((r, index) => (
                  <option>
                    {r.Group_Name} ID: {index + 1}
                  </option>
                ))}
              </select>
              <a href="#my-modal-2" className="btn btn-sm px-2 mx-2">
                +
              </a>
            </div>
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">Product </label>
              <select
                placeholder="please select your supplier"
                className="input input-bordered input-sm w-2/4 max-auto"
              >
                {Product.map((r, index) => (
                  <option>
                    {r.Product_Name} ID: {index + 1}
                  </option>
                ))}
              </select>
              <a href="#my-modal-2" className="btn btn-sm px-2 mx-2">
                +
              </a>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">Brand </label>
              <select
                placeholder="please select your supplier"
                className="input input-bordered input-sm w-2/4 max-auto"
              >
                <option key="">Please Select One</option>
                {Brand.map((r, index) => (
                  <option>
                    {r.Brand_Type_Name} ID: {index + 1}
                  </option>
                ))}
              </select>
              <a href="#my-modal-2" className="btn btn-sm px-2 mx-2">
                +
              </a>
            </div>
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">Style/Size </label>
              <input
                placeholder="please select your supplier"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">sBarCode </label>
              <input
                placeholder=" Number"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">Barcode </label>
              <input
                type="number"
                placeholder="please select your supplier"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
          </div>
          {/* .............................................................................. */}
          <hr />
          {/* ......................................................................... */}

          <div className="flex justify-between ">
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">CPU </label>
              <input
                placeholder=" 0.00"
                type="number"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
            <div className="flex-1 p-2 m-1 w-50">
              <label className="label">
                <span className="label-text">Profit %</span>
                
              </label>
              <input
                placeholder=" 0.00"
                type="number"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">RPU </label>
              <input
                type="number"
                placeholder="please select your supplier"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
          </div>
          {/* .............................................................................  */}
          <hr />
          {/* ......................................................................... */}

          <div className="flex justify-between ">
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">CPU </label>
              <input
                placeholder=" 0.00"
                type="number"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
            
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">RPU </label>
              <input
                type="number"
                placeholder="please select your supplier"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
          </div>

                  {/* .............................................................................  */}
                  <hr />
          {/* ......................................................................... */}

          <div className="flex justify-between ">
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">CPU </label>
              <input
                placeholder=" 0.00"
                type="number"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
            
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">RPU </label>
              <input
                type="number"
                placeholder="please select your supplier"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
          </div>


                  {/* .............................................................................  */}
                  <hr />
          {/* ......................................................................... */}

          <div className="flex justify-between ">
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">CPU </label>
              <input
                placeholder=" 0.00"
                type="number"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
            
            <div className="flex-1 p-2 m-2 w-50">
              <label className="mx-2">RPU </label>
              <input
                type="number"
                placeholder="please select your supplier"
                className="input input-bordered input-sm w-2/4 max-auto"
              />
            </div>
          </div>

          <input className="btn btn-primary" type="Submit" value="submit" />
        </form>
      </div>
      <div className="flex-auto w-1/4"></div>
    </div>
  );
};

export default Addsuppler;
