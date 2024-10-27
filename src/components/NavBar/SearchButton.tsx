import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AppMainSearchBox  from "../SearchInputPack/AppMainSearchBox";
import MuiModal from "../MuiModal";
import { useLocation } from "react-router-dom";

function SearchButton() {
  const pathName = useLocation().pathname;
  const isHomePage = pathName === "/home" || pathName === "/";
  return (
    <MuiModal
      isCentered={true}
      modalComponent={
        <AppMainSearchBox  fontColor={isHomePage ? "white" : "black"} Inputsize="medium" />
      }
    >
      <IconButton
        color="inherit"
        size="medium"
        sx={{
          height: "50px",
          width: "50px",
          display: { xs: "none", md: "flex" },
        }}
      >
        <SearchOutlinedIcon sx={{ fontSize: "1.7rem" }} />
      </IconButton>
    </MuiModal>
  );
}

export default SearchButton;
