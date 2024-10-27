import { Button, Toolbar } from "@mui/material";
import MuiSearchBox from "./MuiSearchBox";
import { useState } from "react";
import toast from "react-hot-toast";
import useProducts from "../../hooks/productsHooks/useProducts";
import LoadingSpinner from "../LoadingSpinner";
import { useNavigate } from "react-router-dom";

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
  const [inputId, setInputId] = useState<string>("");
  const navigate = useNavigate();

  const { allProducts = [], isError, isLoading, error } = useProducts();

  if (isLoading) {
    return <LoadingSpinner size={{ xs: "60px", sm: "80px" }} />;
  }

  if (isError) {
    return <h5>{error?.message}</h5>;
  }

  function handleSearch() {
    if (!inputValue) {
      toast.error("Please fill The Input");
      return;
    }

    navigate(`/shop/products/${inputId}`);

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
        allProducts={allProducts}
        onSelectProduct={(id) => setInputId(id)}
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
