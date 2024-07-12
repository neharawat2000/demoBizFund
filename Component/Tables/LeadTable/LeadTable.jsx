import React, { useState } from "react";
import "../../../Style/table.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function LeadTable(props) {
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
                        props.data.slice(start, end).map((data, index)=>{
                            return(
                                <>
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
                                        <td><RiDeleteBinLine className="icon"/></td>
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