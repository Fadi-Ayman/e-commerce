import { List } from "@mui/material";
import UserSettingsLink from "./UserSettingsLink";
import CartLink from "./CartLink";
import SearchButton from "./SearchButton";
import WishListLink from "./WishListLink";

function NavIconList() {
  return (
    <List
      sx={{
        display: "flex",
        width: "100%",
        gap: "0.2rem",
        placeContent: "end",
      }}
      component={"ul"}
      color="inherit"
    >
      <SearchButton />
      <UserSettingsLink />
      <WishListLink />
      <CartLink />
    </List>
  );
}

export default NavIconList;
