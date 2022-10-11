import React from 'react';

// {"_id":{"$oid":"630eed49a1a310bfcbf22b51"},"ID":{"$numberInt":"16"},"company_name":"","Deeler_name":"","deelar_number":"","salesman_name":"","salesman_number":"","deliveryman_name":"","deliveryman_number":"","ssrdetail":"","date":"2022-8-31","time":"11:10:33"}




const Adduser = () => {
    return (
        <div>
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
    );
};

export default Adduser;