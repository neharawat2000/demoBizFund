import React, { useState } from "react";
import "./table.css";
import { FiEdit2 } from "react-icons/fi";
import { TbPointFilled } from "react-icons/tb";

function getStatusClassName(status) {
    let className = "";
    switch (status) {
        case "Pending":
            className = "status-pending";
            break;
        case "Declined":
            className = "status-declined";
            break;
        case "Approved":
            className = "status-approved";
            break;
    }
    return className;
}
function LenderTableOne(props) {
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th className="text-left">Lender</th>
                        <th className="text-left">Status</th>
                        <th className="text-left">Fequency</th>
                        <th className="text-left">Funding Amount</th>
                        <th className="text-left">Payback Amount</th>
                        <th className="text-left"># of Payments</th>
                        <th className="text-left">Payment</th>
                        <th className="text-left">Factor Rate</th>
                        <th className="text-left">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((data, index)=>{
                            return(
                                <>
                                    <tr key={index} className="border-changes">
                                        <td>
                                            <div className="flex gap-4 items-center">
                                                <img src={data.avtar} alt="avtar"/>
                                                <div className="flex flex-col ">
                                                    <div className="company">{data.companyName}</div>
                                                    <div>{data.email}</div>
                                                </div>
                                                
                                            </div>
                                        </td>
                                        <td>
                                            <div className={getStatusClassName(data.status)}><TbPointFilled className="mr-2"/>{data.status}</div>
                                        </td>
                                        <td>{data.frequency}</td>
                                        <td>{data.fundingAmount}</td>
                                        <td>{data.paybackAmount}</td>
                                        <td>{data.hashofPayments}</td>
                                        <td>{data.Payment}</td>
                                        <td>{data.factorRate}</td>
                                        <td className="cursor-pointer"><FiEdit2 className="icon"/></td>
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
function LenderTableTwo(props) {
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th className="text-left">Lender</th>
                        <th className="text-left">Status</th>
                        <th className="text-left">Comment</th>
                        <th className="text-left">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((data, index)=>{
                            return(
                                <>
                                    <tr key={index} className="border-changes">
                                        <td className="w-70">
                                            <div className="flex gap-4 items-center">
                                                <img src={data.avtar} alt="avtar"/>
                                                <div className="flex flex-col ">
                                                    <div className="company">{data.companyName}</div>
                                                    <div>{data.email}</div>
                                                </div>
                                                
                                            </div>
                                        </td>
                                        <td className="w-36">
                                            <div className={getStatusClassName(data.status)}><TbPointFilled className="mr-2"/>{data.status}</div>
                                        </td>
                                        <td className="w-2/3">{data.comment}</td>
                                        <td className="cursor-pointer"><FiEdit2 className="icon"/></td>
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

export { LenderTableOne, LenderTableTwo };