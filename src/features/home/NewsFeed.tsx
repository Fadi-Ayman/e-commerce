import { Box, Link, Typography } from "@mui/material";

const NewsFeedImagesList: string[] = [
  "/newsfeedImage1.png",
  "/newsfeedImage2.png",
  "/newsfeedImage3.png",
  "/newsfeedImage4.png",
];

function NewsFeed() {
  return (
    <Box
      component={"section"}
      sx={{
        width: { xs: "90%", sm: "86%", md: "88%", lg: "85%" },
        mx: "auto",
        mt: { xs: "3rem", md: "4.5rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
      }}
    >
      {/* Content */}
      <NewsFeedContent />

      {/* Images */}
      <NewsFeedImages />
    </Box>
  );
}

export default NewsFeed;

function NewsFeedContent() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Typography
        component={"h1"}
        sx={{
          fontSize: { xs: "0.9rem", md: "1rem" },
          color: "grey.300",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        newsfeed
      </Typography>

      <Typography
        component="h5"
        sx={{
          fontSize: { xs: "2rem", md: "2.8rem" },
          lineHeight: "1",
          color: "grey.700",
          fontWeight: "500",
          textTransform: "capitalize",
        }}
      >
        Instagram
      </Typography>

      <Typography
        component="p"
        sx={{
          fontSize: { xs: "1rem", md: "1rem" },
          color: "grey.700",
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        Follow us on social media for more discount & promotions
      </Typography>

      <Link
        style={{
          color: "inherit",
          textDecoration: "none",
        }}
        href="https://www.instagram.com/fady_ayman890/"
        target="_blank"
      >
        <Typography
          component="span"
          sx={{
            fontSize: { xs: "1.1rem", md: "1.2rem" },
            lineHeight: "1",
            color: "grey.300",
            fontWeight: "500",
            textTransform: "capitalize",
            "&:hover": {
              color: "orange",
            },
          }}
        >
          @fady_ayman890
        </Typography>
      </Link>
    </Box>
  );
}

function NewsFeedImages() {
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
          sm: "repeat(4,1fr)",
        },
        gap: "1rem",
      }}
    >
      {NewsFeedImagesList.map((image, i) => {
        return (
          <Box
            key={i}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "2px",
              aspectRatio: "1/1",
              maxHeight: {
                xs: "100%",
                sm: "200px",
                md: "200px",
                lg: "220px",
              },
              maxWidth: {
                xs: "100%",
                sm: "200px",
                md: "200px",
                lg: "220px",
              },
            }}
          >
            <img
              loading="lazy"
              style={{ width: "100%", height: "100%" }}
              src={image}
              alt={image.split("/")[1].split(".")[0]}
            />
          </Box>
        );
      })}
    </Box>
  );
}
