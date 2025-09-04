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
    {/* Black background container */}
    <div className="container w-300 bg-black p-8 flex justify-evenly mt-50 mx-10 gap-10">
      {/* Blue boxes */}
      <div className="w-64 h-32 bg-blue-900"></div>
      <div className="w-64 h-32 bg-blue-900"></div>
      <div className="w-64 h-32 bg-blue-900"></div>
    </div>
  </div>
);

}