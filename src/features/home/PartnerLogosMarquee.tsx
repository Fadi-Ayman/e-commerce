import { useMemo } from "react";
import Wrapper from "../../components/OneUseComponents/Wrapper";
import { Box } from "@mui/material";
import { partnerlogosArray } from "../../utils/constants";

type WrapperItemConfigsType = {
  seconds: number;
  logosCount: number;
  itemSpacing: number;
  iconWidth: string;
};

function PartnerLogosMarquee() {
  const WrapperItemConfigs: WrapperItemConfigsType = useMemo(() => {
    return {
      seconds: 30,
      logosCount: partnerlogosArray.length,
      itemSpacing: 1100 / 7, // innerWidth /7
      iconWidth: "clamp(8.2rem,16vw,14.6rem)",
    };
  }, []);

  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        gap: 2,
        // backgroundColor: "var(--footer-bg)",
        py: { xs: 2, md: 2, lg: 0 },
        my: { xs: "0rem", md: "0rem", lg: "1.2rem" },
        height: { xs: "6.1rem", md: "7rem", lg: "8rem" },
        width: "100%",
      }}
    >
      <Wrapper>
        {partnerlogosArray.map((logo, i) => (
          <Wrapper.WrapperItem
            index={i}
            key={`${i}-${logo.label}`}
            src={logo.imageSrc}
            label={logo.label}
            alt={logo.label}
            itemConfig={WrapperItemConfigs}
          />
        ))}
      </Wrapper>
    </Box>
  );
}

export default PartnerLogosMarquee;
