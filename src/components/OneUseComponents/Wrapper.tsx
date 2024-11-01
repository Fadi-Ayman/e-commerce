import { CSSProperties, memo } from "react";
import { Box } from "@mui/material";

type WrapperProps = {
  children: React.ReactNode;
};

type WrapperItemProps = {
  index: number;
  src: string;
  label: string;
  alt: string;
  animateTimingFunctionValue?: string;
  itemConfig: ItemConfigType;
};

type ItemConfigType = {
  seconds: number;
  logosCount: number;
  itemSpacing: number;
  iconWidth: string;
};

function Wrapper({ children }: WrapperProps) {
  return (
    <Box
      sx={{
        maskImage:
          "linear-gradient(to right,rgba(0, 0, 0, 0),rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 90%,rgba(0, 0, 0, 0))",
        position: "relative",
        mx: "auto",
        height: "100%",
        width: "95%",
        overflow: "hidden",
        "&:hover > *": {
          animation: "paused",
        },
      }}
    >
      {children}
    </Box>
  );
}

function WrapperItem({
  index = 1,
  src = "",
  label = "Label",
  alt = ".",
  animateTimingFunctionValue = "linear",
  itemConfig = {} as ItemConfigType,
}: WrapperItemProps) {
  const {
    seconds = 50,
    logosCount = 6,
    itemSpacing = 1100 / 7,
    iconWidth = "clamp(9rem,30vw,40rem)",
  } = itemConfig;

  const wrapperItemStyles: CSSProperties = {
    animationDelay: `calc(${seconds}s / ${logosCount} * (${logosCount} - ${index}) * -1)`,
    animationName: "scrollLeft",
    animationDuration: `${seconds}s`,
    animationTimingFunction: animateTimingFunctionValue,
    animationIterationCount: "infinite",
    left: `max(calc(${itemSpacing}px * ${logosCount}), 100%)`,
    cursor: "pointer",
    
  };

  return (
    <Box
      sx={{
        position: "absolute",
        height: "100%",
        borderRadius: "md",
        transition: "transform 0.3s ease-in-out",
      }}
      style={wrapperItemStyles}
      title={label}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "fit-content",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            position: "relative",
            mx: "auto",
            p: { xs: 1, sm: 2, lg: 3, xl: 4 },
            width: iconWidth,
            "&:hover": {
              transform: "scale(1.1,1.1)",
            
            },
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
            src={src}
            alt={alt}
          />
        </Box>
      </Box>
    </Box>
  );
}

Wrapper.WrapperItem = memo(WrapperItem);

export default Wrapper;
