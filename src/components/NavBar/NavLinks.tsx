import { Button, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { linksList } from "../../utils/constants";



function NavLinks() {
  return (
    <List
      component={"ul"}
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        fontSize: "0.9rem",
        fontWeight: "600",
        gap: { xs: "1rem" },
        justifySelf: "center",

      }}
    >
      {linksList.map((link, i) => (
        <ListItem
          sx={{
            fontSize: "inherit",
            fontWeight: "inherit",
            "&:hover": { transform: "scale(1.02,1.02) translate(0px,-2px)" },
            transition: "0.3s",
          }}
          color="inherit"
          component={"li"}
          key={i}
        >
          <Link
            to={link.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              textTransform: "uppercase",
              fontWeight: "inherit",
              display: "inline-block",
            }}
          >
            <Button
              sx={{ fontSize: "inherit", fontWeight: "inherit" }}
              color="inherit"
            >
              {link.label}
            </Button>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default NavLinks;
