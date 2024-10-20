import { Box, Paper, Typography } from "@mui/material";

type TimerBoxProps = {
  time: number;
  label: string;
  labelsFontSizeInRem: number;
  boxSizeInPx: number;
  boxColor?: string;
};

function TimerBox({
  time,
  label,
  labelsFontSizeInRem,
  boxSizeInPx,
  boxColor = "white",
}: TimerBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.3rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: `${boxSizeInPx}px`,
          height: `${boxSizeInPx}px`,
          backgroundColor: boxColor,
          textAlign: "center",
          borderRadius: "3px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "0.6rem",
          boxShadow: "none",
        }}
      >
        <Typography fontSize={"1.7rem"} fontWeight={"bold"}>
          {time >= 10 ? time : `0${time}`}
        </Typography>
      </Paper>

      <Typography
        fontSize={`${labelsFontSizeInRem * (1 / 1.5)}rem`}
        fontWeight={"500"}
        textTransform={"capitalize"}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default TimerBox;
