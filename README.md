# Crochet by K Kaur

A single-page, static storefront for GitHub Pages. No build step or external JavaScript dependencies are required.

## Publish on GitHub Pages

1. Create a GitHub repository and add these files and the `assets/` folder.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.

GitHub Pages will provide the published URL when deployment finishes.

## Update the shop

- Change product names, descriptions, photos, and starting prices in `products.js`.
- Set `salePrice` to a number for a reduced price, or `null` for no reduction.
- Product prices and optional sale prices are configured in `products.js`. Set `salePrice` to a number for a reduction or `null` for no reduction.
- Replace photos in `assets/` and update their paths in `products.js` as needed.
- WhatsApp ordering links use `919999166305` (India country code +91). Instagram links point to `@crochetbykkaur`.

Prices in `products.js` are initial sample prices in INR; please confirm them before publishing.
