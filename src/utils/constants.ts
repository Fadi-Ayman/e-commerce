import {
  CartListHeaderLabelsType,
  Logo,
  NavLink,
  OrderListHeaderLabelsType,
  WishListHeaderLabelsType,
} from "../Types/Types";

export const bestSellerMaxCount: number = 8;
export const productsCarouselMaxCount: number = 10;
export const brandName = "Logo";
export const dayTimerDate = new Date("2025-06-01").toISOString();
export const currency = "USD"
export const shippingPrice = 200    // To Calculate Total Price in Cart


export const partnerlogosArray: Logo[] = [
  { label: "logo1", imageSrc: "/logo1.png" },
  { label: "logo2", imageSrc: "/logo2.png" },
  { label: "logo3", imageSrc: "/logo3.png" },
  { label: "logo4", imageSrc: "/logo4.png" },
  { label: "logo5", imageSrc: "/logo5.png" },
  { label: "logo6", imageSrc: "/logo6.png" },
];

export const linksList: NavLink[] = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const SettingsAsideLinksArray = [
  {
    label: "Account",
    href: "/settings/account",
  },
  {
    label: "Orders",
    href: "/settings/orders",
  },
  {
    label: "WishList",
    href: "/settings/wishlist",
  },
];

export const CategoryFilterOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Furniture",
    value: "furniture",
  },
  {
    label: "Electronics",
    value: "electronics",
  },
  {
    label: "Shoes",
    value: "shoes",
  },
  {
    label: "Clothes",
    value: "clothes",
  },
  {
    label: "Other",
    value: "other",
  },
];

export const ProductsTagOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "New",
    value: "new",
  },
  {
    label: "Hot",
    value: "hot",
  },
  {
    label: "Limited",
    value: "limited",
  },
  {
    label: "Discount",
    value: "discount",
  },
  {
    label: "No Tags",
    value: "no-tags",
  },
];

export const sortOptionsArray = [
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "oldest",
    label: "Oldest",
  },
  {
    value: "asc",
    label: "Price: Low to High",
  },
  {
    value: "desc",
    label: "Price: High to Low",
  },
  {
    value: "rating",
    label: "Rating: High to Low",
  },
  {
    value: "ratingLow",
    label: "Rating: Low to High",
  },
];

export const WishListHeaderLabels: WishListHeaderLabelsType = [
  "Product",
  "Price",
  "Action",
  "Remove",
];

export const OrderListHeaderLabels: OrderListHeaderLabelsType = [
  "Order Id",
  "Date",
  "Status",
  "Price",
];

export const CartListHeaderTables :CartListHeaderLabelsType = [
  "Product",
  "Quantity",
  "Price",
  "Sub-Total",
  "Remove"
];

export const egyptianGovernorates = [
  {
    governorate: "Cairo",
    cities: [
      "Cairo",
      "Heliopolis",
      "Nasr City",
      "Maadi",
      "Zamalek",
      "Downtown",
      "New Cairo",
      "Dokki",
      "Giza",
      "Shubra",
    ],
  },
  {
    governorate: "Alexandria",
    cities: [
      "Alexandria",
      "Borg El Arab",
      "El Amria",
      "Montazah",
      "Abu Qir",
      "Mandara",
      "Kafr Abdu",
      "Sidi Gaber",
    ],
  },
  {
    governorate: "Giza",
    cities: [
      "Giza",
      "6th of October City",
      "El Hawamdeyya",
      "Bulaq",
      "Kerdasa",
      "Dokki",
      "Umm Badr",
      "El Ayyat",
    ],
  },
  {
    governorate: "Luxor",
    cities: ["Luxor", "Esna", "Armant", "Karnak", "Theban Necropolis"],
  },
  {
    governorate: "Aswan",
    cities: [
      "Aswan",
      "Kom Ombo",
      "Edfu",
      "Nasser City",
      "Philae",
      "Aswan High Dam",
    ],
  },
  {
    governorate: "Port Said",
    cities: [
      "Port Said",
      "El Arish",
      "Damietta",
      "Bardawil",
      "Port Fouad",
    ],
  },
  {
    governorate: "Suez",
    cities: ["Suez", "Ain Sokhna", "Ain Sukhna", "Adabiya"],
  },
  {
    governorate: "Red Sea",
    cities: [
      "Hurghada",
      "El Gouna",
      "Marsa Alam",
      "Safaga",
      "Sahl Hasheesh",
      "Quseir",
    ],
  },
  {
    governorate: "Sharkia",
    cities: [
      "Zagazig",
      "Dairut",
      "Bilbeis",
      "10th of Ramadan City",
      "Kafr Saqr",
    ],
  },
  {
    governorate: "Dakahlia",
    cities: [
      "Mansoura",
      "Tanta",
      "El Mansoura",
      "Metoul El Sharqia",
      "El Mahalla El Kubra",
    ],
  },
  {
    governorate: "Kafr El Sheikh",
    cities: [
      "Kafr El Sheikh",
      "Desouk",
      "Sedi Salim",
      "Fuwah",
      "Qarun",
    ],
  },
  {
    governorate: "Beni Suef",
    cities: [
      "Beni Suef",
      "El Wasta",
      "Nasser",
      "Somosta",
      "Ehnasya",
    ],
  },
  {
    governorate: "Minya",
    cities: [
      "Minya",
      "Samalut",
      "El Adwa",
      "Maghagha",
      "Bani Mazar",
    ],
  },
  {
    governorate: "Assiut",
    cities: [
      "Assiut",
      "Abnub",
      "El Ghanayem",
      "Dairut",
      "Manfalut",
    ],
  },
  {
    governorate: "Fayoum",
    cities: [
      "Fayoum",
      "Ibsheway",
      "Tamia",
      "Senores",
      "Al Fayyum",
    ],
  },
  {
    governorate: "Qena",
    cities: [
      "Qena",
      "Nag Hammadi",
      "Farafra",
      "Deshna",
      "Qift",
    ],
  },
  {
    governorate: "Matrouh",
    cities: [
      "Matrouh",
      "Sidi Barrani",
      "El Alamein",
      "Marsa Matrouh",
      "Siwa Oasis",
    ],
  },
  {
    governorate: "South Sinai",
    cities: [
      "Sharm El Sheikh",
      "Dahab",
      "Nuweiba",
      "Taba",
      "Ras Sudr",
    ],
  },
  {
    governorate: "North Sinai",
    cities: [
      "El Arish",
      "Sheikh Zuweid",
      "Rafah",
      "Bir El Abd",
    ],
  },
  {
    governorate: "Gharbia",
    cities: [
      "Tanta",
      "El Mahalla El Kubra",
      "Kafr El Zayat",
      "Samanoud",
    ],
  },
  {
    governorate: "Ismailia",
    cities: ["Ismailia", "Port Tewfik", "El Qantara"],
  },
  {
    governorate: "New Valley",
    cities: ["Kharga", "Dakhla", "Paris", "Mut"],
  },
];