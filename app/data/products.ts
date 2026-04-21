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
  packaging?: string;
  moq?: string;
  viscosity?: string;
  oilType?: string;
  apiRating?: string;
  sku?: string;
  unitSize?: string;
  unitsPerCase?: string;
  specs?: string[];
  whatsappMessage?: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Full Synthetic Motor Oil 5QT",
    slug: "full-synthetic-5qt",
    shortDescription: "High-performance synthetic oil for commercial engines.",
    description: "Premium full synthetic motor oil designed for durability, heat resistance, and extended engine life.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "5QT",
    featured: true,
    packaging: "5 Quart Bottle",
    moq: "100 Cases",
    viscosity: "5W-30",
    oilType: "Full Synthetic",
    apiRating: "API SP",
    sku: "AO-5QT-FS-530",
    unitSize: "5 Quart",
    unitsPerCase: "3 Bottles",
    specs: ["API SP Certified", "High Temperature Stability", "Engine Protection"],
    whatsappMessage: "Hello, I am interested in Full Synthetic Motor Oil 5QT.",
  },
  {
    id: "2",
    name: "Full Synthetic Motor Oil 1QT",
    slug: "full-synthetic-1qt",
    shortDescription: "Retail-ready compact motor oil packaging.",
    description: "High-quality synthetic oil ideal for resale and export distribution.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "1QT",
    featured: true,
    packaging: "1 Quart Bottle",
    moq: "200 Cases",
    viscosity: "5W-30",
    oilType: "Full Synthetic",
    apiRating: "API SP",
    sku: "AO-1QT-FS-530",
    unitSize: "1 Quart",
    unitsPerCase: "6 Bottles",
    specs: ["Retail Ready", "API Certified"],
    whatsappMessage: "Hello, I am interested in Full Synthetic Motor Oil 1QT.",
  },
  {
    id: "3",
    name: "Motor Oil Case 3x5QT",
    slug: "case-3x5qt",
    shortDescription: "Wholesale case packaging for distribution.",
    description: "Case packaging optimized for logistics and bulk buyers.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Case",
    packaging: "3 x 5QT Bottles",
    moq: "80 Cases",
    viscosity: "5W-30",
    oilType: "Full Synthetic",
    apiRating: "API SP",
    sku: "AO-CS-3X5QT",
    unitSize: "5QT",
    unitsPerCase: "3 Bottles",
    specs: ["Bulk Supply", "Export Ready"],
  },
  {
    id: "4",
    name: "Motor Oil Case 6x1QT",
    slug: "case-6x1qt",
    shortDescription: "Standard retail case configuration.",
    description: "6 bottles per case, optimized for store distribution.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Case",
    packaging: "6 x 1QT Bottles",
    moq: "120 Cases",
    viscosity: "5W-30",
    oilType: "Full Synthetic",
    apiRating: "API SP",
    sku: "AO-CS-6X1QT",
    unitSize: "1QT",
    unitsPerCase: "6 Bottles",
    specs: ["Retail Packaging"],
  },
];