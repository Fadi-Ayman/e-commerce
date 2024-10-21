import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 20;


type QuantityInputProps = {
  quantity: number;
  setQuantity: (quantity: number) => void
  gridRow?: string;
  gridColumn?: string;
  isInTable?: boolean;
};

function QuantityInput({
  quantity,
  setQuantity,
  isInTable = true,
  gridRow,
  gridColumn,
}: QuantityInputProps) {
  function handleMinus() {
    if (quantity <= MIN_QUANTITY) {
      return;
    }
    setQuantity(quantity - 1);
  }

  function handlePlus() {
    if (quantity >= MAX_QUANTITY) {
      return;
    }

    setQuantity(quantity + 1);
  }

  if (!isInTable) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          border: "1.5px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "10px",
          padding: "0.3rem",
          gridRow: gridRow,
          gridColumn: gridColumn,
        }}
      >
        <IconButton
          size="small"
          onClick={handleMinus}
          disabled={quantity === MIN_QUANTITY}
          sx={{ color: "black", padding: { xs: "0.3rem", md: "0.3rem" } }}
        >
          <RemoveIcon sx={{ fontSize: { xs: "16px", md: "20px" } }} />
        </IconButton>

        <Box
          sx={{
            textAlign: "center",
            fontWeight: "500",
            fontSize: { xs: "14px", md: "18px" },
          }}
        >
          {quantity}
        </Box>

        <IconButton
          size="small"
          onClick={handlePlus}
          disabled={quantity === MAX_QUANTITY}
          sx={{ color: "black", padding: { xs: "0.3rem", md: "0.3rem" } }}
        >
          <AddIcon sx={{ fontSize: { xs: "15px", md: "20px" } }} />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: { xs: "4.3rem", md: "5.5rem" },
        height: { xs: "1.8rem", md: "2.2rem" },
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "5px",
      }}
    >
      <IconButton
        size="small"
        onClick={handleMinus}
        disabled={quantity === MIN_QUANTITY}
        sx={{ color: "black", padding: { xs: "0.3rem", md: "0.3rem" } }}
      >
        <RemoveIcon sx={{ fontSize: { xs: "15px", md: "20px" } }} />
      </IconButton>

      <Box
        sx={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: { xs: "14px", md: "16px" },
        }}
      >
        {quantity}
      </Box>

      <IconButton
        size="small"
        onClick={handlePlus}
        disabled={quantity === MAX_QUANTITY}
        sx={{ color: "black", padding: { xs: "0.3rem", md: "0.3rem" } }}
      >
        <AddIcon sx={{ fontSize: { xs: "15px", md: "20px" } }} />
      </IconButton>
    </Box>
  );
}

export default QuantityInput;
