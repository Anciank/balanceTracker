"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when component unmounts
    return () => clearInterval(timerID);
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div className="flex justify-center">
      <h1
        suppressHydrationWarning
        className="text-8xl mt-12 dm-serif-text-regular w-96 text-center"
      >
        {time.toLocaleTimeString([], { hour12: false })}
      </h1>
    </div>
  );
};

export default Header;
