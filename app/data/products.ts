export type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Synthetic Motor Oil 5 Quart",
    slug: "synthetic-motor-oil-5-quart",
    shortDescription: "High-performance synthetic motor oil for daily and commercial use.",
    description:
      "Premium synthetic motor oil engineered for engine protection, temperature stability, and long-lasting performance. Suitable for wholesale supply and export distribution.",
    price: "Request Quote",
    image: "/products/motor-oil-5qt.jpg",
    category: "Motor Oil",
    featured: true,
  },
  {
    id: "2",
    name: "Synthetic Motor Oil 1 Quart",
    slug: "synthetic-motor-oil-1-quart",
    shortDescription: "Compact retail-ready motor oil packaging for flexible distribution.",
    description:
      "High-quality synthetic motor oil in 1 quart packaging, ideal for retail channels, resellers, and export orders requiring smaller unit quantities.",
    price: "Request Quote",
    image: "/products/motor-oil-1qt.jpg",
    category: "Motor Oil",
    featured: true,
  },
  {
    id: "3",
    name: "Motor Oil Box Packaging",
    slug: "motor-oil-box-packaging",
    shortDescription: "Bulk packed motor oil cases prepared for shipping and supply operations.",
    description:
      "Durable case packaging designed for warehouse handling, wholesale fulfillment, and export logistics. Built for dependable transport and commercial distribution.",
    price: "Request Quote",
    image: "/products/motor-oil-box.jpg",
    category: "Packaging",
    featured: true,
  },
];