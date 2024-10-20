import { ProductType } from "../Types/ProductTypes";
import { OrdersRowsType } from "../Types/Types";

export const DummyOldPassword: string = "0000000000";

export const DummyProducts: ProductType[] = [
  {
    id: "1",
    name: " First Product Shirt",
    description: "This is Product number 1 ",
    price: 123,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 5,
    image: "/shirt.jpeg",
    images: ["/shirt.jpeg", "/clothes.png", "/shoes.png", "/rebecca-grand.png"],
    category: "clothes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: " second Product Shirt",
    description: "This is product number 2",
    price: 1213,
    tag: "new",
    discount: 0,
    image: "/shirt.jpeg",
    images: ["/shirt.jpeg", "/clothes.png", "/shoes.png", "/rebecca-grand.png"],
    category: "clothes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: " HeadPhones g8Xd2",
    description: "This is product number 3",
    price: 23213,
    tag: "hot",
    discount: 0,
    image: "/Card.png",
    images: ["/Card.png", "/clothes.png", "/shoes.png", "/rebecca-grand.png"],
    category: "electronics",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: " Shoes",
    description: "This is product number 4",
    price: 2313,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 20,
    image: "/shoes.png",
    images: ["/shoes.png", "/clothes.png", "/Card.png", "/rebecca-grand.png"],
    category: "shoes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: " Shoes",
    description: "This is product number 5",
    price: 2313,
    tag: undefined,
    discount: undefined,
    image: "/shoes.png",
    images: ["/shoes.png", "/clothes.png", "/Card.png", "/rebecca-grand.png"],
    category: "shoes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    name: " furniture",
    description: `This is product number 6`,
    price: 23113,
    tag: "new",
    discount: undefined,
    image: "/rebecca-grand.png",
    images: ["/rebecca-grand.png", "/clothes.png", "/Card.png", "/shoes.png"],
    category: "furniture",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    name: " gamepad",
    description: `This is product number 7`,
    price: 23113,
    tag: "limited",
    discount: undefined,
    image: "/electronics.png",
    images: ["/electronics.png", "/clothes.png", "/Card.png", "/shoes.png"],
    category: "electronics",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "8",
    name: " shirt",
    description: `This is product number 8`,
    price: 23113,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 10,
    image: "/clothes.png",
    images: ["/clothes.png", "/electronics.png", "/Card.png", "/shoes.png"],
    category: "clothes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "9",
    name: " motorbike",
    description: `This is product number 9`,
    price: 23113,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 10,
    image: "/clothes.png",
    images: ["/clothes.png", "/electronics.png", "/Card.png", "/shoes.png"],
    category: "other",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "10",
    name: " Shoes",
    description: "This is product number 10",
    price: 2313,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 20,
    image: "/shoes.png",
    images: ["/shoes.png", "/clothes.png", "/Card.png", "/rebecca-grand.png"],
    category: "shoes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "11",
    name: " Shoes",
    description: "This is product number 11",
    price: 2313,
    tag: undefined,
    discount: undefined,
    image: "/shoes.png",
    images: ["/shoes.png", "/clothes.png", "/Card.png", "/rebecca-grand.png"],
    category: "shoes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "12",
    name: " furniture",
    description: `This is product number 12`,
    price: 23113,
    tag: "new",
    discount: 0,
    image: "/rebecca-grand.png",
    images: ["/rebecca-grand.png", "/clothes.png", "/Card.png", "/shoes.png"],
    category: "furniture",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "13",
    name: " gamepad",
    description: `This is product number 13`,
    price: 23113,
    tag: "limited",
    discount: undefined,
    image: "/electronics.png",
    images: ["/electronics.png", "/clothes.png", "/Card.png", "/shoes.png"],
    category: "electronics",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "14",
    name: " shirt",
    description: `This is product number 14`,
    price: 23113,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 10,
    image: "/clothes.png",
    images: ["/clothes.png", "/electronics.png", "/Card.png", "/shoes.png"],
    category: "clothes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "15",
    name: " motorbike",
    description: `This is product number 15`,
    price: 23113,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 10,
    image: "/clothes.png",
    images: ["/clothes.png", "/electronics.png", "/Card.png", "/shoes.png"],
    category: "other",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "16",
    name: " furniture",
    description: `This is product number 16`,
    price: 23113,
    tag: "new",
    discount: undefined,
    image: "/rebecca-grand.png",
    images: ["/rebecca-grand.png", "/clothes.png", "/Card.png", "/shoes.png"],
    category: "furniture",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "17",
    name: " gamepad",
    description: `This is product number 17`,
    price: 23113,
    tag: "limited",
    discount: undefined,
    image: "/electronics.png",
    images: ["/electronics.png", "/clothes.png", "/Card.png", "/shoes.png"],
    category: "electronics",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "18",
    name: " shirt",
    description: `This is product number 18`,
    price: 23113,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 10,
    image: "/clothes.png",
    images: ["/clothes.png", "/electronics.png", "/Card.png", "/shoes.png"],
    category: "clothes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "19",
    name: " motorbike",
    description: `This is product number 19`,
    price: 23113,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 10,
    image: "/clothes.png",
    images: ["/clothes.png", "/electronics.png", "/Card.png", "/shoes.png"],
    category: "other",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "20",
    name: " gamepad",
    description: `This is product number 20`,
    price: 23113,
    tag: "limited",
    discount: undefined,
    image: "/electronics.png",
    images: ["/electronics.png", "/clothes.png", "/Card.png", "/shoes.png"],
    category: "electronics",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "21",
    name: " shirt",
    description: `This is product number 21`,
    price: 23113,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 10,
    image: "/clothes.png",
    images: ["/clothes.png", "/electronics.png", "/Card.png", "/shoes.png"],
    category: "clothes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "22",
    name: " motorbike",
    description: `This is product number 22`,
    price: 23113,
    tag: "discount",
    discountEndDate: new Date("2025-10-02").toISOString(),
    discount: 10,
    image: "/clothes.png",
    images: ["/clothes.png", "/electronics.png", "/Card.png", "/shoes.png"],
    category: "other",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
  {
    id: "23",
    name: "last Shirt",
    description: `This is product number 23`,
    price: 13113,
    tag: "limited",
    discount: 0,
    image: "/clothes.png",
    images: ["/clothes.png", "/electronics.png", "/Card.png", "/shoes.png"],
    category: "clothes",
    ratingValue: Math.random() * 6,
    reviewsNumber: 14,
    createdAt: new Date().toISOString(),
  },
];

export const DummyordersRows: OrdersRowsType[] = [
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "pending",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
  {
    id: "123123123",
    date: "october,17,2020",
    status: "delevered",
    price: 123123,
  },
];

export const Lorem500: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat qui dicta est magni iusto omnis cumque odio. Iure ex aliquam unde repellendus optio quos deleniti doloribus officiis libero distinctio cumque nobis praesentium labore ducimus neque quasi fugiat error, quas ipsam nesciunt iste? Distinctio et earum quis, eius, eum reprehenderit esse aliquam nobis veniam dolor animi voluptatum tenetur consequuntur quas! Non saepe laborum accusamus fugit fuga odio suscipit quam assumenda voluptate, blanditiis cupiditate et adipisci provident magni dignissimos exercitationem vitae aspernatur voluptatem eligendi reprehenderit ducimus possimus aperiam maxime. Cum quo vel, sunt eaque dolor sequi? Quisquam, eligendi necessitatibus quis neque amet laboriosam enim, sed temporibus velit sapiente ad, dolore autem placeat ut obcaecati impedit quas ipsa libero reprehenderit minus excepturi quaerat tempore porro. Praesentium quidem architecto necessitatibus incidunt vitae ullam corporis impedit, officia expedita quia natus at magni veniam nostrum repellat hic excepturi? Dolorem distinctio nam eaque explicabo omnis delectus iste unde, dolorum expedita, odio quos sed officia ex, rerum quis. Eligendi sint harum modi, sunt dolorum minima adipisci illum, hic omnis odio aperiam autem ea aspernatur, maiores porro veritatis velit sequi! Fugiat quidem optio officia sit ipsam, dolores consectetur molestias obcaecati, architecto corporis nisi, nobis voluptatibus? Dolorum fuga, dignissimos ullam harum deleniti tenetur ab debitis dolores optio, rerum molestias eveniet quo deserunt sapiente quibusdam, officiis distinctio accusamus assumenda! Quis natus culpa esse iusto neque tempore porro voluptatem, iste laborum veniam, sunt sint quo a maiores nam eum asperiores repudiandae, quisquam nisi voluptate ea illo magnam. Veritatis earum eius quibusdam repudiandae tempore, tempora necessitatibus delectus officia doloremque est accusantium, molestiae, dicta reprehenderit! Amet aliquam eveniet a voluptatibus? Consequuntur voluptas obcaecati culpa commodi laudantium, illo tempora, necessitatibus, recusandae iste et vitae fugiat voluptate. Unde, error quo vero nesciunt natus, hic optio repudiandae temporibus non voluptas nihil ipsam mollitia ducimus dolores molestiae repellendus sit molestias fugit reprehenderit officia asperiores incidunt soluta ipsum sapiente! Molestiae reprehenderit, perspiciatis iusto temporibus fugiat quis eius molestias! Ipsum maxime voluptas, at suscipit, blanditiis accusantium hic unde laboriosam dignissimos voluptatem quos. Esse tempore, accusamus cum delectus nihil omnis illo quasi fuga exercitationem ea numquam pariatur quas similique laudantium dolores aliquam impedit. Reprehenderit maxime quas illo nesciunt veritatis expedita. In doloremque quam, vero aliquam cum eaque suscipit nulla officia eos molestias iure repellendus laudantium, asperiores dignissimos iste ex? Voluptas sequi libero delectus voluptates omnis labore reprehenderit ipsam laborum dolorum enim, amet ex iusto, inventore illum mollitia itaque minima! Alias dignissimos sit explicabo quisquam quasi illum quod facere praesentium at eveniet sunt accusamus, magni incidunt eos, corporis impedit ullam nemo voluptatem, earum distinctio tempora? Fugiat molestiae recusandae corporis, neque, mollitia blanditiis esse perspiciatis aut in deserunt sequi officiis, dolores harum expedita. Architecto, nam repudiandae? Consectetur magni similique iste. Laborum maxime fugit reiciendis vero aliquam earum deleniti fugiat, recusandae suscipit laudantium voluptate rerum facilis officia voluptatibus repellendus ratione in cumque eum velit, omnis quaerat consequatur? Voluptatem unde, fuga vero nesciunt eos similique corporis non odio deleniti inventore neque error harum, vitae necessitatibus quae rem quis eligendi libero at. Ex, minima cupiditate!";