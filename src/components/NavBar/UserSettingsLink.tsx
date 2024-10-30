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
  const { isAuthenticated } = useAuth();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setAnchorEl(null);
    navigate(path);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        textDecoration: "none",
        color: "inherit",
        display: "inline-block",
      }}
    >
      {/* Icon */}

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
        {/* Avatar */}
        <Avatar
          // Image Src if User Logged in
          src="" //  =>  /fakeUserImage.png
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

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(null);
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {isAuthenticated && <MenuItem onClick={() => handleNavigate("/settings")}>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>}

        {isAuthenticated === false && <MenuItem onClick={() => handleNavigate("/login")}>
          <ListItemIcon>
            <LoginOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>}

        { isAuthenticated && <LogoutButton
          closeMenuForNavMenu={handleCloseMenu}
          place="navbarMenu"
        />}
      </Menu>
    </Box>
  );
}

export default UserSettingsLink;
