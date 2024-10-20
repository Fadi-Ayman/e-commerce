import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Divider, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";
import DrawerSearchSection from "../SearchInputPack/AppMainSearchBox";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { NavLink, userSetting } from "../../Types/Types";
import LogoutButton from "../OneTruthyLogicPlaceButtons/LogoutButton";

const linksListDrawer: NavLink[] = [
  {
    label: "Home",
    icon: <HomeOutlinedIcon />,
    href: "/home",
  },
  {
    label: "Shop",
    icon: <LocalMallOutlinedIcon />,
    href: "/shop",
  },
  {
    label: "About",
    icon: <InfoOutlinedIcon />,
    href: "/about",
  },
  {
    label: "Contact Us",
    icon: <ConnectWithoutContactOutlinedIcon />,
    href: "/contact",
  },
];

const userSettingsListDrawer: userSetting[] = [
  { label: "Settings", icon: <SettingsOutlinedIcon />, href: "/settings" },
  { label: "Login", icon: <LoginOutlinedIcon />, href: "/login" },
];

export default function DrawerNav() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: { xs: "70vw", sm: "300px" } }} role="presentation">
      <DrawerSearchSection
        fontColor="black"
        Inputsize="small"
        toggleDrawer={toggleDrawer(false)}
      />

      <Divider />
      <List onClick={toggleDrawer(false)}>
        {linksListDrawer.map((link, i) => (
          <Link to={link.href} key={i} style={{ textDecoration: "none" }}>
            <ListItem>
              <ListItemButton sx={{ color: theme.palette.grey[700] }}>
                <ListItemIcon sx={{ color: theme.palette.grey[700] }}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{ color: theme.palette.grey[700] }}
                  primary={link.label}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      {/* User Settings */}
      <List onClick={toggleDrawer(false)}>
        {userSettingsListDrawer.map(
          (link, i) =>
            link.href && (
              <Link to={link.href} key={i} style={{ textDecoration: "none" }}>
                <ListItem>
                  <ListItemButton sx={{ color: theme.palette.grey[700] }}>
                    <ListItemIcon sx={{ color: theme.palette.grey[700] }}>
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: theme.palette.grey[700] }}
                      primary={link.label}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
        )}
        {/* After Looping Login button not link (separated Logic component) */}
        <LogoutButton place="drawer" />
      </List>
    </Box>
  );

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          mr: "2px",
          display: { sm: "flex", md: "none" },
          height: "50px",
          width: "50px",
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
