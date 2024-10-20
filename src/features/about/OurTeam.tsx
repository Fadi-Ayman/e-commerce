import { Box, Typography } from "@mui/material";

const OurTeamList = [
  {
    name: "Marlon Mcdonald",
    jobTitle: "Product Manager",
    image: "marlon-mcdonald.png",
  },
  {
    name: "Rebecca Grand",
    jobTitle: "Graphic Designer",
    image: "rebecca-grand.png",
  },
  {
    name: "John Bailey",
    jobTitle: "Head Of Marketing",
    image: "john-bailey.png",
  },
];

function OurTeam() {
  return (
    <Box
      component={"section"}
      sx={{
        width: "90%",
        mx: "auto",
        mt: { xs: "3rem", md: "4.5rem" },
        mb: { xs: "0.5rem", md: "0.5rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
      }}
    >
      {/* Title */}
      <Typography
        component={"h3"}
        variant="h3"
        fontWeight={"bold"}
        fontSize={{ xs: "2rem", sm: "2rem", md: "2.5rem", lg: "2.3rem" }}
        sx={{}}
      >
        Our Incredible Team
      </Typography>

      {/* Images */}
      <OurTeamImages />
    </Box>
  );
}

export default OurTeam;

function OurTeamImages() {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "70%" },
        display: "grid",
        placeItems: "center",
        justifyContent: "space-between",
        mb: { xs: "2.5rem", md: "4rem" },
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr 1fr ",
          md: "1fr 1fr 1fr ",
        },
        gap: { xs: "2rem", sm: "1rem", md: "1rem", lg: "2rem" },
      }}
    >
      {OurTeamList.map((person, i) => {
        return (
          <Box
            key={i}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "1rem",
              maxHeight: {
                xs: "100%",
                sm: "220px",
                md: "250px",
                lg: "300px",
              },
              maxWidth: {
                xs: "100%",
                sm: "220px",
                md: "250px",
                lg: "300px",
              },
            }}
          >
            <img
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                borderRadius: "3px",
              }}
              src={person.image}
              alt={person.name}
            />

            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                {person.name}
              </Typography>
              <Typography>{person.jobTitle}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
