import { Box, Checkbox, Typography } from "@mui/material";
import MuiModal from "../../components/MuiModal";
import { Lorem500 } from "../../utils/dummyData";

type AgreementsCheckBoxProps = {
  isAgreedLegalTemrs: boolean;
  setIsAgreedLegalTemrs: React.Dispatch<React.SetStateAction<boolean>>;
  disabled:boolean
};

function AgreementsCheckBox({
  isAgreedLegalTemrs,
  setIsAgreedLegalTemrs,
  disabled
}: AgreementsCheckBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        width: "100%",
        mt:"0.4rem",
        gap: {xs:"0.7rem",md:"0.9rem"},
      }}
    >
      <Checkbox
      sx={{
        color: "black",
        padding: "0rem",
        margin: "0rem",
        "&.Mui-checked": {
          color: "black",

        }}}
        disabled={disabled}

        checked={isAgreedLegalTemrs}
        onChange={(e) => setIsAgreedLegalTemrs(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
      />

      <Typography component={"p"} sx={{ color: "grey.300", fontSize: {xs:"0.7rem",sm:"1rem"} }}>

        I agree with
        <MuiModal isCentered={false} modalComponent={<p>{Lorem500}</p>}>
          <Typography
            component={"span"}
            sx={{
              fontWeight: "bold",
              mx: "0.3rem",
              color: "black",
              fontSize: "inherit",
              display:"inline-flex"
            }}
          >
            Privacy Policy
          </Typography>
        </MuiModal>

        and

        <MuiModal isCentered={false} modalComponent={<p>{Lorem500}</p>}>
          <Typography
            component={"span"}
            sx={{
              fontWeight: "bold",
              mx: "0.3rem",
              color: "black",
              fontSize: "inherit",
              display:"inline-flex"
            }}
          >
            Terms of use
          </Typography>
        </MuiModal>

      </Typography>
    </Box>
  );
}

export default AgreementsCheckBox;
