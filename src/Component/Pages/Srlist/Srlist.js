import React from 'react';
import useSsr from '../../../Hooks/Ssr/useSsr';
import LoadVlogs from '../../Utilitis/LoadVlogs';

const Srlist = () => {
    const [Ssr, setSsr] = useSsr();
    console.log(Ssr);

let ssr = {
    "_id": "6354e3686e1c228d3175eb96",
    "ID": 2,
    "company_name": "uniliver",
    "Deeler_name": "samon",
    "deelar_number": "01766440044",
    "salesman_name": "raihan",
    "salesman_number": "01766440044",
    "deliveryman_name": "asad",
    "deliveryman_number": "998899",
    "ssrdetail": "faaf",
    "date": "2022-10-23",
    "time": "12:47:2",
    "img": "https://i.ibb.co/CwGnScn/Background-1024x701.png"
};
    if (Ssr == 0) {
        return <LoadVlogs></LoadVlogs>;
    }


    return (
        <div>
            {Ssr.length}
            <div className='grid grid-cols-1 sm:grid-cols-3 mx-auto p-2 m-2'>

                {
                    Ssr.map((i,q) => (
                        <div className="card w-96 bg-base-100 shadow-xl p-2 m-2 mx-auto">
                        <figure className="px-10 pt-10">
                          <img src={i.img} style={{'height':'145px'}} alt="Shoes" className="rounded-xl w-4/4" />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">{i.salesman_name}</h2>
                          <p>Company: {i.company_name}</p>
                          <p>Deeler name: {i.Deeler_name} <a className='m-6' href={`tel:${i.deelar_number}`}>📞</a> </p>
                          <p>delivery Man: {i.deliveryman_name} <a className='m-6' href={`tel:${i.deliveryman_number}`}>📞</a> </p>
                          <div className="card-actions">
                          <a className="btn btn-primary"  href={`tel:${i.salesman_number}`}>call {i.salesman_name}</a> 
                          </div>
                        </div>
                      </div>
                    )) 
                }
           
            </div>
            
        </div>
    );
};
 
export default Srlist;