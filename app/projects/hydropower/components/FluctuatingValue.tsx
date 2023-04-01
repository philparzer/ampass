"use client"

import { useState, useEffect } from "react";

interface Props {
    value: number;
    fluctuateBy: number;
}

export default function FluctuatingValue({ value, fluctuateBy }:Props) {

    const [number, setNumber] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * fluctuateBy); // Generate a random number between 0 and 2
      const newNumber = 100 + random; // Add the random number to 100 to get either 100, 101, or 102
      setNumber(newNumber);
    }, 1000 * ((Math.random()  + 1 )* 2)); // Update the number every 500 milliseconds (0.5 seconds)

    return () => clearInterval(interval);
  }, []);
    
    return (
        <>
            {number}
        </>
    )
}