import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MuiModal from "./../MuiModal";
import { Lorem500 } from "../../utils/dummyData";

type socialLinks = {
  icon: JSX.Element;
  href: string;
};

const socialLinks: socialLinks[] = [
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/fady_ayman890/",
  },
  {
    icon: <FacebookOutlinedIcon />,
    href: "https://web.facebook.com/fady.ayman.5095",
  },
  {
    icon: <WhatsAppIcon />,
    href: "https://wa.me/+201010279537",
  },
];

function FooterSecondRow() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        width: "100%",
        borderTop: "0.5px solid",
        borderColor: "grey.300",
        pt: { xs: "1rem", md: "0.5rem" },
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: "1.8rem", md: "2.5rem" },
          justifyContent: "ceter",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          sx={{ order: { xs: "2", md: "1" }, textAlign: "center" }}
          variant="caption"
          component={"p"}
        >
          Copyright © {new Date().getFullYear()} Fady Ayman. All rights reserved
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "2.5rem",
            justifyContent: "ceter",
            alignItems: "center",
            order: { xs: "1", md: "2" },
          }}
        >
          <MuiModal
            isCentered={false}
            modalComponent={<Typography>{Lorem500}</Typography>}
          >
            <Typography
              sx={{ cursor: "pointer" }}
              fontWeight={"500"}
              fontSize={"12px"}
              component={"p"}
            >
              Privacy Policy
            </Typography>
          </MuiModal>

          <MuiModal
            isCentered={false}
            modalComponent={<Typography>{Lorem500}</Typography>}
          >
            <Typography
              sx={{ cursor: "pointer" }}
              fontWeight={"500"}
              fontSize={"12px"}
              component={"p"}
            >
              Terms of Use
            </Typography>
          </MuiModal>
        </Box>
      </Box>
      {/* Right Side */}

      <List sx={{ display: "flex", gap: "1rem", padding: "0rem" }}>
        {socialLinks.map((link, i) => (
          <ListItemButton
            component={"a"}
            key={i}
            target="_blank"
            href={link.href}
            sx={{ color: "grey.50", padding: "0rem" }}
          >
            <ListItemText primary={link.icon} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default FooterSecondRow;
