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
        flexGrow: 1,
        maxWidth: "20rem",
        width: "20%",
        justifyContent: "end",
        gap: "0.2rem",
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
