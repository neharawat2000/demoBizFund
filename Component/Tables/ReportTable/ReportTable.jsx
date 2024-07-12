import React, { useState } from "react";
import "../../../Style/table.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


export default function ReportTable(props) {
    const [currentPage, setCurrentPage]= useState(0);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(props.data.length / itemsPerPage);
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    
    const prevPage = () => {
    setCurrentPage(currentPage - 1);
    };

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Payroll Amount</th>
                        <th>Date</th>
                        <th>Company Name (funded)</th>
                        <th>Company Name </th>
                        <th>Funded Amount</th>
                        <th>Upwell</th>
                        <th>Split</th>
                        <th>Team CM</th>
                        <th>Leader</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.slice(start, end).map((data, index)=>{
                            return(
                                <>
                                    <tr key={index}>
                                        <td>{data.companyName}</td>
                                        <td>{data.payrollAmount}</td>
                                        <td>{data.date}</td>
                                        <td>{data.agent}</td>
                                        <td>{data.companyNamefunded}</td>
                                        <td>{data.fundedAmount}</td>
                                        <td>{data.upwell}</td>
                                        <td>{data.split}</td>
                                        <td>{data.teamCM}</td>
                                        <td>{data.leader}</td>
                                    </tr>
                                </>
                            );
                        })
                    }
                </tbody>
            </table>
            <div className="tablePages">
                <button onClick={prevPage} disabled={currentPage === 0}><FaArrowLeft /> Previous</button>
                <button onClick={nextPage} disabled={currentPage === totalPages - 1}>Next <FaArrowRight /></button>
            </div>
        </>
    );
}