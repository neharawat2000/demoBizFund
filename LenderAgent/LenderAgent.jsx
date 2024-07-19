import React, { useState } from "react";
import { LenderTable, DocumentTable } from "./LenderAgentTable";
import { FiUploadCloud } from "react-icons/fi";

export default function LenderAgent(){
    const [position, setPosition]= useState("2");
    const [credit, setCredit]= useState("716");
    const [amount, setAmount]= useState("$5.000");
    const [monthlyMin, setMonthlyMin]= useState("$25.000");

    const documentData=[
        {
          fileName: "Funding_Application.pdf",
          uploadDate: "Uploaded Jan 4, 2022",
          preview: "Delete"
        },
        {
          fileName: "Statement-1.pdf",
          uploadDate: "Uploaded Jan 4, 2022",
          preview: "Delete"
        },
        {
          fileName: "Statement_2.pdf",
          uploadDate: "Uploaded Jan 4, 2022",
          preview: "Delete"
        }
      ]      

    const tableData=[
        {
          lender: "Ford",
          ceo:"Phoenix",
          position: 2,
          credit: 610,
          amount: "$10.000",
          monthlymin: "$25.000",
          email: "phoenix@ford.com"
        },
        {
          lender: "Coke",
          ceo:"Lana",
          position: 1,
          credit: 680,
          amount: "$5.000",
          monthlymin: "$25.000",
          email: "lana@coke.com"
        },
        {
          lender: "Amazon",
          ceo:"Demi",
          position: 1,
          credit: 700,
          amount: "$20.000",
          monthlymin: "$25.000",
          email: "demi@amazon.com"
        },
        {
          lender: "Gapp",
          ceo:"Candice",
          position: 2,
          credit: 740,
          amount: "$25.000",
          monthlymin: "$25.000",
          email: "candice@gapp.com"
        },
        {
          lender: "On Deck",
          ceo:"Natali",
          position: 1,
          credit: 710,
          amount: "$45.000",
          monthlymin: "$25.000",
          email: "natali@ondeck.com"
        }
      ];
    return(
        <>
            <div className="flex gap-4">
                <div className="flex flex-col w-[500px] gap-4 justify-between">
                    <div className="flex flex-col items-center w-[500px] rounded-lg px-[0.8rem] py-[1rem] bg-white">
                        <div className="flex text-[1.2rem] text-[#0A2759] w-[100%] justify-between font-[500] px-[0.5rem] py-[0.5rem]">
                            Document
                            <button className="flex gap-2 border border-[#00A762] rounded-lg px-2 py-1.5 items-center text-[1rem]">
                                <FiUploadCloud /> Upload
                            </button>
                        </div>
                        <DocumentTable data={documentData} />
                    </div>
                    <div className="flex flex-col gap-2 bg-white px-[0.8rem] py-[2rem] text-[#0A2759] font-[500] rounded-lg w-[500px]">
                        <div className="flex justify-between gap-2 items-center mt-2 text-[1.2rem] items-center">
                            Filter lenders
                            <button className="text-white bg-[#00A762] px-4 py-1 rounded-[5px] text-[1rem]">Edit</button>
                        </div>
                        <div className="flex gap-2 items-center justify-between">
                            <div className="flex flex-col">
                                <label className="text-[16px]">Positions</label>
                                <input type="text" value={position} onChange={(e)=>setPosition(e.currentTarget.value)}
                                className="p-2 border border-[#B9BDC7] outline-none rounded-lg"/>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[16px]">Credit</label>
                                <input type="text" value={credit} onChange={(e)=>setCredit(e.currentTarget.value)}
                                className="p-2 border border-[#B9BDC7] outline-none rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[16px]">Amount</label>
                            <input type="text" value={amount} onChange={(e)=>setAmount(e.currentTarget.value)}
                            className="p-2 border border-[#B9BDC7] outline-none rounded-lg"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[16px]">Monthly Min</label>
                            <input type="text" value={monthlyMin} onChange={(e)=>setMonthlyMin(e.currentTarget.value)}
                            className="p-2 border border-[#B9BDC7] outline-none rounded-lg"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-xl gap-4 justify-between">
                    <div className="flex flex-col  rounded-lg bg-white py-[0.5rem]">
                        <div className="flex text-[1.2rem] text-[#0A2759] justify-between font-[500] px-[0.5rem] py-[1rem]">
                            Lenders
                        </div>
                        <LenderTable data={tableData}/>
                    </div>
                    <div className="flex flex-col gap-2 text-[#0A2759] font-[500] w-[500px] w-[100%]">
                        <div className="flex flex-col gap-2 bg-white px-[0.8rem] py-[1rem] bg-white rounded-lg">
                            <div className="flex justify-between gap-2 items-center mt-2 text-[1.2rem] items-center">
                                Template
                                <button className="text-white bg-[#00A762] px-4 py-1 rounded text-[1rem]">Edit</button>
                            </div>
                            <textarea className="flex gap-2 px-3 py-1 h-[100px] rounded-lg border border-[#D0D3D9] outline-none"> 
                                hello , please see attached deal. 
                            </textarea>
                        </div>  
                        <div className="flex gap-8 self-end">
                        <button className="text-[#C80000] font-[500]">Cancel</button>
                        <button className="text-white bg-[#00A762] px-[1rem] py-[5px] rounded-lg">Add new lender to deal</button>
                        </div>                 
                    </div>
                </div>
            </div>
        </>
    )
}