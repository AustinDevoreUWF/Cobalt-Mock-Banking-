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
    <div className="container w-full max-w-2xl h-15 items-center bg-blue-900 my-5 border-black border-5 flex text-left align-middle text-2xl px-4">𝘏𝘦𝘭𝘭𝘰, </div>
    {/* Black background container */}

    <div className="container items-end h-100 w-300 bg-black p-8 flex justify-evenly mt-50 mx-10 gap-10">
      <div className="w-200 h-30 bg-blue-800"></div>
      {/* Blue boxes */}
      <button className="w-42 h-16 bg-blue-900 hover:bg-blue-700 hover:cursor-pointer">Transfer</button>
      <button className="w-42 h-16 bg-blue-900 hover:bg-blue-700 hover:cursor-pointer">Add Money</button>
      <button className="w-42 h-16 bg-blue-900 hover:bg-blue-700 hover:cursor-pointer">Withdraw</button>
    </div>
  </div>
);

}