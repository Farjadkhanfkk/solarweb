import React from 'react';

function TableFoot() {
  return (
    <div className="p-1 bg-gray-100">
      {/* First Row */}
      <div className="grid grid-cols-12 gap-2 mb-2">
        <div className="col-span-8 bg-orange-500 p-1 text-center text-white rounded">
          <p>Price</p>
        </div>
        <div className="col-span-4 bg-orange-500 p-1 text-right text-white rounded">
          <p>745,696</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-12 gap-2 mb-2">
        <div className="col-span-12 bg-orange-500 p-1 text-center text-white rounded">
          <p>We provide 2 years free aftersales services</p>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-12 gap-2 mb-2">
        <div className="col-span-12 bg-orange-500 text-center p-1 text-white rounded">
          <p>Single to 3 Phase Meter Conversion Charges are 35K to 40K (WAPDA Fees) and cable cost will be included</p>
        </div>
      </div>

      {/* Fourth Row */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 text-center bg-orange-500 p-4 text-white rounded">
          <p>3 Phase must be available at client DB, if not then discuss and note down and add cost before signing</p>
        </div>
      </div>
    </div>
  );
}

export default TableFoot;
