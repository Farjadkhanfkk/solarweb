"use client";
import React from 'react';
import Link from 'next/link'; 
import TableHead from './tablehead';
import TableFoot from './tablefoot';
// Import Link for the download button

const Quotation = () => {
  const data = [
    {
      sr: 1,
      itemCode: '129456',
      itemType: 'On-Grid Inverter',
      qty: 1,
      rate: '215,000',
      description: (
        <>
          <strong>Growatt 10KW PV12000W High Ampere Dual MPPT Inverter</strong><br />
          WIFI DONGLE<br />
          Wifi Dongle for live update of complete system generation and analysis<br />
          <strong>WARRANTY</strong><br />
          Complete 5 Years Local replacement warranty +5 years extendable
        </>
      ),
    },
    {
      sr: 2,
      itemCode: '132534',
      itemType: 'Pv Modules',
      qty: 17,
      rate: 'Not Included',
      description: (
        <>
          <strong>Longi Himo X6 Solar Panels</strong> Mono-Facial 580 Watts Grade-A, Tier-1 mono PERC<br />
          Compliant with international standards<br />
          <strong>WARRANTY</strong><br />
          Complete 25-Year Linear Power Output warranty with 12-Year Manufacturing Warranty
        </>
      ),
    },
    {
      sr: 3,
      itemCode: '117654',
      itemType: 'Structure/ Frame',
      qty: 'Included',
      rate: '182,410',
      description: (
        <>
          Pv modules to be mounted on 10AWG/Guage (Mughal Garder) Elevated structure with galvanized C/U/G channels 14 AWG and waterproofing with concrete padding is included<br />
          <strong>WARRANTY</strong><br />
          Complete 2-Year workmanship warranty is provided
        </>
      ),
    },
    {
      sr: 4,
      itemCode: '984523',
      itemType: 'Electrical Accessories',
      qty: 1,
      rate: '60,000',
      description: (
        <>
          Pvc Pipes, Elbow, Bends, Socket, Saddles, Pvc Ducts, Rawal bolts (Adamjee/Accufit), Mc4 Connectors, Ac Breakers (Chint/Schneider), Ac Surge Protection Devices (Chint/Schneider), Dc Circuit Breakers (Chint/Schneider), Dc Surge Protection Devices (Chint/Schneider), Distribution Boxes, Cable Ties, Main Disconnect Switches
        </>
      ),
    },
    {
      sr: 5,
      itemCode: '987000',
      itemType: 'DC Cable',
      qty: 1,
      rate: '35,000',
      description: (
        <>
          4.0 mm Flexible DC Copper Cable 600/1000 V (Fast Cables) 1 strings
        </>
      ),
    },
    {
      sr: 6,
      itemCode: '987001',
      itemType: 'AC Cable',
      qty: 1,
      rate: '25,000',
      description: (
        <>
          6.0 mm AC 4-Core Copper Cable for Inverter to Client Distribution Box (Fast Cables)
        </>
      ),
    },
    {
      sr: 7,
      itemCode: '987003',
      itemType: 'Earthing',
      qty: 3,
      rate: '65,000',
      description: (
        <>
          AC Earthing, DC Earthing (Flexible Copper wire) used for Earthing and Lightening Arrester Installation above Rooftop (Bore for earthing 5 to 10 feet is included)
        </>
      ),
    },
    {
      sr: 8,
      itemCode: '432165',
      itemType: 'Installation',
      qty: 1,
      rate: '50,286',
      description: (
        <>
          Complete E&M Installation and Commissioning of PV Plant
        </>
      ),
    },
    {
      sr: 9,
      itemCode: '562431',
      itemType: 'Transportation',
      qty: 1,
      rate: '15,000',
      description: (
        <>
          Transportation/Loading/Unloading Carriage Charges
        </>
      ),
    },
    {
      sr: 10,
      itemCode: '234122',
      itemType: 'Net Metering',
      qty: 1,
      rate: '98,000',
      description: (
        <>
          NEPRA Demand Notice, Sub-Division, P&I, M&T, Bi-Directional Meter Purchase (all Transformer Phase issues are EXCLUDED from this quote)
        </>
      ),
    },
    {
      sr: 11,
      itemCode: '999911',
      itemType: 'Monitoring',
      qty: 1,
      rate: 'Included',
      description: (
        <>
          Two End Monitoring and System Maintenance check with Livemonitoring 24/7
        </>
      ),
    },
    {
      sr: 12,
      itemCode: '656543',
      itemType: 'Water Proofing',
      qty: 1,
      rate: 'Included',
      description: (
        <>
          Waterproofing Epoxy Resin for Long Life for each Rawal plug drill hole
        </>
      ),
    },
  ];
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './assets/mypdf.pdf'; // Ensure this path is correct
    link.download = 'mypdf.pdf'; // This is the name the file will have when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 bg-gray-100 flex flex-col items-center">
    <div className="w-full max-w-5xl px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-center font-bold" style={{fontSize:'53px'}}>Quotation</h2>
        <button 
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white rounded-md font-bold"
        >
          Download PDF
        </button>
      </div>
      <div className="mb-4">
        <TableHead />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm font-bold">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-2 text-center border border-gray-300">Sr #</th>
              <th className="p-2 text-center border border-gray-300">ITEM CODE</th>
              <th className="p-2 text-center border border-gray-300">ITEM TYPE</th>
              <th className="p-2 border border-gray-300">DESCRIPTION</th>
              <th className="p-2 text-center border border-gray-300">QTY</th>
              <th className="p-2 text-center border border-gray-300">RATE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.sr} className="bg-gray-50">
                <td className="p-2 text-center border border-gray-300">{row.sr}</td>
                <td className="p-2 text-center border border-gray-300">{row.itemCode}</td>
                <td className="p-2 text-center border border-gray-300">{row.itemType}</td>
                <td className="p-2 border border-gray-300">{row.description}</td>
                {/* <td className="p-2 text-center border border-gray-300">{row.qty}</td>
                <td className="p-2 text-center border border-gray-300">{row.rate}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <TableFoot />
      </div>
    </div>
  </div>
  );
};

export default Quotation;
