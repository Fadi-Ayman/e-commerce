import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { theme } from "../../styles/theme";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const { isAuthenticated, userData } = useAuth();
  const navigate = useNavigate();


  // controled inputs
  const [fullName, setFullName] = useState<string | "">(
    userData?.firstName || ""
  );
  const [emailAddress, setEmailAddress] = useState<string | "">(
    userData?.email || ""
  );
  const [message, setMessage] = useState<string>("");


  // Handler function
  function handleFormAction(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!fullName || !emailAddress || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    toast.success(
      `thank you ${fullName}, your message has been sent successfully`
    );
    setMessage("");
  }

  return (
    <Box
      component={"form"}
      onSubmit={(e) => handleFormAction(e)}
      sx={{
        width: "100%",
        height: "29.6rem",
        padding: "1rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Full Name */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label
          style={{
            display: "block",
            fontWeight: "bold",
            color: theme.palette.grey[300],
            fontSize: "0.9rem",
          }}
          htmlFor="fullName"
        >
          Full Name
        </label>
        <TextField
          fullWidth
          id="fullName"
          disabled
          label="Your Name"
          value={fullName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFullName(e.target.value);
          }}
        />
      </Box>

      {/* Email Adress */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label
          style={{
            display: "block",
            fontWeight: "bold",
            color: theme.palette.grey[300],
            fontSize: "0.9rem",
          }}
          htmlFor="emailAddress"
        >
          Email Address
        </label>
        <TextField
          fullWidth
          disabled
          id="emailAddress"
          label="Your Email"
          value={emailAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmailAddress(e.target.value);
          }}
        />
      </Box>

      {/* Message */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label
          style={{
            display: "block",
            fontWeight: "bold",
            color: theme.palette.grey[300],
            fontSize: "0.9rem",
          }}
          htmlFor="message"
        >
          Message
        </label>
        <TextField
          fullWidth
          id="message"
          label="Your Message"
          disabled={!isAuthenticated}
          value={message}
          multiline
          rows={5}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(e.target.value);
          }}
        />
      </Box>

      {isAuthenticated && (
        <Button
          variant="contained"
          sx={{ mt: "0.5rem", bgcolor: "grey.700", width: "fit-content" }}
          type="submit"
        >
          Send Message
        </Button>
      )}

      {!isAuthenticated && (
        <Button
          variant="contained"
          sx={{ mt: "0.5rem", bgcolor: "grey.700", width: "fit-content" }}
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >
          Login
        </Button>
      )}
    </Box>
  );
}

export default ContactForm;
