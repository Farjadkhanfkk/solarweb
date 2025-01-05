import React from 'react';
import Logo from '../../../../public/assets/logo.png'

function TableHead() {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* Main Heading */}
      <img src={Logo.src} alt="Logo" className="h-[10.5rem] w-[10.5rem]" /> 
      <h2 className="text-2xl font-bold mb-6 text-center">CUSTOMER DETAILS</h2>

      {/* Flex Container for Customer Details */}
      <div className="flex justify-between">
        {/* Left Section (4 items) */}
        <div className="flex-1 pr-4">
          <p><strong>Name:</strong> Mr Junaid Imtiaz</p>
          <p className="mt-2"><strong>Contact:</strong> [Insert Contact Number]</p>
          <p className="mt-2"><strong>Address:</strong> [Insert Address]</p>
          <p className="mt-2"><strong>Email:</strong> [Insert Email]</p>
        </div>

        {/* Right Section (4 items) */}
        <div className="flex-1 " >
          <p className="text-right" style={{marginRight: '88px'}}><strong>Tracking ID:</strong> 2014</p>
          <p className="mt-2 text-right"><strong>Customer ID:</strong> QT/SF/C.ID 2000</p>
          <p className="mt-2 text-right" style={{marginRight: '90px'}}><strong>Date:</strong> 19/10/2024</p>
          <p className="mt-2 text-right" style={{marginRight: '40px'}}><strong>Valid Up to:</strong> 23/10/2024</p>
        </div>
      </div>
    </div>
  );
}

export default TableHead;
