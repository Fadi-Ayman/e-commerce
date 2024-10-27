import { Box } from "@mui/material";
import LoadingSpinner from "./LoadingSpinner";

type PageLoadingSpinnerProps = {
  height?: string;
};

function PageLoadingSpinner({ height = "50vh" }: PageLoadingSpinnerProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingSpinner />
    </Box>
  );
}

export default PageLoadingSpinner;
