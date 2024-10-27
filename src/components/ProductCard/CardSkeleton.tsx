import { Box, Card, Skeleton } from "@mui/material";

function CardSkeleton({ isInSlider }: { isInSlider: boolean }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.9rem",
        boxShadow: "none",
        width: "100%",
        border: "1px solid",
        borderColor: "grey.200",
        cursor: "pointer",
        transition: "0.25s ease-in-out",
        minWidth: "100px",
        maxWidth: isInSlider
          ? { xs: "250px", md: "350px", xl: "450px" }
          : { xs: "350px", md: "230px", xl: "300px" },
      }}
    >
      {/* image */}
      <Skeleton
        variant="rectangular"
        sx={{ width: "100%", height: "100%", aspectRatio: "1/1.15" }}
      />

      {/* details */}
      <Box
        sx={{
          width: "100%",
          flexDirection: "column",
          alignSelf: "start",
          display: "flex",
          gap: "0.2rem",
          paddingLeft: "0.4rem",
          paddingBottom: "1.3rem",
        }}
      >
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "60%" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "80%" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "40%" }} />
      </Box>
    </Card>
  );
}

export default CardSkeleton;
