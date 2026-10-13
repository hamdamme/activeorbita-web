import Image from "next/image";
import type { Product } from "@/app/data/products";

export default function ProductImage({ product, priority = false }: { product: Product; priority?: boolean }) {
  const fallback = product.category === "Motor Oil & Transmission Fluids"
    ? "/images/products/motor-oil.png"
    : product.category === "Auto Parts"
    ? "/images/products/auto-parts.png"
    : "/images/products/general-merchandise.png";

  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-100 bg-white">
      <Image
        src={product.image || fallback}
        alt={product.imageCaption ? `${product.brand} representative product image` : product.name}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        className="object-contain p-6 transition duration-300 group-hover:scale-105"
        preload={priority}
      />
      {product.imageCaption && (
        <span className="absolute bottom-3 left-3 rounded-full bg-gray-50 px-2.5 py-1 text-xs text-gray-500">
          Representative image
        </span>
      )}
    </div>
  );
}
