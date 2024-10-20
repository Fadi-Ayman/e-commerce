import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ViewAgendaRoundedIcon from "@mui/icons-material/ViewAgendaRounded";
import { useDispatch, useSelector } from "react-redux";
import { handleLgGrid, handleSmGird } from "../../store/ProductsGridSlice";
import ViewColumnRoundedIcon from "@mui/icons-material/ViewColumnRounded";
import { RootState } from "../../store/store";

function GridTableControls() {
  const dispatch = useDispatch();

  const gridColsSm = useSelector((state: RootState) => state.ProductsGrid.sm);
  const gridColsLg = useSelector((state: RootState) => state.ProductsGrid.lg);

  const isActiveLg = (num: 3 | 4 | 5): boolean => gridColsLg === num;
  const isActiveSm = (num: 1 | 2): boolean => gridColsSm === num;

  return (
    <Box sx={{ display: "flex", gap: "0.5rem" }}>
      <IconButton
        onClick={() => dispatch(handleLgGrid(5))}
        sx={{ display: { xs: "none", md: "inline-block" } }}
        size="small"
      >
        <AppsRoundedIcon sx={{ color: isActiveLg(5) ? "black" : "grey" }} />
      </IconButton>

      <IconButton
        onClick={() => dispatch(handleLgGrid(4))}
        sx={{ display: { xs: "none", md: "inline-block" } }}
        size="small"
      >
        <ViewModuleRoundedIcon
          sx={{ color: isActiveLg(4) ? "black" : "grey" }}
        />
      </IconButton>

      <IconButton
        onClick={() => dispatch(handleLgGrid(3))}
        sx={{ display: { xs: "none", md: "inline-block" } }}
        size="small"
      >
        <ViewColumnRoundedIcon
          sx={{ color: isActiveLg(3) ? "black" : "grey" }}
        />
      </IconButton>

      <IconButton
        onClick={() => dispatch(handleSmGird(2))}
        sx={{ display: { md: "none" } }}
        size="small"
      >
        <GridViewRoundedIcon sx={{ color: isActiveSm(2) ? "black" : "grey" }} />
      </IconButton>

      <IconButton
        onClick={() => dispatch(handleSmGird(1))}
        sx={{ display: { md: "none" } }}
        size="small"
      >
        <ViewAgendaRoundedIcon
          sx={{ color: isActiveSm(1) ? "black" : "grey" }}
        />
      </IconButton>
    </Box>
  );
}

export default GridTableControls;
