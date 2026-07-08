export type ProductCategory =
  | "Motor Oil & Transmission Fluids"
  | "Auto Parts"
  | "General Merchandise";

export type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: string;
  image: string;
  category: ProductCategory;
  subcategory: string;
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
    description:
      "Premium full synthetic motor oil designed for durability, heat resistance, and extended engine life.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Motor Oil & Transmission Fluids",
    subcategory: "Engine Oils",
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
    description:
      "High-quality synthetic oil ideal for resale and export distribution.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Motor Oil & Transmission Fluids",
    subcategory: "Engine Oils",
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
    name: "Automatic Transmission Fluid",
    slug: "automatic-transmission-fluid",
    shortDescription: "Transmission fluid for smooth shifting and protection.",
    description:
      "Quality automatic transmission fluid designed for reliable performance and wear protection.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Motor Oil & Transmission Fluids",
    subcategory: "Transmission Fluids",
    packaging: "1 Quart Bottle",
    moq: "100 Cases",
    sku: "AO-ATF-1QT",
    unitSize: "1 Quart",
    unitsPerCase: "12 Bottles",
    specs: ["Smooth Shifting", "Wear Protection", "Wholesale Supply"],
    whatsappMessage: "Hello, I am interested in Automatic Transmission Fluid.",
  },
  {
    id: "4",
    name: "Brake Pads",
    slug: "brake-pads",
    shortDescription: "Durable replacement brake pads for passenger vehicles.",
    description:
      "Reliable brake pads for repair shops, distributors, and retail auto parts sellers.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Auto Parts",
    subcategory: "Brake System",
    moq: "50 Sets",
    sku: "AO-BP-001",
    specs: ["Durable Material", "Replacement Part", "Bulk Available"],
    whatsappMessage: "Hello, I am interested in Brake Pads.",
  },
  {
    id: "5",
    name: "Oil Filter",
    slug: "oil-filter",
    shortDescription: "Engine oil filter for regular vehicle maintenance.",
    description:
      "Standard oil filters available for wholesale and retail auto parts supply.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Auto Parts",
    subcategory: "Filters",
    moq: "100 Units",
    sku: "AO-OF-001",
    specs: ["Engine Protection", "Maintenance Item", "Wholesale Ready"],
    whatsappMessage: "Hello, I am interested in Oil Filters.",
  },
  {
    id: "6",
    name: "Personal Care Items",
    slug: "personal-care-items",
    shortDescription: "General merchandise for everyday personal care needs.",
    description:
      "Personal care products available for retail, wholesale, and distribution.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "General Merchandise",
    subcategory: "Personal Care",
    moq: "By Case",
    sku: "AO-GM-PC-001",
    specs: ["Retail Ready", "General Merchandise", "Bulk Supply"],
    whatsappMessage: "Hello, I am interested in Personal Care Items.",
  },
  {
    id: "7",
    name: "Motor Oil Case 3x5QT",
    slug: "motor-oil-case-3x5qt",
    shortDescription: "Wholesale 5-quart case packaging for distributors.",
    description:
      "Full synthetic motor oil packed in 3-bottle cases for bulk purchasing, resale, and export supply.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Motor Oil & Transmission Fluids",
    subcategory: "Engine Oils",
    packaging: "3 x 5 Quart Bottles",
    moq: "80 Cases",
    viscosity: "5W-30",
    oilType: "Full Synthetic",
    apiRating: "API SP",
    sku: "AO-CS-3X5QT",
    unitSize: "5 Quart",
    unitsPerCase: "3 Bottles",
    specs: ["Bulk Supply", "Export Ready", "Distributor Packaging"],
    whatsappMessage: "Hello, I am interested in Motor Oil Case 3x5QT.",
  },
  {
    id: "8",
    name: "Motor Oil Case 6x1QT",
    slug: "motor-oil-case-6x1qt",
    shortDescription: "Retail-ready 1-quart case configuration.",
    description:
      "Full synthetic motor oil packed in 6-bottle cases for retail shelves, repair shops, and wholesale buyers.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Motor Oil & Transmission Fluids",
    subcategory: "Engine Oils",
    packaging: "6 x 1 Quart Bottles",
    moq: "120 Cases",
    viscosity: "5W-30",
    oilType: "Full Synthetic",
    apiRating: "API SP",
    sku: "AO-CS-6X1QT",
    unitSize: "1 Quart",
    unitsPerCase: "6 Bottles",
    specs: ["Retail Packaging", "API Certified", "Wholesale Ready"],
    whatsappMessage: "Hello, I am interested in Motor Oil Case 6x1QT.",
  },
  {
    id: "9",
    name: "Engine Coolant",
    slug: "engine-coolant",
    shortDescription: "Cooling system fluid for everyday vehicle protection.",
    description:
      "Reliable engine coolant available for automotive retailers, service centers, and distribution programs.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Motor Oil & Transmission Fluids",
    subcategory: "Automotive Fluids",
    packaging: "1 Gallon Bottle",
    moq: "100 Cases",
    sku: "AO-COOL-1GAL",
    unitSize: "1 Gallon",
    unitsPerCase: "6 Bottles",
    specs: ["Cooling System Protection", "Bulk Available", "Service Ready"],
    whatsappMessage: "Hello, I am interested in Engine Coolant.",
  },
  {
    id: "10",
    name: "Engine Air Filter",
    slug: "engine-air-filter",
    shortDescription: "Replacement air filters for routine maintenance.",
    description:
      "Engine air filters supplied for repair shops, auto parts retailers, and wholesale maintenance programs.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Auto Parts",
    subcategory: "Filters",
    moq: "100 Units",
    sku: "AO-AF-001",
    specs: ["Replacement Part", "Maintenance Item", "Wholesale Supply"],
    whatsappMessage: "Hello, I am interested in Engine Air Filters.",
  },
  {
    id: "11",
    name: "Wiper Blades",
    slug: "wiper-blades",
    shortDescription: "All-season replacement wiper blades.",
    description:
      "Durable wiper blades available for auto parts sellers, service centers, and retail distribution.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "Auto Parts",
    subcategory: "Exterior Accessories",
    moq: "100 Pairs",
    sku: "AO-WB-001",
    specs: ["All-Season Use", "Replacement Part", "Retail Ready"],
    whatsappMessage: "Hello, I am interested in Wiper Blades.",
  },
  {
    id: "12",
    name: "Household Essentials",
    slug: "household-essentials",
    shortDescription: "Everyday household items for retail and wholesale.",
    description:
      "Assorted household essentials available for general merchandise buyers, retail stores, and distributors.",
    price: "Request Quote",
    image: "/placeholder.jpg",
    category: "General Merchandise",
    subcategory: "Household Products",
    moq: "By Case",
    sku: "AO-GM-HE-001",
    specs: ["General Merchandise", "Retail Ready", "Bulk Supply"],
    whatsappMessage: "Hello, I am interested in Household Essentials.",
  },
];