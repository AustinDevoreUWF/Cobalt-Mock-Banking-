"use client";
import {useState} from "react";

type RowType = {
id: number,
desc : string,
amount : string,
date : string,
}


export default function Homepage(){
   const [rows, setRows] = useState<RowType[]>([]);
   const [amount, setAmount] = useState('');
   const [desc, setDesc] = useState('');

    const addRow=()=>{
        const newId = rows.length+1;
        const newRow = {id:newId,
             desc: `Transaction ${newId}`,
             amount: amount || "0.00",
            date: new Date().toISOString().split('T')[0],//splits the string into 2, keeps the first part(0)
        };
            setRows([...rows,newRow ]);
            setDesc('');
            setAmount('');
        };
    return(

<div className="bg-[#101c30] min-h-screen w-full flex flex-col items-center">
  {/* Top blue header */}
  <div className="w-full max-w-2xl h-[60px] flex items-center bg-blue-900 my-5 border-4 border-black text-2xl px-4">
    𝘏𝘦𝘭𝘭𝘰,
  </div>

  {/* Black background container */}
  <div className="bg-black p-10 flex flex-col items-center gap-10 mt-[50px] w-full max-w-[1200px]">
    {/* Blue box (respects black box padding) */}
    <div className="w-full max-w-[800px] h-[200px] bg-blue-800"></div>

    {/* Button row */}
    <div className="flex flex-row justify-evenly w-full max-w-[800px] space-x-6">
      <button className="flex-1 h-16 bg-blue-900 hover:bg-blue-700 hover:cursor-pointer">
        Transfer
      </button>
      <button className="flex-1 h-16 bg-blue-900 hover:bg-blue-700 hover:cursor-pointer">
        Add Money
      </button>
      <button className="flex-1 h-16 bg-blue-900 hover:bg-blue-700 hover:cursor-pointer">
        Withdraw
      </button>
    </div>
  </div>
    <div className="bg-black p-10 flex flex-col items-center gap-10 mt-[50px] w-full max-w-[1200px]">
</div>
</div>

);

}