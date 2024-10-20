import { AppBar, List } from "@mui/material";
import { theme } from "../../styles/theme";
import { useLocation } from "react-router-dom";

type NavbarContainerProps = {
  children: JSX.Element;
};

function NavbarContainer({ children }: NavbarContainerProps) {
  const path = useLocation().pathname;
  let navBgColor: string;
  if (path === "/" || path === "/home") {
    navBgColor = theme.palette.warning.main;
  } else {
    navBgColor = theme.palette.grey[50];
  }

  return (
    <AppBar
      component={"nav"}
      sx={{
        height: "70px",
        bgcolor: navBgColor,
        color: theme.palette.grey[700],
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
      }}
      position="static"
    >
      <List
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: {
            xs: "0 1rem",
            sm: "0 2rem",
            md: "0 2rem",
            lg: "0 5rem",
            xl: "0 7rem",
          },
        }}
        component={"ul"}
      >
        {children}
      </List>
    </AppBar>
  );
}

export default NavbarContainer;
