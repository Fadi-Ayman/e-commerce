import { Box, Typography } from "@mui/material";

type CustomTableHeaderProps = {
  labels: string[];
  gridTemplateColumns: string;
  gap: string;
};

export default function CustomTableHeader({
  labels,
  gridTemplateColumns,
  gap,
}: CustomTableHeaderProps) {
  return (
    <Box
      role="table-header"
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: gridTemplateColumns,
        gap: gap,
        borderBottom: "1px solid ",
        borderColor: "grey.200",
        placeItems: "center",
        padding: { xs: "0.5rem", md: "1rem" },
        position: "sticky",
        top: "0",
        bgcolor: "white",
        zIndex: 999,
      }}
    >
      {labels.map((label, i) => (
        <Typography
          sx={{
            width: "100%",
            fontWeight: "500",
            textAlign: "center",
            fontSize: { xs: "13px", sm: "16px" },
          }}
          key={i}
        >
          {label}
        </Typography>
      ))}
    </Box>
  );
}
