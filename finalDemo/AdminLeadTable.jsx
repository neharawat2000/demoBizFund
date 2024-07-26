import React, { useState } from "react";
import "../../screens/AdminStyle/table.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Pagination from "./Pagination/Pagination";

export default function LeadTable(props) {
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

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>City</th>
                        <th>Street</th>
                        <th>Tag</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.slice(start, end).map((data, index) => (
                            <tr key={index}>
                                <td>{data.companyName}</td>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.email}</td>
                                <td>{data.phoneNo}</td>
                                <td>{data.city}</td>
                                <td>{data.street}</td>
                                <td>{data.tag}</td>
                                <td><button>Next</button></td>
                                <td><RiDeleteBinLine className="icon" /></td>
                            </tr>
                        ))
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

