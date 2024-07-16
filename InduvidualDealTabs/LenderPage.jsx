// src/components/companyNameScreen.js
import React from 'react';
// import ReusableTable from '../../../../common/tables/Table';
// import companyNameTable from '../../../../common/tables/companyNameTable';
// import { FaPencilAlt } from 'react-icons/fa';
// import { LabeledInput } from '../../../../common/components/LeadComponent/CommonTextField';
// import { useSelector } from 'react-redux';
// import { IoIosAddCircleOutline } from "react-icons/io";
// import companyNameTables from './companyNameTable';

import cocacolaAvtar from "../../../../data/cocacola.png";
import ondeckAvtar from "../../../../data/ondeck.png";
import amazonAvtar from "../../../../data/amazon.png";
import gapAvtar from "../../../../data/gap.png";
import fordAvtar from "../../../../data/ford.png";
import { LenderTableOne, LenderTableTwo } from './LenderTable';

const companyNamePage = () => {
  // const role = useSelector((state) => state.role);
   const dataOne=[
    {   avtar:fordAvtar,
        companyName: "Ford / Phoenix",
        email: "phoenix@ford.com",
        status: "Approved",
        frequency: "Weekly",
        fundingAmount: "$250.00",
        paybackAmount: "$342.50",
        hashofPayments: 48,
        Payment: "$7.14",
        factorRate: 1.37
    },
    {   avtar:cocacolaAvtar,
        companyName: "Coke / Lana",
        email: "lana@coke.com",
        status: "Approved",
        frequency: "Daily",
        fundingAmount: "$250.00",
        paybackAmount: "$342.50",
        hashofPayments: 48,
        Payment: "$7.14",
        factorRate: 1.37
    }
]

const Tabledata=[
  {   avtar:fordAvtar,
      companyName: "Ford / Phoenix",
      email: "phoenix@ford.com",
      status: "Pending",
      comment: "07/06/2023, 4:44:25 PM"
  },
  {   avtar:cocacolaAvtar,
      companyName: "Coke / Lana",
      email: "lana@coke.com",
      status: "Pending",
      comment: "07/06/2023, 4:44:25 PM"
  },
  {   avtar:amazonAvtar,
      companyName: "Amazon / Demi",
      email: "demi@amazon.com",
      status: "Pending",
      comment: "07/06/2023, 4:44:25 PM"
  },
  {   avtar:gapAvtar,
      companyName: "Gapp/Candice",
      email: "candice@gapp.com",
      status: "Declined",
      comment: "Length in business"
  },
  {   avtar:ondeckAvtar,
      companyName: "On Deck / Natali",
      email: "natali@ondeck.com",
      status: "Declined",
      comment: "Poor payment history"
  }
]

  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: 'companyName',
  //       accessor: 'companyName',
  //       Cell: ({ value }) => (
  //         <div>
  //           <div className="text-good-morning-text font-semibold">{value.company}/{value.ceoFirstName}</div>
  //           <div>{value.ceoMail}</div>
  //         </div>
  //       ),
  //     },
  //     {
  //       Header: 'Status',
  //       accessor: 'status',
  //       Cell: ({ value }) => (
  //         <div className={`flex items-center space-x-2 px-2 py-1 ${value === 'Decline' ? 'bg-declined-bgcolor' : value === 'Approved' ? 'bg-operation-green' : 'bg-pending-background'} text-white rounded-2xl border w-28`}>
  //           <span className={`h-2 w-2 ${value === 'Decline' ? 'bg-red-600' : value === 'Approved' ? 'bg-green-500' : 'bg-pendingText'} rounded-full`}></span>
  //           <span className={`${value === 'Decline' ? 'text-red-600' : value === 'Approved' ? 'text-approved-text' : 'text-pendingText'} font-semibold`}>{value}</span>
  //         </div>
  //       ),
  //     },
  //     {
  //       Header: 'Comments',
  //       accessor: 'comments',
  //     },
  //     {
  //       Header: 'Edit',
  //       accessor: 'edit',
  //       Cell: () => (
  //         <div className="flex ">
  //           <FaPencilAlt className="text-gray-600 cursor-pointer" />
  //         </div>
  //       ),
  //     },
  //   ],
  //   []
  // );

  // const filtercompanyNameColumns = React.useMemo(
  //   () => [
  //     {
  //       Header: 'companyName',
  //       accessor: 'companyName',
  //       Cell: ({ value }) => (
  //         <div>
  //           <div className="text-good-morning-text font-semibold">{value.company}/{value.ceoFirstName}</div>
  //           <div>{value.ceoMail}</div>
  //         </div>
  //       ),
  //     },
  //     {
  //       Header: 'Positions',
  //       accessor: 'positions',
  //     },
  //     {
  //       Header: 'Credit',
  //       accessor: 'credit',
  //     },
  //     {
  //       Header: 'Amount',
  //       accessor: 'amount',
  //     },
  //     {
  //       Header: 'Monthly min',
  //       accessor: 'monthlyMin',
  //     },
  //     {
  //       Header: 'Add companyName to deal',
  //       accessor: 'edit',
  //       Cell: () => (
  //         <div className="flex ">
  //           <IoIosAddCircleOutline className="text-gray-600 cursor-pointer" size={30} />
  //         </div>
  //       ),
  //     },
  //   ],
  //   []
  // );

  // const data = React.useMemo(
  //   () => [
  //     {
  //       companyName: {
  //         company: 'Apple',
  //         ceo: 'Jeff Bezoz',
  //         ceoFirstName: 'Jeff',
  //         ceoLastName: 'Bezoz',
  //         ceoMail: 'jeff@apple.com'
  //     },
  //       status: 'Pending',
  //       comments: 'This is Comment '
  //     },
  //     {
  //       companyName: {
  //         company: 'Coke',
  //         ceo: 'Jeff Bezoz',
  //         ceoFirstName: 'Lana',
  //         ceoLastName: 'Bezoz',
  //         ceoMail: 'jeff@apple.com'
  //     },
  //       status: 'Pending',
  //       comments: 'This is Comment 2'
  //     },
  //     {
  //       companyName: {
  //         company: 'Apple',
  //         ceo: 'Jeff Bezoz',
  //         ceoFirstName: 'Jeff',
  //         ceoLastName: 'Bezoz',
  //         ceoMail: 'jeff@apple.com'
  //     },
  //       status: 'Pending',
  //       comments: 'This is Comment '
  //     },
  //     {
  //       companyName: {
  //         company: 'Apple',
  //         ceo: 'Jeff Bezoz',
  //         ceoFirstName: 'Jeff',
  //         ceoLastName: 'Bezoz',
  //         ceoMail: 'jeff@apple.com'
  //     },
  //       status: 'Pending',
  //       comments: 'This is Comment '
  //     },
  //     {
  //       companyName: {
  //         company: 'Apple',
  //         ceo: 'Jeff Bezoz',
  //         ceoFirstName: 'Jeff',
  //         ceoLastName: 'Bezoz',
  //         ceoMail: 'jeff@apple.com'
  //     },
  //       status: 'Pending',
  //       comments: 'This is Comment '
  //     },
  //     {
  //       companyName: {
  //         company: 'Apple',
  //         ceo: 'Jeff Bezoz',
  //         ceoFirstName: 'Jeff',
  //         ceoLastName: 'Bezoz',
  //         ceoMail: 'jeff@apple.com'
  //     },
  //       status: 'Pending',
  //       comments: 'This is Comment '
  //     },
     
  //     // Add more data as needed
  //   ],
  //   []
  // );

  // const usecompanyNameData = React.useMemo(
  //   () => [
  //     {
  //       companyName: {
  //         company: 'Apple',
  //         ceo: 'Jeff Bezoz',
  //         ceoFirstName: 'Jeff',
  //         ceoLastName: 'Bezoz',
  //         ceoMail: 'jeff@apple.com'
  //     },
  //     positions: '2',
  //       credit: '610',
  //       amount: '$10.000',
  //       monthlyMin: '$25.000'
  //     },
  //     {
  //       companyName: {
  //         company: 'Coke',
  //         ceo: 'Jeff Bezoz',
  //         ceoFirstName: 'Lana',
  //         ceoLastName: 'Bezoz',
  //         ceoMail: 'jeff@apple.com'
  //     },
  //     positions: '2',
  //       credit: '680',
  //       amount: '$10.000',
  //       monthlyMin: '$25.000'
  //     },
  //     {
  //       companyName: {
  //         company: 'Amazon',
  //         ceo: 'Jeff Bezoz',
  //         ceoFirstName: 'Demi',
  //         ceoLastName: 'Bezoz',
  //         ceoMail: 'jeff@apple.com'
  //     },
  //     positions: '2',
  //       credit: '700',
  //       amount: '$10.000',
  //       monthlyMin: '$25.000'
  //     },
  //     {
  //       companyName: {
  //         company: 'Apple',
  //         ceo: 'Jeff Bezoz',
  //         ceoFirstName: 'Jeff',
  //         ceoLastName: 'Bezoz',
  //         ceoMail: 'jeff@apple.com'
  //     },
  //     positions: '2',
  //       credit: '740',
  //       amount: '$10.000',
  //       monthlyMin: '$25.000'
  //     },
      
     
  //     // Add more data as needed
  //   ],
  //   []
  // );

  return (
    <>
    <div className=" my-5 rounded-lg  ml-1 ">
    <div className="bg-white flex justify-between w-full mr-14 mt-6 py-5 rounded-3xl">
         <div className="flex items-center">
           <div className="ml-8 text-good-morning-text font-bold text-xl">
             companyNames
           </div>
         </div>
         <div className="bg-white flex gap-4">
           <div className="mt-3 mr-8 h-9 px-14 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer">
             Add new companyName
           </div>
           <div className="mt-3 mr-8 h-9 px-7 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer">
             Edit
           </div>
         </div>
       
    </div>
    <div className="h-96 ">
      <LenderTableOne data={dataOne}/>
      <LenderTableTwo data={Tabledata}/>
    </div>
    </div>
    </>

  //   <div className=" my-5 rounded-lg  ml-1 ">
  //     {role == 'operations' ?
  //     <div>
  //      <div className="bg-white rounded-lg py-5 px-7 h-full">
  //               <div className="text-lg mb-6 font-semibold text-good-morning-text">
  //                 Filter companyNames
               
  //             </div>
  //             <div className="space-y-7">
  //               <div className="flex space-x-4">
  //                 <LabeledInput label={'Positions'} placeholder={'Enter Positions'} />
  //                 <LabeledInput label={'Credit'} placeholder={'Enter credit'} />
  //                 <LabeledInput label={'Amount'} placeholder={'Enter Amount'} />
  //                 <LabeledInput label={'Monthly Minimum'} placeholder={'Enter monthly minimum '} />
  //               </div>
  //             </div>
              
  //           </div> 
  //           {/* <div className="h-96 "> */}
  //       {/* <companyNameTable columns={filtercompanyNameColumns} data={companyNameData} /> */}
  //     {/* </div> */}
  //           </div> : null
  //  }
  //     <div className="bg-white flex justify-between w-full mr-14 my-6 py-5">
  //       <div className="flex items-center">
  //         <div className="ml-8 text-good-morning-text font-bold text-xl">
  //           companyNames
  //         </div>
  //       </div>
  //       <div className="bg-white flex gap-4">
  //         <div className="mt-3 mr-8 h-9 px-14 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer">
  //           Add new companyName
  //         </div>
  //         <div className="mt-3 mr-8 h-9 px-7 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer">
  //           Edit
  //         </div>
  //       </div>
       
  //     </div>
  //     <div className="h-96 ">
        // <LenderTableOne data={dataOne}/>
        // <LenderTableTwo data={Tabledata}/>
  //     </div>
  //     <div className="h-2"></div>
  //   </div>
  );
};

export default companyNamePage;


