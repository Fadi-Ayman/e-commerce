import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EmptyDataMsg({ message,withGoBack = false }: { message: string, withGoBack?: boolean }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "65vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "500",
        gap: "1rem",
        fontSize: { xs: "1.5rem", md: "2rem" },
        textAlign: "center",
        padding: "2rem",
        bgcolor: "grey.100",
      }}
    >
      <Typography fontSize={"inherit"} fontWeight={"inherit"} component={"h3"}>
        {message}
      </Typography>

      {withGoBack && <Typography
        component={"span"}
        variant="body1"
        sx={{ cursor: "pointer", textDecoration: "underline" }}
        onClick={() => navigate("/")}
      >
        Go back
      </Typography>}
    </Box>
  );
}

export default EmptyDataMsg;
