import { Box } from "@mui/material";
import { theme } from "../../styles/theme";
import HomeImageContainerContent from "./HomeImageContainerContent";

function HomeImageConainer() {
  return (
    <Box
      component={"section"}
      sx={{
        overflow: "hidden",
        height: "95vh",
        minHeight: { xs: "40rem", lg: "50rem" },
        width: "100%",
        bgcolor: theme.palette.warning.main,
        display: "grid",
        gridTemplateColumns: { xs: "repeat(15,1fr)", lg: "repeat(40,1fr)" },
        gridTemplateRows: { xs: "repeat(50,1fr) ", lg: "repeat(25,1fr)" },
      }}
    >
      <Box
        sx={{
          gridColumn: { xs: "3/14", sm: "2/9", md: "2/9", lg: "5/20" },
          gridRow: { xs: "23/-1", sm: "11/-1", md: "10/-1", lg: "4/-1 " },
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="/person.png"
          alt="Person"
        />
      </Box>

      <HomeImageContainerContent />
    </Box>
  );
}

export default HomeImageConainer;
