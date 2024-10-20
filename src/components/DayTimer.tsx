import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import TimerBox from "./OneUseComponents/TimerBox";

type DayTimerProps = {
  date: string; // Expected to be in a format that can be parsed by Date constructor
  timerLabel: string;
  labelsFontSizeInRem?: number;
  boxSizeInPx?: number;
  boxColor?: string;
};

function DayTimer({
  date,
  timerLabel,
  labelsFontSizeInRem = 1,
  boxSizeInPx = 54,
  boxColor = "white",
}: DayTimerProps) {
  // Adjusted: Use a more reliable date parsing method
  const targetDate = new Date(date).getTime();

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = Date.now();
      const totalSeconds = Math.floor((targetDate - now) / 1000);

      // Adjusted: Check if totalSeconds is negative before proceeding
      if (totalSeconds < 0) {
        clearInterval(intervalId);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    // Adjusted: Calculate the initial remaining time immediately
    calculateTimeRemaining();

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} my={"0.5rem"}>
      <Typography fontSize={`${labelsFontSizeInRem}rem`}>
        {timerLabel}
      </Typography>

      <Box sx={{ display: "flex", gap: "0.8rem" }}>
        {/* Days */}
        <TimerBox
          time={timeRemaining.days}
          label={"days"}
          labelsFontSizeInRem={labelsFontSizeInRem}
          boxSizeInPx={boxSizeInPx}
          boxColor={boxColor}
        />
        {/* Hours */}
        <TimerBox
          time={timeRemaining.hours}
          label={"hours"}
          labelsFontSizeInRem={labelsFontSizeInRem}
          boxSizeInPx={boxSizeInPx}
          boxColor={boxColor}
        />
        {/* Minutes */}
        <TimerBox
          time={timeRemaining.minutes}
          label={"minutes"}
          labelsFontSizeInRem={labelsFontSizeInRem}
          boxSizeInPx={boxSizeInPx}
          boxColor={boxColor}
        />
        {/* Seconds */}
        <TimerBox
          time={timeRemaining.seconds}
          label={"seconds"}
          labelsFontSizeInRem={labelsFontSizeInRem}
          boxSizeInPx={boxSizeInPx}
          boxColor={boxColor}
        />
      </Box>
    </Box>
  );
}

export default DayTimer;
