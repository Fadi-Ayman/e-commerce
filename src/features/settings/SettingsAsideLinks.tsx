import {
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { SettingsAsideLinksArray } from "../../utils/constants";
import { useState, useEffect } from "react";
import LogoutButton from "../../components/OneTruthyLogicPlaceButtons/LogoutButton";

function SettingsAsideLinks() {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  const [selectValue, setSelectValue] = useState<string>(
    SettingsAsideLinksArray.find((link) => link.href === pathName)?.href ||
      SettingsAsideLinksArray[0].href
  );

  useEffect(() => {
    const validLink = SettingsAsideLinksArray.find(
      (link) => link.href === pathName
    );
    setSelectValue(
      validLink ? validLink.href : SettingsAsideLinksArray[0].href
    );
  }, [pathName]);

  const handleSelectPageChange = (e: SelectChangeEvent<string>) => {
    const newValue = e.target.value;
    setSelectValue(newValue);
    navigate(newValue);
  };

  return (
    <>
      {/* From Small(xs) to Medium(md) */}
      <FormControl sx={{ display: { xs: "", md: "none" } }} fullWidth>
        <InputLabel id="demo-simple-select-label">Page</InputLabel>
        <Select
          id="demo-simple-select"
          value={selectValue}
          label="Page"
          onChange={handleSelectPageChange}
        >
          {SettingsAsideLinksArray.map((link, i) => (
            <MenuItem key={i} value={link.href}>
              {link.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* From Medium(md) to XLarge(lg) */}
      <List sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
        {SettingsAsideLinksArray.map((link, i) => (
          <ListItem
            disablePadding
            sx={{
              borderBottom: pathName === link.href ? "1px solid black" : "",
              mt: "0.5rem",
            }}
            key={i}
          >
            <ListItemButton
              component={"button"}
              onClick={() => navigate(link.href)}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Logout Button */}
        <ListItem
          disablePadding
          sx={{
            mt: "2rem",
            display: { xs: "none", md: "block" },
            width: "100%",
          }}
        >
          <LogoutButton place="userProfile" />
        </ListItem>
      </List>
    </>
  );
}

export default SettingsAsideLinks;
