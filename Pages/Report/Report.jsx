import React from "react";
import ReportTable from "../../Component/Tables/ReportTable/ReportTable";
import Header from "../../Component/AdminHeader/Header";
import "../../Style/report.css"

export default function Report(){
    const data=[
        {
            companyName: "Thomas Carrefour",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Apple",
            fundedAmount: "$8.00",
            upwell: "8%",
            split:"BV9000",
            teamCM: "BV9000",
            leader: "Bradon"
        },
        {
            companyName: "Ignacio Fravega",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Musimundo",
            fundedAmount: "$7.00",
            upwell: "22%",
            split:"BV3626",
            teamCM: "BV3626",
            leader: "Brandon"
        },
        {
            companyName: "Ximena Logitech",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Volkswagen",
            fundedAmount: "$12.00",
            upwell: "32%",
            split:"BV8649",
            teamCM: "BV8649",
            leader: "Brandon"
        },
        {
            companyName: "Nicolas Ikea",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Sony",
            fundedAmount: "$40,000",
            upwell: "21%",
            split:"BV1538",
            teamCM: "BV1538",
            leader: "Alex"
        },
        {
            companyName: "Juan Fernado",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Motorola",
            fundedAmount: "$90,000",
            upwell: "21%",
            split:"BV7327",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Lima Philips",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "philips",
            fundedAmount: "$370.00",
            upwell: "10%",
            split:"BV8462",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Micheael Messi",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Waynimovil",
            fundedAmount: "$30.00",
            upwell: "9%",
            split:"BV9275",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Lana Del Rey",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Soulmax",
            fundedAmount: "$15.00",
            upwell: "10%",
            split:"BV1652",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Ariana Grande",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "TLC",
            fundedAmount: "$1,10,000",
            upwell: "12%",
            split:"BV7363",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Juan Fernado",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Motorola",
            fundedAmount: "$90,000",
            upwell: "21%",
            split:"BV7327",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Lima Philips",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "philips",
            fundedAmount: "$370.00",
            upwell: "10%",
            split:"BV8462",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Micheael Messi",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Waynimovil",
            fundedAmount: "$30.00",
            upwell: "9%",
            split:"BV9275",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Lana Del Rey",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Soulmax",
            fundedAmount: "$15.00",
            upwell: "10%",
            split:"BV1652",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Ariana Grande",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "TLC",
            fundedAmount: "$1,10,000",
            upwell: "12%",
            split:"BV7363",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Juan Fernado",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Motorola",
            fundedAmount: "$90,000",
            upwell: "21%",
            split:"BV7327",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Lima Philips",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "philips",
            fundedAmount: "$370.00",
            upwell: "10%",
            split:"BV8462",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Micheael Messi",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Waynimovil",
            fundedAmount: "$30.00",
            upwell: "9%",
            split:"BV9275",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Lana Del Rey",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Soulmax",
            fundedAmount: "$15.00",
            upwell: "10%",
            split:"BV1652",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Ariana Grande",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "TLC",
            fundedAmount: "$1,10,000",
            upwell: "12%",
            split:"BV7363",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Juan Fernado",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Motorola",
            fundedAmount: "$90,000",
            upwell: "21%",
            split:"BV7327",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Lima Philips",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "philips",
            fundedAmount: "$370.00",
            upwell: "10%",
            split:"BV8462",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Micheael Messi",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Waynimovil",
            fundedAmount: "$30.00",
            upwell: "9%",
            split:"BV9275",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Lana Del Rey",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "Soulmax",
            fundedAmount: "$15.00",
            upwell: "10%",
            split:"BV1652",
            teamCM: "",
            leader: ""
        },
        {
            companyName: "Ariana Grande",
            payrollAmount: "$8.00",
            date: "15/10/2023",
            agent: "Thomas Carrefour",
            companyNamefunded: "TLC",
            fundedAmount: "$1,10,000",
            upwell: "12%",
            split:"BV7363",
            teamCM: "",
            leader: ""
        }
    ]
    return(
        <>
            <div className="reportContainer">
                <Header/>
                <div className="container">
                    <div className="container-menu">
                        <div className="sendMail">Send mail</div>
                        <div className="paid">Paid by lender</div>
                        <div className="p-3">Totals</div>
                        <div className="p-3">$32,902</div>
                    </div>
                    <ReportTable data={data}/>
                </div>
            </div>
        </>
    );
}