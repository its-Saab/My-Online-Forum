import React from "react";

export default function Date({ dateString }) {
    // Constants
    const convertedDate = dateString.split("T")[0];
  
    return (
      <span className="Date">
        {convertedDate}
      </span>
    );
  }