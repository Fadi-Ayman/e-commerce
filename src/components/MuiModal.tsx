import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { theme } from "../styles/theme";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useLocation } from "react-router-dom";

type MuiModalProps = {
  children: React.ReactNode;
  modalComponent: React.ReactNode | string;
  isCentered?: boolean;
};

export default function MuiModal({
  children,
  modalComponent,
  isCentered,
}: MuiModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const path = useLocation().pathname;
  let modalBgColor: string, modalColor: string;
  if (path === "/" || path === "/home") {
    modalBgColor = "black";
    modalColor = "white";
  } else {
    modalBgColor = "white";
    modalColor = "black";
  }

  return (
    <Box component={"span"}>
      {/* Take Button as child  */}
      <Box
        component={"span"}
        role="button"
        sx={{ cursor: "pointer", display: "inline-block" }}
        onClick={handleOpen}
      >
        {children}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Modal */}
        <Box
        
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "70%", md: "60%", lg: "40%" },
            minHeight: "40vh",
            maxHeight: "70vh",
            bgcolor: modalBgColor,
            color: modalColor,
            boxShadow: 24,
            borderRadius: "10px",
            padding: isCentered ? "0rem 3rem 0rem 3rem" : "4rem 3rem 3rem 3rem",
            display: isCentered ? "flex" : "",
            alignItems: isCentered ? "center" : "",
            justifyContent: isCentered ? "center" : "",
            overflowY: isCentered ? "visible" : "auto",
          }}
        >
          {modalComponent}
          <IconButton
            color="inherit"
            size="small"
            onClick={handleClose}
            sx={{ position: "absolute", right: "7px", top: "7px" }}
          >
            <CloseOutlinedIcon
              sx={{ color: theme.palette.grey[300] }}
              fontSize="medium"
            />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
}
