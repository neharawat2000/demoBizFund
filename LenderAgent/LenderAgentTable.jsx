import React from "react";
import { LuEye } from "react-icons/lu";

function DocumentTable(props) {
    return(
        <>
            <table className="border-collapse w-[100%]">
                <thead className="bg-[#F7F7F7]">
                    <tr className="text-[#667085] font-[500] text-[1rem]">
                        <th className="text-left px-2 py-1.5">File name</th>
                        <th className="text-left px-2 py-1.5">Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((data, index)=>{
                            return(
                                <>
                                    <tr key={index} className="border-changes bg-white text-[#667085] text-[0.9rem]">
                                        <td className="border-t px-2 py-1.5 border-[#D0D3D9]">
                                            <div className="flex gap-4 items-center">
                                                <div className="flex flex-col ">
                                                    <div className="text-[#0A2759] font-[500]">{data.fileName}</div>
                                                    <div>{data.uploadDate}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t px-2 py-1.5 border-[#D0D3D9]">
                                            <LuEye className="inline mr-10 text-[1.2rem]"/>
                                            <span className="border border-[#EEB0B0] rounded-lg px-2 py-1 font-[500] cursor-pointer w-[100px] items-center text-[#C80000]">{data.preview}</span> 
                                        </td>
                                    </tr>
                                </>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}
function LenderTable(props) {
    return(
        <>
            <table className="border-collapse w-[100%]">
                <thead className="bg-[#F7F7F7]">
                    <tr className="text-[#667085] font-[500] text-[1rem]">
                        <th className="text-left px-2 py-1.5">Lender</th>
                        <th className="text-left px-2 py-1.5">Position</th>
                        <th className="text-left px-2 py-1.5">Credit</th>
                        <th className="text-left px-2 py-1.5">Amount</th>
                        <th className="text-left px-2 py-1.5">Monthly Min</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((data, index)=>{
                            return(
                                <>
                                    <tr key={index} className="border-changes bg-white text-[#667085] text-[0.9rem]">
                                        <td className="border-t px-2 py-1.5 border-[#D0D3D9]">
                                            <div className="flex gap-4 items-center">
                                                <div className="flex flex-col ">
                                                    <div className="text-[#0A2759] font-[500]">{data.lender} / {data.ceo}</div>
                                                    <div>{data.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t px-2 py-1.5 border-[#D0D3D9]">{data.position}</td>
                                        <td className="border-t px-2 py-1.5 border-[#D0D3D9]">{data.credit}</td>
                                        <td className="border-t px-2 py-1.5 border-[#D0D3D9]">{data.amount}</td>
                                        <td className="border-t px-2 py-1.5 border-[#D0D3D9]">{data.monthlymin}</td>
                                    </tr>
                                </>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export { DocumentTable, LenderTable };