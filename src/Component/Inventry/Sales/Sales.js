import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sales = () => {
const bg ={
    "color":'bg-red-500'
};
console.log(bg);
    return (
        <div className='flex'>
            {/* 1st section  */}
          <div className='w-4/12 bg-red-500 mx-auto'>
            <div className='flex mx-auto justify-center '>
                <Link to="/Order">
                    <div className='border p-2 m-2 hover:bg-white'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Counter</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Shop in o=Out</h1>
                    </div>
                </Link>
            </div>
            <div className='flex mx-auto justify-center'>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>User Permission</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>User Management</h1>
                    </div>
                </Link>
            </div>
            <div className='flex mx-auto justify-center'>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Emp. Attendent</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Setting</h1>
                    </div>
                </Link>
            </div>
            <div className='flex mx-auto justify-center'>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Group Setup</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Brand Setup</h1>
                    </div>
                </Link>
            </div>
            <div className='flex mx-auto justify-center'>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Product Setup</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Supplier Setup</h1>
                    </div>
                </Link>
            </div>
            <div className='flex mx-auto justify-center'>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Style Size</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Sales Man</h1>
                    </div>
                </Link>
            </div>
            <div className='flex mx-auto justify-center'>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Weighting Items</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Credit Card's</h1>
                    </div>
                </Link>
            </div>
            
                
          </div>
          {/* 2nd section  */}
          <div className='w-4/12 bg-green-500'>
          <div className='flex mx-auto justify-center'>
                <Link to="/Order">
                    <div style={bg} className='border p-2 m-2'>
                        <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Weigh 11111</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Credit Card's</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Credit Card's</h1>
                    </div>
                </Link>
            </div>
            <div className='flex mx-auto justify-center'>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Weighting Items</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Credit Card's</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Credit Card's</h1>
                    </div>
                </Link>
            </div>
            <div className='flex bg-white justify-between'>
                <div>
                    <h1 className='text-3xl mt-6 '>
                        Unitech It and office solution
                    </h1>
                </div>

                <div >
                    <img style={{'width':'160px'}} src="https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/271010080_5058130174237687_5207876725912418618_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=igm-c6e6q18AX89x6cM&tn=Dar_lnvUW00pPMBN&_nc_ht=scontent.frjh1-1.fna&oh=00_AfDuRPuacCAQTvKF7pSkPVsRVqXM4zpeYh8caiQ2feOOOA&oe=637B8F0A" alt="" />
                </div>
            </div>
            <div className='flex mx-auto justify-center'>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Weighting Items</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Credit Card's</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Credit Card's</h1>
                    </div>
                </Link>
            </div>
            <div className='flex mx-auto justify-center'>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Weighting Items</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Credit Card's</h1>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Credit Card's</h1>
                    </div>
                </Link>
            </div>
            <div className='flex mx-auto justify-center'>
                <div>
                    <h1>ndkndjdsnjsnd jdijsnfsndjnsd</h1>
                </div>
                <Link to="/Order">
                    <div className='border p-2 m-2'>
                        <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                        <h1>Credit Card's</h1>
                    </div>
                </Link>
            </div>
            
            
          </div>
          {/* 3rd section  */} 
          <div className='w-4/12 bg-blue-500'>
                    <div className='flex mx-auto justify-center'>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Weighting Items</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='flex mx-auto justify-center'>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Weighting Items</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='flex mx-auto justify-center'>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Weighting Items</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='flex mx-auto justify-center'>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Weighting Items</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='flex mx-auto justify-center'>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Weighting Items</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='flex mx-auto justify-center'>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'110px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Weighting Items</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                        <Link to="/Order">
                            <div className='border p-2 m-2'>
                                <img style={{'width':'100px', 'height':'110px'}} src="https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png" alt="" />
                                <h1>Credit Card's</h1>
                            </div>
                        </Link>
                    </div>

          </div>
        </div>
    );
};

export default Sales;