import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { theme } from "../../styles/theme";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useAuth } from "../../context/AuthContext";

type LogoutButtonProps = {
  place: "drawer" | "navbarMenu" | "userProfile";
  closeMenuForNavMenu?: () => void;
};

function LogoutButton({ place, closeMenuForNavMenu }: LogoutButtonProps) {
  const { Logout } = useAuth();

  if (place === "drawer") {
    return (
      <ListItem key={Math.random()}>
        <ListItemButton
          onClick={Logout}
          sx={{ color: theme.palette.grey[700] }}
        >
          <ListItemIcon sx={{ color: theme.palette.grey[700] }}>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            sx={{ color: theme.palette.grey[700] }}
            primary={"Logout"}
          />
        </ListItemButton>
      </ListItem>
    );
  }

  if (place === "navbarMenu") {
    return (
      <MenuItem
        onClick={() => {
          Logout();
          if (closeMenuForNavMenu) closeMenuForNavMenu();
        }}
      >
        <ListItemIcon>
          <LogoutOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    );
  }

  if (place === "userProfile") {
    return (
      <ListItemButton
        component="button"
        sx={{ width: "100%" }}
        onClick={() => {
          Logout();
        }}
      >
        <ListItemIcon
          sx={{ minWidth: "0px !important", marginInlineEnd: "0.6rem" }}
        >
          <LogoutOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    );
  } else {
    return null;
  }
}

export default LogoutButton;
