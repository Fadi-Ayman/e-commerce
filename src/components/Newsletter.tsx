import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useState } from "react";
import toast from "react-hot-toast";

function Newsletter() {
  const [emailInputValue, setEmailInputValue] = useState<string>("");

  function handleInputChange(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailInputValue) {
      toast.error(`Please fill the input`);
      return;
    }

    toast.success(`Your email is ${emailInputValue}`);
  }

  return (
    <Box
      component={"section"}
      color={"grey.300"}
      sx={{
        width: "100%",
        height: { xs: "350px", sm: "320px", md: "330px", lg: "360px" },
        mx: "auto",
        backgroundColor: "grey.200",
        backgroundImage: { md: "url('newSletter.png')" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        backgroundSize: "100% 100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        gap: { xs: "2.5rem", sm: "2rem", md: "3rem", lg: "3rem" },
      }}
    >
      {/* Text Content */}
      <Box padding={{ xs: "0 1rem", sm: "0 2rem", md: "0 3rem", lg: "0 4rem" }}>
        <Typography
          color="grey.700"
          fontWeight={"500"}
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem", lg: "2.5rem" },
          }}
          component={"h4"}
        >
          Join Our Newsletter
        </Typography>
        <Typography color="grey.700" variant="body1" component={"p"}>
          Sign up for deals, new products and promotions
        </Typography>
      </Box>

      {/* Form */}
      <Box
        component={"form"}
        sx={{ width: { xs: "80%", sm: "60%", md: "40%", lg: "30%" } }}
        onSubmit={handleInputChange}
        position={"relative"}
      >
        <TextField
          value={emailInputValue}
          onChange={(e) => setEmailInputValue(e.target.value)}
          type="email"
          variant="standard"
          label="Email Address"
          id="standard-basic"
          name="email"
          sx={{ width: "100%" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: "grey.500" }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <Button
          disabled={!emailInputValue}
          size="small"
          type="submit"
          sx={{
            color: "black",
            position: "absolute",
            right: "0rem",
            top: "1rem",
            "&:disabled": {
              color: "grey.300",
            },
          }}
        >
          Signup
        </Button>
      </Box>
    </Box>
  );
}

export default Newsletter;
