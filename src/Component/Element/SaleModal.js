import React from 'react';

const SaleModal = () => {
    return (
        <div>
           
{/* <label for="my-modal-3" class="btn modal-button">open modal</label> */}


<input type="checkbox" id="SaleModal" class="modal-toggle" />
<div class="modal" id='SaleModal'>
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
        </div>
    );
};

export default SaleModal;