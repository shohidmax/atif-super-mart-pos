import React from 'react';

const DailyCost = () => {
    return (
        <div>
            <div className='flex justify-around'>
                <div className='p-2 m-2 border-4 w-4/12 border-green-400'>
                    <div>
                        <form>
                            <div class="form-control w-full max-w-xs">
                                <div>
                                    <label class="label">
                                        <span class="label-text">Select Date</span>
                                    </label>
                                    <input type="date" placeholder="00.00" step="0.01" min="0" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label class="label">
                                        <span class="label-text">Total sale Amound !</span>
                                    </label>
                                    <input type="number" placeholder="00.00" step="0.01" min="0" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label class="label">
                                        <span class="label-text">Total sale Amound !</span>
                                    </label>
                                    <input type="number" placeholder="00.00" step="0.01" min="0" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label class="label">
                                        <span class="label-text">Total sale Amound !</span>
                                    </label>
                                    <input type="number" placeholder="00.00" step="0.01" min="0" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label class="label">
                                        <span class="label-text">Total sale Amound !</span>
                                    </label>
                                    <input type="number" placeholder="00.00" step="0.01" min="0" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label class="label">
                                        <span class="label-text">Total sale Amound !</span>
                                    </label>
                                    <input type="number" placeholder="00.00" step="0.01" min="0" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <input className="btn btn-primary m-1 p-1" type='submit' />
                            </div>

                        </form>

                    </div>
                </div>
                <div className='p-2 m-2 border-4 w-4/12 border-green-500'>
                    <div className='p-2 m-2 border-2  border-pink-500'>
                        <h1> Previous Result</h1>
                        <hr className='border m-2 flex justify-center border-pink-700' />

                    </div>
                    
                    <div className='p-2 m-2 border-2  border-pink-500'>
                        <h1>Current Status</h1>
                        <hr className='border m-2 flex justify-center border-pink-700' />
                        <h1> Total Due: 00.00 TK </h1>
                        <h1>Total Bank: 00.00 TK</h1>
                    </div>
                </div>
                <div className='p-2 m-2 border-4 w-4/12 border-green-500'>
                    L2
                </div>

            </div>
            <div className=' m-2 p-2 border-4 border-red-400'>
                BOTTTOM
            </div>

        </div>
    );
};

export default DailyCost;