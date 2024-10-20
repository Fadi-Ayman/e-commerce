// ######################################################################## BASE TYPE #######################################

export type Categories = "electronics" | "shoes" | "clothes" | "furniture" | "other";
// type RatingValue = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

export type productTag = "new" | "hot" | "limited" | "discount" | undefined;

type BaseProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  tag: productTag;
  discount?: number;
  discountEndDate?: string;
  image: string;
  images: string[];
  category: Categories;
  ratingValue: number;
  reviewsNumber: number;
  createdAt: string; // May use Date Type
};

type ProductWithDiscount = BaseProduct & {
  tag: "discount"; // specific to this type
  discount: number; //required for this type
  discountEndDate: string;
};

type ProductWithoutDiscount = BaseProduct & {
  tag: Exclude<productTag, "discount">; // Tag cannot be 'discount'
  discount?: undefined | 0; // If tag is not 'discount', discount must be undefined or 0
  discountEndDate?: undefined | "";
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
