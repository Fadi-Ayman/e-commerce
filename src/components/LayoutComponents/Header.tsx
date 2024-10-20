import { Box } from "@mui/material";
import { useState } from "react";
import HeaderMsg from "../OneUseComponents/HeaderMsg";
import NavBar from "../NavBar/Navbar";

function Header() {
  const [isHeaderMsgOpen, setIsHeaderMsgOpen] = useState<boolean>(true);

  const handleHeaderMsgOpen = () => {
    setIsHeaderMsgOpen(!isHeaderMsgOpen);
  };

  return (
    <Box component={"header"} sx={{ width: "100%" }}>
      <HeaderMsg
        onClick={handleHeaderMsgOpen}
        isHeaderMsgOpen={isHeaderMsgOpen}
      />
      <NavBar />
    </Box>
  );
}

export default Header;
