import { Button, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "../../Types/Types";

type NavLinksProps = {
  linksList: NavLink[];
};

function NavLinks({ linksList }: NavLinksProps) {
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
        paddingInlineStart: {md:"15%" ,lg:"18%"},
        gap: { xs: "1rem" },
      }}
    >
      {linksList.map((link, i) => (
        <ListItem
          sx={{
            fontSize: "inherit",
            fontWeight: "inherit",
            "&:hover": { transform: "scale(1.02,1.02) translate(3px,-3px)" },
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
