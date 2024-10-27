// ######################################################################## BASE TYPE #######################################

export type Categories = "electronics" | "shoes" | "clothes" | "furniture" | "other";

export type productTag = "new" | "hot" | "limited" | "discount" | null;

type BaseProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  tag: productTag;
  discount: number | null;
  discountEndDate: string | null;
  image: string;
  images: string[];
  category: Categories;
  ratingValue: number;   // Max 5
  reviewsNumber: number;
  createdAt: string; // May use Date Type
};


type ProductWithDiscount = BaseProduct & {
  tag: "discount"; 
  discount: number; 
  discountEndDate: string;
};

type ProductWithoutDiscount = BaseProduct & {
  tag: Exclude<productTag, "discount">; // Tag cannot be 'discount'
  discount: null ; // If tag is not 'discount', discount must be null or 0
  discountEndDate: null ;
};

// Last version of type which will be used
export type ProductType = ProductWithDiscount | ProductWithoutDiscount;

// ##################################################### DERIVED TYPES ######################################################

export type ProductCardType = Pick<
  ProductType,
  "name"|"id"|"discount"|"image"|"price"|"ratingValue"|"tag"
> & {
  isInSlider: boolean;
};

export type ProductCardDetailsType = Pick<
  ProductCardType,
  "name" | "price" | "ratingValue" | "isInSlider"
>;

export type ProductCardImageType = Pick<
  ProductCardType,
  "name" | "image" | "tag" | "discount" | "id"
>;
