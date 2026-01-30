import React from "react";

const TimeDisplay = React.memo(({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <h2>
      {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </h2>
  );
});

export default TimeDisplay;
