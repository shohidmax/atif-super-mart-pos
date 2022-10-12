import React from 'react';
import useSsr from '../../../Hooks/Ssr/useSsr';

const Addsr = () => {
    const [Ssr, setSsr] = useSsr();

    const handleAddssr = event =>{
        event.preventDefault();
      

        var today = new Date();
        const ID = Ssr.length + 1;
        const company_name = event.target.company_name.value;
        const Deeler_name = event.target.Deeler_name.value;
        const deelar_number = event.target.deelar_number.value;
        const salesman_name = event.target.salesman_name.value;
        const salesman_number = event.target.salesman_number.value;
        const deliveryman_name = event.target.deliveryman_name.value;
        const deliveryman_number = event.target.deliveryman_number.value;
        const ssrdetail = event.target.ssrdetail.value;
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(date, time);
      

          // make object 
          const srrData = {ID, company_name, Deeler_name, deelar_number, salesman_name, salesman_number, deliveryman_name, deliveryman_number, ssrdetail, date, time};
        console.log(srrData);
        // send data to the server
        if (Ssr.length < ID) {
            fetch('https://frozen-badlands-76581.herokuapp.com/ssr', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(srrData)
            })
            .then(res => res.json())
            .then(data =>{
              console.log(data);
                alert('Supplier added successfully!!!');
                event.target.reset();
                window.location.reload(); 
                 
            })
            
        }
    }
    
    return (
        <div>
            <h2>new sr id {Ssr.length + 1}</h2>
            <form onSubmit={handleAddssr}>
                <div>
                <input name='company_name' type="text" placeholder="Company Name " className="input mb-4 input-bordered input-accent w-full max-w-xs" required/><br/>
                <input name='Deeler_name' type="text" placeholder="Deelar Name " className="input mb-4 input-bordered input-accent w-full max-w-xs" required/><br/>
                <input name='deelar_number' type="number" placeholder="Deelar Mobile Number" className="input mb-4 input-bordered input-accent w-full max-w-xs" required/><br/>
                </div>
                <div>
                <input name='salesman_name' type="text" placeholder="Salese man name " className="input mb-4 input-bordered input-accent w-full max-w-xs" required/><br/>
                <input name='salesman_number' type="number" placeholder="Sales man Mobile Number" className="input mb-4 input-bordered input-accent w-full max-w-xs" required/><br/>
                </div>
                <div>
                <input name='deliveryman_name' type="text" placeholder="Delevary man name " className="input mb-4 input-bordered input-accent w-full max-w-xs" required/><br/>
                <input name='deliveryman_number' type="number" placeholder="Delevery man Mobile Number" className="input mb-4 input-bordered input-accent w-full max-w-xs" required/><br/>
                <textarea name='ssrdetail' type="text" placeholder="Brand or product list" className="input mb-4 input-bordered input-accent w-full max-w-xs" required/><br/>
                </div> 
                <input disabled={!Ssr.length > 0 } className='btn btn-primary' type="submit" value='Submit' /><br/>
                <progress className="progress w-56 mx-auto"></progress>
            </form>
        </div>
    );
};

export default Addsr;