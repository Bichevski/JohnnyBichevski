import cn from "classnames";
import React, { useEffect, useState } from "react";

function getTimeNumber(value) {
  const str = String(value);
  if (value < 10) {
    return "0" + str;
  }
  return str;
}

const Time = ({className = ""}) => {
  const [time, setTime] = useState({ hours: 12, minutes: 0 });

  useEffect(() => {
    const updateTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        setTime({ hours, minutes });
      };

    const timerId = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(timerId);
  }, []);

  return (
    <span className={cn("time", className)}>{`${getTimeNumber(
      time.hours
    )}:${getTimeNumber(time.minutes)}`}</span>
  );
};

export default Time;
