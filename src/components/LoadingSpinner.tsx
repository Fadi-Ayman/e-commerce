import { Box } from "@mui/material";

type LoadingSpinnerProps = {
  size?: { xs: string; sm: string };
};

function LoadingSpinner({
  size = { xs: "60px", sm: "100px" },
}: LoadingSpinnerProps) {
  return (
    <Box
      className="loader"
      sx={{
        width: size,
        height: size,
      }}
    ></Box>
  );
}

export default LoadingSpinner;
