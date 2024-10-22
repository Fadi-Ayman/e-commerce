import { Box } from "@mui/material";
import CustomTableBody from "./CustomTableBody";
import CustomTableHeader from "./CustomTableHeader";
import CustomTableItem from "./CustomTableItem";

type CustomTableProps = {
  children: React.ReactNode;
  gap: string;
  gridTemplateColumns: string;
  headerLabels: string[];
  borderColor?: string;
};

function CustomTable({
  children,
  gridTemplateColumns,
  gap,
  headerLabels,
  borderColor = "grey.200",
}: CustomTableProps) {
  return (
    <Box
      role={"table"}
      sx={{
        width: "100%",
        border: "solid 2px",
        minHeight: {xs:"fit-content",md:"30vh"},
        maxHeight: {xs:"fit-content",md:"64.5vh"},
        borderColor: borderColor,
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",

        scrollbarWidth: "thin", 
        scrollbarColor: "grey transparent", 
        "&::-webkit-scrollbar": {
          width: "6px", 
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "grey", 
          borderRadius: "10px", 
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent", 
        },
      }}
    >
      {/* Thead */}
      <CustomTableHeader
        labels={headerLabels}
        gridTemplateColumns={gridTemplateColumns}
        gap={gap}
      />

      {/* Tbody */}
      <CustomTableBody>
        {/* items Take items in Fragments */}
        <CustomTableItem gap={gap} gridTemplateColumns={gridTemplateColumns}>
          {children}
        </CustomTableItem>
      </CustomTableBody>
    </Box>
  );
}

export default CustomTable;
