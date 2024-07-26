import React, { useState } from "react";
import "./AdminLeadTable";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Pagination from "./Pagination/Pagination";


export default function ReportTable(props) {
    const [currentPage, setCurrentPage] = useState(1); // Start page index from 1
    const itemsPerPage = 9;

    // Calculate the range of items to display
    const totalItems = props.data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Handler for page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
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
                <button  onClick={handlePrevious} disabled={currentPage === 1}><FaArrowLeft /> Previous</button>
                <Pagination
                    onPageChange={handlePageChange}
                    totalCount={totalItems}
                    siblingCount={1}
                    currentPage={currentPage}
                    pageSize={itemsPerPage}
                    className="my-pagination" // Optional styling class
                />
                <button onClick={handleNext} disabled={currentPage === totalPages}>Next <FaArrowRight /></button>
            </div>
        </>
    );
}