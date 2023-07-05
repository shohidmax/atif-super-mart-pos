import React, { useState } from 'react';
import useSupplier from '../../../Hooks/Supplier/useSupplier';

const Shopreceve = () => {
    const [Supplier] = useSupplier([]) 
    const [sup, setSup] = useState('') 
    return (
        <div className='border-4'>
            <div>
                {/* // head section */}
                <div className='flex mx-auto'>
                    <div>
                    <select className="select select-primary " style={{'width':'90%'}}   onChange={(a) => (setSup(a.target.value))}>
                             <option disabled selected>Select Your Supplier</option>
                             {
                                    Supplier.map((s, index) => <option key={index + 1} value={s.Name}>{s.Reg_Name}</option>)
                            }
                            </select>
                        </div>
                    <div><button>{sup}</button></div>

                </div>
                {/* product section  */}
                <div>product </div>
                {/* bottom section  */}
                <div>set link</div>
            </div>
        </div>
    );
};

export default Shopreceve;