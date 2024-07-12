import React from "react";
import "../../Style/submissionChart.css";

const SemicircularProgressBar = ({ value, count }) => {
  return (
    <>
      <div role="progressbar" aria-valuenow={value} style={{ '--value': value }}>
        {count}
      </div>
    </>
  );
};

export { SemicircularProgressBar };