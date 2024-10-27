import { Avatar, Box, IconButton, Typography } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import toast from "react-hot-toast";
import { uploadImage } from "../../servcies/userApi";

const name = "Fady Ayman";
const image = "/fakeUserImage.png";

function UserSettingsImageAndName() {

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      // Check file size
      if (file.size > 3 * 1024 * 1024) {
        toast.error("Image size should be less than 3MB");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);
      uploadImage(formData, file.name);

    }

  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.7rem",
        width: "fit-content",
      }}
    >
      {/* User Image */}
      <Box sx={{ width: "140px", height: "140px", position: "relative" }}>
        <Avatar
          alt="User Image"
          sx={{
            width: "100%",
            height: "100%",
          }}
          src={image}
          imgProps={{
            style: {
              objectFit: "cover",
              width: "100%",
              height: "100%",
            },
          }}
        />

        <IconButton
          sx={{
            bgcolor: "black",
            position: "absolute",
            bottom: -5,
            right: -10,
            border: "3px solid white",
            "&:hover": { bgcolor: "black" },
          }}
          size="large"
          component="label"
        >
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
          <CameraAltOutlinedIcon sx={{ color: "white" }} fontSize="inherit" />
        </IconButton>
      </Box>

      {/* User Name */}
      <Typography variant="h5" fontWeight={"inherit"} component={"h5"}>
        {name}
      </Typography>
    </Box>
  );
}

export default UserSettingsImageAndName;
