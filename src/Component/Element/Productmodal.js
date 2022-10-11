import React from 'react';

const Productmodal = () => {
    return (
        
        <div className="modal" id="Product-modal">
            <div className="modal-box w-11/12 max-w-7xl border-black p-2 m-2">
              <h3 className="font-bold text-lg">Add Product</h3>
              <div className='border-1'>
                <form>
                  {/* supplier lebel */}
                  <div> 
                    <label>Your Supplier </label>
                  <input type="text" placeholder="please select your supplier" class="input input-bordered input-success w-full max-w-5xl" />
                  <a href="#my-modal-2" className="btn">+</a>
                  </div>
                  {/* Group and Product  */}
                  <div className='flex'>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>group</label>
                      <input type="text" placeholder="please select your supplier" class="input input-bordered input-success w-full max-w-xs" />
                      <a href="#my-modal-2" className="btn p-2 m-2">+</a>
                    </div>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>group</label>
                      <input type="text" placeholder="please select your supplier" class="input input-bordered input-success w-full max-w-xs" />
                      <a href="#my-modal-2" className="btn p-2 m-2">+</a>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>group</label>
                      <input type="text" placeholder="please select your supplier" class="input input-bordered input-success w-full max-w-xs" />
                      <a href="#my-modal-2" className="btn p-2 m-2">+</a>
                    </div>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>size/style</label>
                      <input type="text" placeholder="    " class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>group</label>
                      <input type="text" placeholder="please select your supplier" class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>size/style</label>
                      <input type="text" placeholder="    " class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>group</label>
                      <input type="text" placeholder="please select your supplier" class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>size/style</label>
                      <input type="text" placeholder="    " class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>group</label>
                      <input type="text" placeholder="please select your supplier" class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>size/style</label>
                      <input type="text" placeholder="    " class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>group</label>
                      <input type="text" placeholder="please select your supplier" class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>size/style</label>
                      <input type="text" placeholder="    " class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>group</label>
                      <input type="text" placeholder="please select your supplier" class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>size/style</label>
                      <input type="text" placeholder="    " class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>group</label>
                      <input type="text" placeholder="please select your supplier" class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                    <div className='flex-1 p-2 m-2 w-50'>
                      <label className='p-2 m-2'>size/style</label>
                      <input type="text" placeholder="    " class="input input-bordered input-success w-full max-w-xs" />
                    </div>
                  </div>

                  

                </form>
              </div>
              <div><h1>2nd part</h1></div>
              <div className="modal-action">
               <a href="#" className="btn">close</a>
               <button className='btn'>Save</button>
              </div>
            </div>
           </div>
        
    );
};

export default Productmodal;