import { Box, Paper, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const ContactMethodsPapersList = [
  {
    title: "Adress",
    description: "Qalyubia, Banha, Egypt",
    icon: (
      <StorefrontOutlinedIcon sx={{ fontSize: { xs: "2.5rem", lg: "3rem" } }} />
    ),
  },
  {
    title: "contact us",
    description: "+20X XXX XXX XXX",
    icon: (
      <LocalPhoneOutlinedIcon sx={{ fontSize: { xs: "2.5rem", lg: "3rem" } }} />
    ),
  },
  {
    title: "Email",
    description: "Fady.dev8@gmail.com",
    icon: (
      <MailOutlineOutlinedIcon
        sx={{ fontSize: { xs: "2.5rem", lg: "3rem" } }}
      />
    ),
  },
];

function ContactMethods() {
  return (
    <Box
      component={"section"}
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "120px",
        mt: { xs: "2rem", md: "2rem" },
        mb: { xs: "2rem", md: "3rem" },
        display: "grid",
        gap: { xs: "1rem", md: "2rem" },
        placeItems: "center",
        justifyContent:"space-between",
        gridTemplateColumns: { xs: "repeat(1,1fr)", sm: "repeat(3,1fr)" },
      }}
    >
      {ContactMethodsPapersList.map((paper, i) => {
        return (
          <ContactMethodsPaper
            key={i}
            icon={paper.icon}
            title={paper.title}
            description={paper.description}
          />
        );
      })}
    </Box>
  );
}

export default ContactMethods;

function ContactMethodsPaper({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth:"100%",
        height: "160px",
        bgcolor: theme.palette.grey[100],
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10%",
        gap: "0.3rem",
      }}
    >
      {/* Icon  */}
      {icon}
      {/* Title  */}
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "1rem",
          textTransform: "uppercase",
        }}
        component={"h6"}
        color="grey.300"
      >
        {title}
      </Typography>
      {/* description */}
      <Typography
        sx={{
          // fontWeight: "500",
          fontSize: "1rem",
        }}
        component={"p"}
        fontWeight={"500"}
        color="grey.700"
        textAlign={"center"}
      >
        {description}
      </Typography>
    </Paper>
  );
}
