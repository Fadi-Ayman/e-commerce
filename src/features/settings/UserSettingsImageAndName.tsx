import { Avatar, Box, Typography } from "@mui/material";

function UserSettingsImageAndName() {
  const userName = "Fady Ayman";
  const src = "/fakeUserImage.png";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        width:"fit-content"
      }}
    >
      {/* User Image */}
      <Avatar
        alt="User Image"
        sx={{ width: "120px", height: "120px" }}
        src={src}
      />
      {/* User NAme */}
      <Typography variant="h5" component={"h5"}>
        {userName}
      </Typography>
    </Box>
  );
}

export default UserSettingsImageAndName;
