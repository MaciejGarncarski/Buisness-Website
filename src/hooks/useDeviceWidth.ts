import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

const useDeviceWidth = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(true);
  const checkDeviceWidth = () => {
    if (window.innerWidth > 1300) {
      setIsSmallDevice(false);
    } else {
      setIsSmallDevice(true);
    }
    console.log(isSmallDevice);
  };
  useEffect(() => {
    checkDeviceWidth();

    window.addEventListener("resize", debounce(checkDeviceWidth, 1000), {
      passive: true,
    });
    return () => {
      window.removeEventListener("resize", debounce(checkDeviceWidth, 1000));
    };
  }, []);
  return { isSmallDevice };
};

export default useDeviceWidth;
