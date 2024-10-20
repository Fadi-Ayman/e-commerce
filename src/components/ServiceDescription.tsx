import { Box, Paper, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { theme } from "../styles/theme";
import { useLocation } from "react-router-dom";

const serviceDescriptionPapersList = [
  {
    title: "Free Shipping",
    description: "order above $200",
    icon: (
      <LocalShippingOutlinedIcon
        sx={{ fontSize: { xs: "3rem", lg: "3.5rem" } }}
      />
    ),
  },
  {
    title: "Money-back",
    description: "30 days guarantee",
    icon: (
      <CreditScoreOutlinedIcon
        sx={{ fontSize: { xs: "3rem", lg: "3.5rem" } }}
      />
    ),
  },
  {
    title: "Secure Payments",
    description: "Secured by Stripe",
    icon: <LockOutlinedIcon sx={{ fontSize: { xs: "3rem", lg: "3.5rem" } }} />,
  },
  {
    title: "24/7 Support",
    description: "Phone and Email support",
    icon: (
      <LocalPhoneOutlinedIcon sx={{ fontSize: { xs: "3rem", lg: "3.5rem" } }} />
    ),
  },
];



function ServiceDescription() {
  const pathName = useLocation().pathname
  const isContactPage = pathName === "/contact" 


  return (
    <Box
      component={"section"}
      sx={{
        width: isContactPage? "100%":{ xs: "85%", sm: "86%", md: "88%", lg: "80%" },
        height: "100%",
        mx: "auto",
        minHeight: "120px",
        mt: { xs: "2.5rem", md: "3rem" },
        display: "grid",
        gap: { xs: "0.5rem", md: "1rem" },
        placeItems: "center",
        gridTemplateColumns: { xs: "repeat(2,1fr)", sm: "repeat(4,1fr)" },
        bgcolor: isContactPage? "grey.100":"transparent"
      }}
    >
      {serviceDescriptionPapersList.map((paper, i) => {
        return (
          <ServiceDescriptionPaper
            key={i}
            icon={paper.icon}
            title={paper.title}
            description={paper.description}
            isContactPage={isContactPage}
          />
        );
      })}
    </Box>
  );
}

export default ServiceDescription;

function ServiceDescriptionPaper({
  icon,
  title,
  description,
  isContactPage
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  isContactPage:boolean
}) {
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "280px" },
        height: { xs: "140px", sm: "160px", md: "190px" },
        bgcolor: theme.palette.grey[100],
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: isContactPage ? "center" : "start",
        justifyContent: "center",
        padding: "10%",
        gap: "0.1rem",
      }}
    >
      {/* Icon  */}
      {icon}
      {/* Title  */}
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: { xs: "15px", sm: "14px", md: "1.1rem", lg: "1.3rem" },
        }}
        component={"h6"}
        color="inherit"
      >
        {title}
      </Typography>
      {/* description */}
      <Typography
        sx={{
          // fontWeight: "500",
          fontSize: { xs: "12px", sm: "13px", md: "1rem", lg: "1rem" },
        }}
        component={"p"}
        fontWeight={"400"}
        color="grey.300"
      >
        {description}
      </Typography>
    </Paper>
  );
}
