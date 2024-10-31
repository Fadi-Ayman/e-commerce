import { Box } from "@mui/material";

type CustomTableItemProps = {
  children: React.ReactNode;
  gridTemplateColumns: string;
  gap: string;
};

export default function   CustomTableItem({
  children,
  gridTemplateColumns,
  gap
}: CustomTableItemProps) {
  return (
    <Box
      sx={{
        display: "grid",
        
        gap: gap,
        gridTemplateColumns: gridTemplateColumns,
        placeItems: "center",

        width: "100%",

      }}
    >
      {children}
    </Box>
  );
}
