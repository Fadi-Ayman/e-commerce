import { Box } from "@mui/material";
import NavigationCarousel from "../../components/NavigationCarousel";
import { useState } from "react";

type ProductImagesProps = {
  images: string[];
};

function ProductImages({ images }: ProductImagesProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        maxHeight: { xs: "40rem", lg: "46rem" },
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: { xs: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
        alignItems: "stretch",
        justifyContent: "stretch",
        rowGap: "1.5rem",
        columnGap: "1rem",
        borderRadius: "10px",
      }}
    >
      <NavigationCarousel
        images={images}
        activeIndex={activeIndex}
        handleImageChange={setActiveIndex}
      />

      {/* Render additional images */}
      {images.slice(1, 4).map((image, index) => (
        <Box
          key={index}
          sx={{
            gridColumn: `${index + 1}/${index === 2 ? "-1" : `${index + 2}`}`,
            gridRow: "-2/-1",
            width: "100%",
            height: "100%",
            cursor: "pointer",
            display: { xs: "none", md: "block" },
            aspectRatio: "1/1",
            borderRadius: "10px",
            overflow: "hidden",
            border: activeIndex === index + 1 ? "3px solid lightgreen" : "none",
          }}
          onClick={() => setActiveIndex(index + 1)}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
            src={image}
            alt={`Thumbnail ${index + 1}`}
          />
        </Box>
      ))}
    </Box>
  );
}

export default ProductImages;
