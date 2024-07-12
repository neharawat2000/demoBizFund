import React, { useState } from "react";
import "../../../Style/table.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function CommisionBoardTable(props) {
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
                        <th>Review</th>
                        <th>Date</th>
                        <th>Company Name</th>
                        <th>Funded Amount</th>
                        <th>Upsell</th>
                        <th>Lender</th>
                        <th>CM</th>
                        <th>AUP</th>
                        <th>Split</th>
                        <th>Remaining</th>
                        <th>Agent</th>
                        <th>Paid</th>
                        <th>Leader</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.slice(start, end).map((data, index)=>{
                            return(
                                <>
                                    <tr key={index}>
                                        <td><input type="checkbox" /> </td>
                                        <td>{data.date}</td>
                                        <td>{data.companyName}</td>
                                        <td>{data.fundedAmount}</td>
                                        <td>{data.upsell}</td>
                                        <td>{data.lender}</td>
                                        <td>{data.cm}</td>
                                        <td>{data.aup}</td>
                                        <td>{data.split}</td>
                                        <td>{data.remaining}</td>
                                        <td>{data.agent}</td>
                                        <td>{data.paid}</td>
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