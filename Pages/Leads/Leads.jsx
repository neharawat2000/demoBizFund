import React from "react";
import LeadTable from "../../Component/Tables/LeadTable/LeadTable";
import Header from "../../Component/AdminHeader/Header";
import "../../Style/report.css";

export default function Leads(){
    const data=[
        {
            companyName:"Apple",
            firstName:"Steve",
            lastName:"jobs",
            email:"stevejobs@apple.com",
            phoneNo:"43222112",
            city: "$8.000",
            street:"$10.000",
            tag:"BV9000"
        },
        {
            companyName:"Musimundo",
            firstName:"Marcelo",
            lastName:"Tinelli",
            email:"mtinelli@musimundo.com",
             phoneNo:"43222112",
            city: "$7.000",
            street:"$10.000",
            tag:"BV3626"
        },
        {
            companyName:"Volkswagen",
            firstName:"Thomas",
            lastName:"Shelby",
            phoneNo:"43222112",
            email:"tshelby@volkswagen.com",
            city: "$12.000",
            street:"$15.000",
            tag:"BV8649"
        },
        {
            companyName:"Sony",
            firstName:"Han",
            lastName:"Solo",
            phoneNo:"43222112",
            email:"hansolo@sony.com",
            city: "$40.000",
            street:"$60.000",
            tag:"BV1538"
        },
        {
            companyName:"Motorola",
            firstName:"Luke",
            lastName:"Skywalker",
             phoneNo:"43222112",
            email:"skywalker@motorola.com",
            city: "$90.000",
            street:"$100.000",
            tag:"BV7327"
        },
        {
            companyName:"Philips",
            firstName:"Amanda",
            lastName:"Seyfried",
            phoneNo:"43222112",
            email:"aseyfried@philips.com",
            city: "$370.000",
            street:"$400.000",
            tag:"BV8462"
        },
        {
            companyName:"Waynimovil",
            firstName:"Juan",
            lastName:"Carlo",
            phoneNo:"43222112",
            email:"juancarlowaynimovil.com",
            city: "$30.000",
            street:"$50.000",
            tag:"BV9275"
        },
        {
            companyName:"Soulmax",
            firstName:"Dylan",
            lastName:"Scott",
            phoneNo:"43222112",
            email:"dylanscott@soulmax.com",
            city: "$110.000",
            street:"$30.000",
            tag:"BV1652"
        },
        {
            companyName:"TLC",
            firstName:"Tessa",
            lastName:"Thomson",
             phoneNo:"43222112",
            email:"tessathomson@tlc.com",
            city: "$110.000",
            street:"$120.000",
            tag:"BV7363"
        },
        {
            companyName:"Waynimovil",
            firstName:"Juan",
            lastName:"Carlo",
            phoneNo:"43222112",
            email:"juancarlowaynimovil.com",
            city: "$30.000",
            street:"$50.000",
            tag:"BV9275"
        },
        {
            companyName:"Soulmax",
            firstName:"Dylan",
            lastName:"Scott",
            phoneNo:"43222112",
            email:"dylanscott@soulmax.com",
            city: "$110.000",
            street:"$30.000",
            tag:"BV1652"
        },
        {
            companyName:"TLC",
            firstName:"Tessa",
            lastName:"Thomson",
             phoneNo:"43222112",
            email:"tessathomson@tlc.com",
            city: "$110.000",
            street:"$120.000",
            tag:"BV7363"
        },
        {
            companyName:"Waynimovil",
            firstName:"Juan",
            lastName:"Carlo",
            phoneNo:"43222112",
            email:"juancarlowaynimovil.com",
            city: "$30.000",
            street:"$50.000",
            tag:"BV9275"
        },
        {
            companyName:"Soulmax",
            firstName:"Dylan",
            lastName:"Scott",
            phoneNo:"43222112",
            email:"dylanscott@soulmax.com",
            city: "$110.000",
            street:"$30.000",
            tag:"BV1652"
        },
        {
            companyName:"TLC",
            firstName:"Tessa",
            lastName:"Thomson",
             phoneNo:"43222112",
            email:"tessathomson@tlc.com",
            city: "$110.000",
            street:"$120.000",
            tag:"BV7363"
        },
        {
            companyName:"Waynimovil",
            firstName:"Juan",
            lastName:"Carlo",
            phoneNo:"43222112",
            email:"juancarlowaynimovil.com",
            city: "$30.000",
            street:"$50.000",
            tag:"BV9275"
        },
        {
            companyName:"Soulmax",
            firstName:"Dylan",
            lastName:"Scott",
            phoneNo:"43222112",
            email:"dylanscott@soulmax.com",
            city: "$110.000",
            street:"$30.000",
            tag:"BV1652"
        },
        {
            companyName:"TLC",
            firstName:"Tessa",
            lastName:"Thomson",
             phoneNo:"43222112",
            email:"tessathomson@tlc.com",
            city: "$110.000",
            street:"$120.000",
            tag:"BV7363"
        },
        {
            companyName:"Waynimovil",
            firstName:"Juan",
            lastName:"Carlo",
            phoneNo:"43222112",
            email:"juancarlowaynimovil.com",
            city: "$30.000",
            street:"$50.000",
            tag:"BV9275"
        },
        {
            companyName:"Soulmax",
            firstName:"Dylan",
            lastName:"Scott",
            phoneNo:"43222112",
            email:"dylanscott@soulmax.com",
            city: "$110.000",
            street:"$30.000",
            tag:"BV1652"
        },
        {
            companyName:"TLC",
            firstName:"Tessa",
            lastName:"Thomson",
             phoneNo:"43222112",
            email:"tessathomson@tlc.com",
            city: "$110.000",
            street:"$120.000",
            tag:"BV7363"
        },
    ];
    return(
        <>
            <div className="leadContainer">
                <Header/>
                <LeadTable data={data}/>
            </div>
        </>
    );
}