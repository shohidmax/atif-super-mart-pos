import React, { useState } from 'react';
import swal from 'sweetalert';
import useSupplier from '../../../Hooks/Supplier/useSupplier';

const Preceve = () => {
    const [suPPlier, setsuPPlier] = useState('');
    const [barcode, setbarcode] = useState(''); 
    const [pro, setPurched] = useState([]);
    const [Supplier] = useSupplier();
    if (!suPPlier) {
        setsuPPlier('no data found')
    }
    // console.log(barcode);
    // let barcode = 8908010373171;
    const findProducts = (e) =>{
        fetch(`http://localhost:5000/shoppurchase?supp=${suPPlier}&barcode=${e}`)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        if (data.data === 'data not found') {
            swal(`${data.data}`);
        }else{
            const datas = [data];
            setPurched(datas);
            localdata()
        }
      }) 
    }
    const handlebarcode = (e) =>{
        e.preventDefault();
        const ids = e.target.bar.value; 
        console.log(ids);
        setbarcode(ids.toUpperCase().toString())
        findProducts(ids.toUpperCase())
        e.target.reset();
    }

    const localdata = () =>{
        localStorage.setItem("hold_par", JSON.stringify(Supplier))
    }
//     const date = new Date();
//     const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
//     const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    
//     const surv = [
//         {
//          "id": "8901157001143",
//          "Name": "asad",
//          "Age": 18,
//          "Income":5000
//         },
//         {
//          "id": "8901157001143",
//          "Name": "asad",
//          "Age": 19,
//          "Income":6000
//         },
//         {
//          "id": "8901157001143",
//          "Name": "asad",
//          "Age": 17,
//          "Income":3000
//         }
//        ]

// const addData = (e) =>{
//     // take input with data
//     const id = `${year}${day}${hour}${minutes}${seconds + 1}`;
//     const Name = 'inut';
//     const Age = 33;
//     const Income = 2500
//     const obj ={id, Name, Age, Income};
//     surv.push(obj)
//     console.log(surv.length, surv);

// }
// let Avgyears = 0;
// let avgIncome = 0;
// for(const sur of surv){
//     Avgyears = Avgyears + sur.Age / surv.length;
//     avgIncome = avgIncome + surv.Income / surv.length; 
//   };
// console.log('avarage Income', avgIncome, 'Avarage years', Avgyears);


// console.log(suPPlier);


    return (
        <div>
            <div className='border-2 m-2 p-2'>
                <h1 className='text-3xl'>Shop Purched {pro.group} </h1>

                <div className='border-2 m-2 p-2'>
                    <div className='border-2 border-success m-2 p-2'>
                        <div className='flex justify-around'>
                            <div className='flex'>
                                <label className=' mt-4  text-xl font-medium text-slate-700'>Supplier</label>
                                {/* <input  className='input input-primary p-2 m-2 w-8/12'  type="text" /> */}
                                <select onChange={(e) => setsuPPlier(e.target.value) } class="select select-bordered w-full max-w-xs">
                                  <option disabled selected>Who shot first?</option>
                                  {
                                    Supplier.map((d, i) => <option key={i + 1}> {d.Name}</option>)
                                  }
                                </select>
                            </div> 
                            <div className='flex'>
                                <label className=' mt-4  text-xl font-medium text-slate-700'>PO no#</label>
                                <input  className='input input-primary p-2 m-2' type="text" />
                                <button onClick={findProducts} className='btn w-36'> Load</button> 
                            </div>  
                        </div>
                        <div className='flex mx-auto'>
                            <label className=' mt-4  text-xl font-medium text-slate-700'> Ref#</label>
                            <input  className='input input-primary p-2 m-2' style={{'width':'60%'}} type="text" />
                        </div>
                    </div>
                    
                    <div className='border-2 border-info p-2 m-2'>
                        <h2 className='text-2xl'>Item section</h2>
                        <div className='flex justify-around w-12/12 mx-auto'>
                            <div className=''>
                                <form onSubmit={handlebarcode}>
                                    <label className=' text-xl font-medium text-slate-700'> Barcode</label>
                                    <input  className='input input-primary p-2 m-2' name='bar'  placeholder=' Product Barcode' style={{'width':'350px'}} type="text" />
                                </form>
                            </div>
                            <div className='flex'>
                                <label className=' mt-4 text-xl font-medium text-slate-700'>Receave Date</label>
                                <input className='input input-primary p-2 m-2' style={{'width':'350px'}} type="date" />
                            </div>
                        </div>
                        <div>
                            <label className=' text-xl font-medium text-slate-700'> Discription</label>
                            <input  className='input input-primary p-2 m-2'  placeholder={pro.Style} style={{'width':'70%'}} type="text" />
                        </div>
                        <div className='flex w-9/12 mx-auto justify-around '>
                            <div className='flex m-2 p-2'>
                                <label className=' mt-4 text-xl font-medium text-slate-700' >Stock Qty</label>
                                <input className='input input-primary p-2 m-2' style={{'width':'100px', 'height':'40px'}}  type="text" />
                            </div>
                            <div className='flex m-2 p-2'>
                                <label className=' mt-4 text-xl font-medium text-slate-700' >CPU</label>
                                <input className='input input-primary p-2 m-2' style={{'width':'100px', 'height':'40px'}}   type="text" />
                            </div>
                            <div className='flex m-2 p-2'>
                                <label className=' mt-4 text-xl font-medium text-slate-700' >RPU</label>
                                <input className='input input-primary p-2 m-2' style={{'width':'100px', 'height':'40px'}}  type="text" />
                            </div>
                            <div className='flex m-2 p-2'>
                                <label className=' mt-4 text-xl font-medium text-slate-700' >B.Qty</label>
                                <input className='input input-primary p-2 m-2' style={{'width':'100px', 'height':'40px'}}  type="text" />
                            </div>
                            <div className='flex m-2 p-2'>
                                <label className=' mt-4 text-xl font-medium text-slate-700' >Rec Qty</label>
                                <input className='input input-primary p-2 m-2' style={{'width':'100px', 'height':'40px'}}  type="text" />
                            </div>
                            <div className='flex m-2 p-2'>
                                <button className='btn-primary' style={{'width':'150px', 'height':'40px'}} >Add</button>
                            </div>
                        </div> 
                        <h1>border closed</h1>
                    </div>
                    <div className='border-2 m-2 p-2 bg-orange-100 border-red-500'>
                        <div style={{'height':'380px'}} className=''>
                            <div class="overflow-x-auto">
                                <table class="table table-compact w-full">
                                  <thead>
                                    <tr>
                                      <th>Barcode</th> 
                                      <th>Discription</th> 
                                      <th>CPU</th> 
                                      <th>RPU</th> 
                                      <th>Qty</th> 
                                      <th>B.Qty</th> 
                                      <th>Sub Total</th>
                                      <th>Update</th>
                                    </tr>
                                  </thead> 
                                  <tbody className='bg-transparent'>
                                    <tr className='bg-transparent'>
                                      <th>121212121</th> 
                                      <td>dfndnsdjnjdn    jdnjndsj   njdnjdnj jbjbjbj jbjkb hhbh</td> 
                                      <td>7</td> 
                                      <td>9</td> 
                                      <td>0</td> 
                                      <td>2</td> 
                                      <td>1590</td>
                                      <td><button className='btn btn-xs'>update</button></td>
                                    </tr>
                                    
                                  </tbody> 
                                </table>
                            </div>
                        </div>
                        <hr style={{'border':'2px solid blue'}}/>
                        <div className='flex justify-around'>
                            <div className='text-xl bold'>
                                <h1>Total Items: <span className='text-red-500 text-2xl'>1</span></h1>
                            </div>
                            <div className='text-xl bold'>
                                <h1>Total Quntity: <span className='text-red-500 text-2xl'>1</span></h1>
                            </div>
                        </div>
                        end of border
                    </div>
                    <div className='border-4 border-green-200 m-2 p-2'>
                        <div>
                            <div className='flex justify-between w-10/12 mx-auto'>
                                <div className='flex m-2 p-2'>
                                    <label className=' mt-4 text-xl font-medium text-slate-700' >Total Value</label>
                                    <input className='input input-primary p-2 m-2' style={{'width':'150px', 'height':'40px'}}  type="text" />
                                </div>
                                <div className='flex m-2 p-2'>
                                    <label className=' mt-4 text-xl font-medium text-slate-700' >Prd Com %</label>
                                    <input className='input input-primary p-2 m-2' style={{'width':'150px', 'height':'40px'}}  type="text" />
                                </div>
                                <div className='flex m-2 p-2'>
                                    <label className=' mt-4 text-xl font-medium text-slate-700' >Prd Com Val</label>
                                    <input className='input input-primary p-2 m-2' style={{'width':'150px', 'height':'40px'}}  type="text" />
                                </div>
                                <div className='flex m-2 p-2'>
                                    <label className=' mt-4 text-xl font-medium text-slate-700' >Sub Total</label>
                                    <input className='input input-primary p-2 m-2' style={{'width':'150px', 'height':'40px'}}  type="text" />
                                </div>
                            </div>
                            <div className='flex justify-end w-10/12 mx-auto'> 
                                <div className='flex m-2 p-2'>
                                    <label className=' mt-4 text-xl font-medium text-slate-700' >Addi Cost</label>
                                    <input className='input input-primary p-2 m-2' style={{'width':'150px', 'height':'40px'}}  type="text" />
                                </div>
                                <div className='flex m-2 p-2'>
                                    <label className=' mt-4 text-xl font-medium text-slate-700' >Net Value</label>
                                    <input className='input input-primary p-2 m-2' style={{'width':'150px', 'height':'40px'}}  type="text" />
                                </div>
                                
                            </div>
                            <hr style={{'border':'1px solid red'}}/>
                            <div className='flex p-1 m-1'>
                                <div className='border-2 w-8/12'> 

                                </div>
                                <div className=' flex  w-4/12'>
                                    <div className='w-4/12 '>
                                        <button style={{'width':'150px','height':'30px'}} className='btn btn-sm p-1 m-1'>Hold</button><br/>
                                        <button style={{'width':'150px','height':'30px'}} className='btn btn-sm p-1 m-1'>Re-Call</button>
                                    </div> 
                                    <div className='w-4/12 '>
                                        <button style={{'width':'150px','height':'70px'}} className='btn btn-sm p-1 m-1'>Preview</button><br/>
                                    </div> 
                                    <div className='w-4/12 '>
                                        <button style={{'width':'150px','height':'30px'}} className='btn btn-sm p-1 m-1'>Recive</button><br/>
                                        <button style={{'width':'150px','height':'30px'}} className='btn btn-sm p-1 m-1'>Close</button>
                                    </div>  
                                </div>
                            </div> 


                        </div>
                    
                    </div> 
                </div>
                    
                    {
                        Supplier.map((name , i) =>{
                            <div key={i+ 1}>
                                <h1>group ID </h1>
                                <h1>group name </h1>
                            </div>
                        })
                    }
            </div>
            
        </div>
    );
};

export default Preceve;