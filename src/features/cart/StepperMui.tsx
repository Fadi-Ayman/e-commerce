import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Typography } from "@mui/material";

const steps = [
  {
    title: "Cart",
    description: "Shoping Cart",
  },
  {
    title: "Checkout",
    description: "Checkout Details",
  },
  {
    title: "Order Complete ",
    description: "Order Complete",
  },
];

export default function StepperMui({ stepCount }: { stepCount: 0 | 1 | 2 }) {
  return (
    <Stack
      sx={{
        width: "100%",
        py: { xs: "1.2rem", md: "1.5rem" },
      }}
      spacing={3}
    >
      <Typography
        component="h3"
        sx={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: { xs: "1.6rem", md: "2rem" },
        }}
      >
        {steps[stepCount].title}
      </Typography>
      <Stepper
        alternativeLabel
        activeStep={stepCount}
        connector={<ColorlibConnector />}
      >
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              {step.description}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

// Stepper icons
function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement<unknown> } = {
    1: <ShoppingCartIcon />,
    2: <PaymentIcon />,
    3: <DoneOutlineIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}
// Styling Of Stepper

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 43,
  height: 43,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      },
    },
  ],
}));
