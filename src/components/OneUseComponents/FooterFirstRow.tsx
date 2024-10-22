import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { linksList } from "../../utils/constants";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function FooterFirstRow() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: { xs: "1.2rem", md: "2rem" },
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* LeftSide */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: "1rem", md: "1.5rem" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo
          color="white"
          width={{ xs: "100px", md: "100px" }}
          height={{ xs: "25px", md: "25px" }}
        />

        <ResponsiveDivider />

        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "0.9rem",
            fontWeight: "500",
          }}
          component={"p"}
        >
          multi-category store
        </Typography>
      </Box>

      {/* RightSide */}
      <List
        component={"ul"}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          fontSize: { xs: "13px", md: "14px" },
        }}
      >
        {linksList.map((link, i) => (
          <ListItem
            sx={{
              fontSize: "inherit",
              fontWeight: "500",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            color="inherit"
            component={"li"}
            key={i}
          >
            <Link
              to={link.href}
              style={{
                textDecoration: "none",
                textAlign: "center",

                color: "inherit",
                textTransform: "uppercase",
                fontWeight: "inherit",
                display: "inline-block",
              }}
            >
              {link.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function ResponsiveDivider() {
  return (
    <>
      <Divider
        sx={{ bgcolor: "grey.200", display: { xs: "none", md: "block" } }}
        orientation="vertical"
        variant="middle"
        flexItem
      />

      <Divider
        sx={{
          bgcolor: "grey.200",
          display: { xs: "block", md: "none" },
          width: "80%",
          alignSelf: "center",
        }}
        orientation="horizontal"
        variant="middle"
        flexItem
      />
    </>
  );
}

export default FooterFirstRow;
