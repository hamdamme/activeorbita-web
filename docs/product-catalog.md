# Branded catalog

The 125 branded listings live in `app/data/branded-products.json`; existing generic products remain in `app/data/products.ts`. Each branded listing has a locally hosted WebP photo and a manufacturer reference. `product-sources.json` records research and photo sources.

AO-prefixed SKUs are internal catalog identifiers, not manufacturer numbers. Package-specific manufacturer numbers are separate fields. Prices, stock, case quantities and minimum orders require a supplier quote.

Mobil Delvac 1300 Super, Everest Advanced CK-4 and Shell Rotella T4 15W-40 offer 1 US gallon, 5 US gallon pail and 55 US gallon drum choices. The selected package is carried into both contact-form and WhatsApp inquiries.

Product-family photos and packaging differences are labeled as representative. Confirm exact supplier packaging before replacing these with inventory-specific photos. Toothbrushes use Oral-B branding; toothpaste uses Crest branding.

To maintain a listing, update its data and source record, place the photo under `public/images/products/brands`, and run `npm run lint` and `npm run build`. Keep slugs stable to preserve existing links.

## Product information review — 2026-10-21

- Verified all 12 Castrol images against the manufacturer’s grade-specific bottle labels. New `-grade.webp` assets distinguish these images from previously cached versions. Each shows a 1 US quart bottle; this is a manufacturer reference, not confirmation of inventory or case quantities.
- Added manufacturer-listed sizes for Old Spice High Endurance Pure Sport and Crest Cavity Protection. Crest retail multipacks are explicitly distinguished from wholesale cases.
- Added `manufacturerSizes` and `imageNote` fields for verified reference information. Keep `imageCaption` for representative images; it triggers the catalog badge.
- Diesel listings now explicitly identify the photographed package as a 1 US gallon jug, so pail and drum requests cannot be mistaken for the image shown.
- Case quantities and minimum orders for branded products are explicitly marked as confirmed with a quote where supplier information is not available.
- 44 listings retain representative-photo labels: Mobil 1 (32), Mobil Super (7), Everest high-mileage grades without an exact photo (2), and the three diesel listings with multiple package choices. Mobil’s direct image endpoint rejected this review’s download request. Retain existing representative photos until exact assets can be verified.
- Source and verification records are maintained in `product-sources.json`. No stock, pricing, supplier case counts or minimum orders were inferred from manufacturer images.

### Semi-truck parts (local review)

Added five quote-only entries under Auto Parts → Semi-Truck Parts: brake shoe kits, brake drums, radiators, cloth seat covers, and Cordura seat covers. Existing passenger-car listings remain unchanged. Images are locally optimized WebP reference photos, with original sources recorded in product-sources.json. They do not establish stocked brands, universal fitment, price, or availability. Seat covers explicitly exclude the seat shown in the photo. Confirm image reuse permissions before publishing these supplier/manufacturer photos, or replace with owned product photography.

Product pages include application-specific fitment instructions. Direct contact and WhatsApp inquiry drafts ask for vehicle/seat details and existing part numbers. No external messages are sent by these changes.

## Homepage and image refresh — 2026-11-23

The homepage now uses brand-blue accents, a product-photo hero, and visual category cards before featured products. Existing navigation, quote basket and inquiry routes remain available.

Higher-resolution source files now serve the Everest Advanced CK-4 15W-40 listing (871 × 1080, previously 726 × 900) and brake drum and radiator listings (1500 × 1500, previously 900 × 900). Original source files are preserved, with responsive delivery through Next.js Image. The prior WebP files remain available. These photos remain representative; the Everest jug does not depict the pail or drum options. Manufacturer reference imagery does not establish stock or commercial reuse permission.

Crest Cavity Protection's source remains 640 × 640, so downloading it again would not add detail. Mobil's recorded original image endpoint returned HTTP 403; its existing family photo remains labeled representative. Further replacements require a verified clearer source or supplier photography.

Seat-cover sources are already at their original 520 × 867 resolution. The brake-shoe source now returns only 200 × 150, so the existing photo was retained instead of downgrading it.
