import React from "react";
import { TiDelete } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import "../../Style/compliance.css";
import Header from "../../Component/AdminHeader/Header";

export default function Compliance(){
    const restoreData=[
        {
            parah:" Construction Michael Jasek mike@mjasek.com 6156300483 $792.378 $935.006"
        },
        {
            parah:"Volkswagen Thomas Shelby tshelby@volkswagen.com 43222112 $12.000 $15.000"
        },
        {
            parah:"Soulmax Dylan Scott dylanscott@soulmax.com 43222112 $15.00 $30.000"
        }
    ];
    const deleteData=[
        {
            parah:" Construction Michael Jasek mike@mjasek.com 6156300483 $792.378 $935.006"
        },
    ];
    return(
        <>
        <div className="complaince-container">
            <Header/>
            <div className="container">
                <div className="restore-container">
                    <h6>Latest removed leads</h6>
                    <div className="restore-boxes">
                        {
                            restoreData.map((data, index)=>{
                                return(
                                    <div className="restore-box">
                                        <div>
                                            <TiDelete className="close-icon"/>
                                            <p>{data.parah}</p>
                                        </div>
                                        <button className="restore-btn">Restore</button>
                                    </div>
                                );
                            })
                        }
                        
                    </div>
                </div>
                <div className="delete-container">
                    <h6>Leads in queue to be removed</h6>
                    <div className="delete-boxes">
                        {
                            deleteData.map((data, index)=>{
                                return(
                                    <div className="delete-box">
                                        <div>
                                            <GoDotFill className="delete-icon"/>
                                            <p>{data.parah}</p>
                                        </div>
                                        <button className="delete-btn">Delete</button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
           
        </div>
        </>
    );
}
