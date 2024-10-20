import { Button, Toolbar } from "@mui/material";
import MuiSearchBox from "./MuiSearchBox";
import { useState } from "react";
import toast from "react-hot-toast";

type AppMainSearchBoxProps = {
  Inputsize: "small" | "medium";
  fontColor: "black" | "white";
  toggleDrawer?: () => void;
};

function AppMainSearchBox({
  Inputsize,
  fontColor,
  toggleDrawer,
}: AppMainSearchBoxProps) {
  const [inputValue, setInputValue] = useState<string>("");

  function handleSearch() {
    if (!inputValue) {
      toast.error("Please fill The Input");
      return;
    }

    toast.success("The Search Is : " + inputValue);

    if (toggleDrawer) {
      toggleDrawer();
    }
  }

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "1.5rem",
        flexDirection: "column",
        width: "98%",
        gap: { xs: "0.5rem", md: "2rem" },
        mb: "1.5rem",
      }}
    >
      <MuiSearchBox
        inputValue={inputValue}
        onInputChange={setInputValue}
        fontColor={fontColor}
        Inputsize={Inputsize}
      />

      <Button
        fullWidth
        variant="contained"
        color="warning"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Toolbar>
  );
}

export default AppMainSearchBox;
