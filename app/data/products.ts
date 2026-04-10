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
    name: "Logistics Dashboard",
    slug: "logistics-dashboard",
    shortDescription: "Real-time shipment and operations visibility.",
    description:
      "A modern logistics dashboard built for tracking shipments, operational metrics, and business performance in one place.",
    price: "$499",
    image: "/products/logistics-dashboard.jpg",
    category: "Software",
    featured: true,
  },
  {
    id: "2",
    name: "ERP Integration Service",
    slug: "erp-integration-service",
    shortDescription: "Connect your ERP with your workflows and APIs.",
    description:
      "Custom ERP integration service for syncing operational data, automating workflows, and improving visibility across systems.",
    price: "$899",
    image: "/products/erp-integration.jpg",
    category: "Integration",
    featured: true,
  },
  {
    id: "3",
    name: "Business Automation Package",
    slug: "business-automation-package",
    shortDescription: "Automate repetitive business processes.",
    description:
      "Automation solutions for forms, notifications, reports, and data pipelines to save time and reduce manual work.",
    price: "$699",
    image: "/products/business-automation.jpg",
    category: "Automation",
  },
];