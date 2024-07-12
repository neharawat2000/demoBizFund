import React, { useState } from "react";
import "../../Style/table.css";
import "../../Style/submissionChart.css";
import { SemicircularProgressBar } from "../../Component/SemicircularProgressBar/SemicircularProgressBar";
import Header from "../../Component/AdminHeader/Header";

export default function SubmissionChart() {
  const tableData = [
    { agent: "Ted Mosby", totalFunded: 6 },
    { agent: "Michael Scott", totalFunded: 10 },
    { agent: "Pam Beesly", totalFunded: 3 },
    { agent: "Jim Hatpert", totalFunded: 8 },
    { agent: "Dwight Shrute", totalFunded: 6 },
    { agent: "Dario Benedetto", totalFunded: 6 },
    { agent: "Nick Fury", totalFunded: 7 },
    { agent: "Tony Stark", totalFunded: 5 },
    { agent: "Natasha Romanoff", totalFunded: 2 },
    { agent: "Steve Rogers", totalFunded: 6 }
  ];

  const progressBar1 = [
    { value: 10, count: 1 },
    { value: 80, count: 8 },
    { value: 20, count: 2 },
    { value: 50, count: 5 }
  ];
  const progressBar2 = [
    { value: 50, count: 5 },
    { value: 30, count: 3 },
    { value: 30, count: 3 },
    { value: 90, count: 9 }
  ];
  const progressBar3 = [
    { value: 20, count: 2 },
    { value: 40, count: 4 },
    { value: 60, count: 6 },
    { value: 80, count: 8 }
  ];
  const progressBar4 = [
    { value: 60, count: 6 },
    { value: 20, count: 2 },
    { value: 40, count: 4 },
    { value: 100, count: 10 }
  ];

  return (
    <>
      <div className="submissionChart-container">
        <Header/>
        <div className="container">
            <table style={{width:"400px"}}>
            <thead>
                <tr>
                <th>Agent</th>
                <th>Total Funded</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, index) => {
                return (
                    <tr key={index}>
                    <td className="agent-container">
                        <div>OR</div> {data.agent}
                    </td>
                    <td>{data.totalFunded}</td>
                    </tr>
                );
                })}
            </tbody>
            </table>
            <div className="second-container">
            <div className="total-count-container">
                <div className="today-count">
                <span>103</span>
                Today's count
                </div>
                <div className="sendMail flex gap-8 items-center">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-5">
                    Date from <input type="date" />
                    </div>
                    <div className="flex items-center gap-10">
                    Date to <input type="date" />
                    </div>
                </div>
                <button className="mail">Send mail</button>
                </div>
            </div>
            <div className="countOfAgent flex flex-col bg-white rounded-xl">
                <div className="title">Count of Agent</div>
                <div className="flex justify-between gap-6 p-4" style={{ backgroundColor: "#F0F5F3" }}>
                    {progressBar1.map((data, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <SemicircularProgressBar
                                value={data.value}
                                count={data.count}
                            />
                            <div className="agent">Ted Mosby</div>
                        </div>
                    );
                    })}
                </div>
                <div className="flex justify-between gap-6 p-4">
                {progressBar2.map((data, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center gap-4">
                        <SemicircularProgressBar
                            value={data.value}
                            count={data.count}
                        />
                        <div className="agent">Ted Mosby</div>
                        </div>
                    );
                    })}
                </div>
                <div className="flex justify-between gap-6 p-4" style={{ backgroundColor: "#F0F5F3" }}>
                {progressBar3.map((data, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center gap-4">
                        <SemicircularProgressBar
                            value={data.value}
                            count={data.count}
                        />
                        <div className="agent">Ted Mosby</div>
                        </div>
                    );
                    })}
                </div>
                <div className="flex justify-between gap-6 p-4">
                {progressBar4.map((data, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center gap-4">
                        <SemicircularProgressBar
                            value={data.value}
                            count={data.count}
                        />
                        <div className="agent">Ted Mosby</div>
                        </div>
                    );
                    })}
                </div>
            </div>
            </div>
        </div>
        
      </div>
    </>
  );
}
