import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutButton from "../OneTruthyLogicPlaceButtons/LogoutButton";
import { useAuth } from "../../context/AuthContext";

function UserSettingsLink() {
  const { isAuthenticated, userData } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);

    handleCloseMenu();
  };

  return (
    <Box
      sx={{
        textDecoration: "none",
        color: "inherit",
        display: "inline-block",
      }}
    >
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="medium"
        sx={{
          display: { xs: "none", md: "inline-block" },
          height: "50px",
          width: "50px",
        }}
        color="inherit"
      >
        <Avatar
          src={userData?.image || ""}
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "inherit",
            color: theme.palette.grey[700],
          }}
        >
          <AccountCircleOutlinedIcon
            color="inherit"
            sx={{ fontSize: "1.8rem" }}
          />
        </Avatar>
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        {isAuthenticated && (
          <MenuItem onClick={() => handleNavigate("/settings")}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        )}

        {!isAuthenticated && (
          <MenuItem onClick={() => handleNavigate("/login")}>
            <ListItemIcon>
              <LoginOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
        )}

        {isAuthenticated && (
          <LogoutButton
            closeMenuForNavMenu={handleCloseMenu}
            place="navbarMenu"
          />
        )}
      </Menu>
    </Box>
  );
}

export default UserSettingsLink;
