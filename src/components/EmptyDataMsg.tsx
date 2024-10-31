import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EmptyDataMsg({
  message,
  withGoBack = false,
  withGoHome = false,
  navigateToPage = "",
  height = "65vh",
}: {
  message: string;
  withGoBack?: boolean;
  withGoHome?: boolean;
  height?: string;
  navigateToPage?: string;
}) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: height,
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

      {withGoBack && (
        <Typography
          component={"span"}
          variant="body1"
          sx={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => navigate(-1)}
        >
          Go back
        </Typography>
      )}

      {withGoHome && (
        <Typography
          component={"span"}
          variant="body1"
          sx={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => navigate("/home")}
        >
          Go Home
        </Typography>
      )}

      {navigateToPage && (
        <Typography
          component={"span"}
          variant="body1"
          sx={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => navigate(`/${navigateToPage}`)}
        >
          Go {navigateToPage}
        </Typography>
      )}
    </Box>
  );
}

export default EmptyDataMsg;
