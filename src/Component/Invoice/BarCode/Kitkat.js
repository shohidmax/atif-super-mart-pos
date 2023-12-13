import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
const Kitkat = () => {
    const ref = useRef(); 
    return (
        <div>
            <div ref={ref}>
                <div className='text-start text-xs p-2 m-2'>
                    <p >নিট ওজনঃ ১৮.৫ গ্রাম</p>
                    <p>আমদানিকারক ও বাজারজাতকারক :</p>
                    <p>নেস্টলে বাংলাদেশ লিমিটেড </p>
                    <p>রাজেন্দ্রপুর ক্যান্টনমেন্ট </p>
                    <p>শ্রীপুর, গাজীপুর-১৭৪১, বাংলাদেশ।</p>
                    <p>সর্বোচ্চ খুচরা বিক্রয়মূল্য  টাকা ৪০.০০</p>
                    <p>উৎপাদনের তারিখঃ ১১-০১-২০২৩</p>
                    <p>মেয়াদোত্তীর্ণের তারিখঃ ৩১-১০-২০২৩ </p> 
                </div>
            </div>
            <hr style={{'border':'1px solid black'}}/>
            <ReactToPrint className='border' trigger={() => <button className='btn-primary btn m-2 p-2'> print </button>} content={() => ref.current}/>
        </div>
    );
};

export default Kitkat;