import { Box, Typography } from "@mui/material";

function ShopImageContainer() {
  return (
    <Box
      sx={{
        mx: "auto",
        width: {
          xs: "calc(99.8%)",
          sm: "calc(100% - (1rem*2))",
          md: "calc(100% - (1rem*2))",
          lg: "calc(100% - (5rem*2))",
          xl: "calc(100% - (7rem*2))",
        },
        height: { xs: "20rem", sm: "25rem", md: "32rem" },
        backgroundColor: "grey.200",
        backgroundImage: {
          xs: "url('/shopPageImage-sm.png')",
          md: "url('/shopPageImage.png')",
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        padding: " 0rem  2rem 3rem 2rem",
        mb:{ xs:"2rem",md:"3rem"},
      }}
    >
      <Typography
        component={"h2"}
        sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: "500" }}
      >
        Shop Page
      </Typography>

      <Typography
        component={"p"}
        sx={{
          fontSize: { xs: "1.1rem", md: "1.3rem" },
          textAlign: "center",
          fontWeight: "400",
        }}
      >
        Let’s design the place you always imagined.
      </Typography>
    </Box>
  );
}

export default ShopImageContainer;
