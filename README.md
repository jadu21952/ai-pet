# AI PET Single Product Website

Ready for GitHub → Cloudflare Pages deployment.

## Files
- `index.html` - main landing page
- `checkout.html` - address + checkout page
- `success.html` - payment/order success page
- `failed.html` - failed payment page
- `site-data.js` - edit product name, price, WhatsApp, FAQs, reviews, image paths
- `assets/` - replace logo/product/mockup images here
- `functions/` - Cloudflare Pages Functions placeholders for real Razorpay backend

## How to update images
Replace files inside `assets/`, especially:
- `product-main.png`

Or edit image path in `site-data.js`.

## Cloudflare Pages settings
- Framework preset: None
- Build command: leave empty
- Output directory: `/` or root

## Razorpay
This ZIP has a demo checkout redirect if Razorpay key is not configured.
For production:
1. Add your Razorpay Key ID in `site-data.js`.
2. Add `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` in Cloudflare Pages Environment Variables.
3. Complete server-side order creation and signature verification in `/functions` before real launch.
