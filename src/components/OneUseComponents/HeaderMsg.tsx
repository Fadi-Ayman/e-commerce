import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../../styles/theme";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

type HeaderMsgProps = {
  isHeaderMsgOpen: boolean;
  onClick: () => void;
};

const pagesToShowHeaderMessage = ["/","/home", "/about","/contact"];

function HeaderMsg({ isHeaderMsgOpen, onClick }: HeaderMsgProps) {
  const pathname = useLocation().pathname;
  const shouldShowHeaderMessage = pagesToShowHeaderMessage.includes(pathname);
  const isHomePage = pathname === "/home" || pathname === "/";
  const isShopPage = pathname === "/shop";


  if (!shouldShowHeaderMessage) return null;


  return (
    isHeaderMsgOpen && (
      <Box
        sx={{
          width: "100%",
          bgcolor: isHomePage
            ? theme.palette.grey[700]
            : theme.palette.grey[200],
          height: "2rem",
          display: isShopPage ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          gap: "0.75rem",
          position: "relative",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.3rem",
            fontWeight: isHomePage ? "400" : "500",

            color: isHomePage
              ? theme.palette.grey[50]
              : theme.palette.grey[700],
          }}
          component={"p"}
        >
          <StorefrontOutlinedIcon
            fontSize="small"
            sx={{ mb: "0.2rem", color: "inherit" }}
          />
          30% off storewide — Limited time!
        </Typography>

        <Box
          component={"span"}
          sx={{ display: { xs: "none", sm: "inline-block" } }}
        >
          <Link
            style={{
              marginInlineStart: "0.2rem",
              display: "flex",
              alignItems: "center",
              fontFamily: "roboto",
              fontSize: "13px",
              fontWeight: "400",
              color: isHomePage
                ? theme.palette.warning.main
                : theme.palette.primary.main,
            }}
            to="/shop"
          >
            Shop Now
            <ArrowForwardIcon
              sx={{
                width: "1rem",
                marginInlineStart: "0.2rem",
                display: "inline-block",
                color: "inherit",
              }}
            />
          </Link>
        </Box>

        {/* Close Button */}
        <IconButton
          color="inherit"
          size="small"
          onClick={onClick}
          sx={{ position: "absolute", right: "6px" }}
        >
          <CloseOutlinedIcon
            sx={{ color: theme.palette.grey[300] }}
            fontSize="small"
          />
        </IconButton>
      </Box>
    )
  );
}

export default HeaderMsg;
