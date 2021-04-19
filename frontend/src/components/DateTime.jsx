import React from "react";

export default function DateTime({ dateString }) {
  // Constants
  const convertedDate = dateString.split("T")[0];
  const convertedTime = dateString.split("T")[1].substring(0, 5);

  return (
    <p className="data-actual">
      {convertedDate} at {convertedTime}
    </p>
  );
}