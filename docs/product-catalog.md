# Branded catalog

The 125 branded listings live in `app/data/branded-products.json`; existing generic products remain in `app/data/products.ts`. Each branded listing has a locally hosted WebP photo and a manufacturer reference. `product-sources.json` records research and photo sources.

AO-prefixed SKUs are internal catalog identifiers, not manufacturer numbers. Package-specific manufacturer numbers are separate fields. Prices, stock, case quantities and minimum orders require a supplier quote.

Mobil Delvac 1300 Super, Everest Advanced CK-4 and Shell Rotella T4 15W-40 offer 1 US gallon, 5 US gallon pail and 55 US gallon drum choices. The selected package is carried into both contact-form and WhatsApp inquiries.

Product-family photos and packaging differences are labeled as representative. Confirm exact supplier packaging before replacing these with inventory-specific photos. Toothbrushes use Oral-B branding; toothpaste uses Crest branding.

To maintain a listing, update its data and source record, place the photo under `public/images/products/brands`, and run `npm run lint` and `npm run build`. Keep slugs stable to preserve existing links.
