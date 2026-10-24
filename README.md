# Khaliq Tours & Travels

Static Phase 1 website. HTML, CSS and vanilla JavaScript only. No build step and no backend.

## Preview

Open `index.html` in a browser, or run a local static server from this folder:

```bash
python3 -m http.server 8080
```

## Before launch

Edit `js/config.js`, then replace every `https://yourdomain.com` in the HTML files, `sitemap.xml` and `robots.txt`.

| Setting | Current value | Action |
|---|---|---|
| `SITE_URL` | `https://yourdomain.com` | Final domain, including `https://` |
| `GA4_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Real GA4 id, or leave the placeholder so the tag stays off |
| `GOOGLE_ADS_ID` and labels | placeholders | Real values from Google Ads. Leave placeholders to keep the tag off |
| Phone and WhatsApp | `+91 7418045047` / `917418045047` | Already set. WhatsApp must stay digits only, with country code |
| Email | `khaliqtravels@gmail.com` | Confirm |

Phone numbers in the HTML `tel:` and visible text match the config. If the mobile number changes, update both `js/config.js` and the HTML. JavaScript rewrites WhatsApp and `data-call` links from the config when the page loads.

Analytics loads once, and only after the placeholders are replaced. A WhatsApp or call click is an enquiry event, not a completed booking. There is no form, so the form conversion label is unused.

## What changed in this redesign

- Hero is one full-bleed photograph with a single dark shade and a capped height (`clamp(440px, 70svh, 560px)` on small screens, slightly taller on desktop). The old hero stacked a 70vh box, a second navy gradient, and a 45% opacity photo, which left a muddy band and an awkward crop before the next section.
- Five service categories on the homepage. Flights are the large card. Visa, customised tours, Umrah and other travel are separate cards.
- Tours are described as custom arrangements. There is no package catalogue, price, hotel or departure date.
- Visa and tours share `visa-tour-packages.html`, with anchors `#visa` and `#tours`, so the site does not gain a fake package page.
- Homepage and contact page show the address, primary mobile, landline, email, hours, map and a Get Directions link. Directions use the coordinates from the supplied Google Maps embed: `10.977432292111622, 76.96333577116421`.
- The alternate mobile number has been removed from pages, config, footer and structured data.
- Images are local JPEG and WebP files. The supplied logo file is unchanged.
- Mobile header is logo plus menu. Call and WhatsApp stay in the fixed bottom bar, with safe-area padding. The bar is hidden from 1080px, where the header WhatsApp button is visible.

## Confirm before going live

These details are carried from the existing Google listing and the map embed. They are not newly invented, but the business owner should confirm them:

1. Public address. The listing used here is 147, KSM Complex, 1st Floor, Bharath Nagar, 2nd Street, Saramedu Main Road, Tippu Nagar, Karumbukkadai, Coimbatore, Tamil Nadu 641023. An earlier social post used PIN 641008. The brief also says Kuniyamuthur. Publish one confirmed line.
2. Hours, taken from the same listing: Monday–Saturday 9:30 AM–9:30 PM, Sunday 10:30 AM–2:00 PM. They are also in the structured data.
3. Landline `04224 779622`, linked as `tel:04224779622`. Confirm that dial string.
4. The Google Business Profile link. The site uses the supplied map embed and a Maps directions URL for that pin.
5. Final domain, analytics ids and ads labels.
6. No customer reviews or ratings are shown. Do not add a star rating unless it is pulled from the live Google profile and kept accurate.

## Deploy

Cloudflare Pages on the free plan is the simplest host. Upload this folder, or connect a Git repository. Add the Hostinger domain in Cloudflare Pages and create only the DNS records Cloudflare shows you.

Do not change nameservers unless you mean to move all DNS. If Hostinger email is in use, keep the existing MX and TXT records. Domain registration and website hosting are separate. This site does not need paid Hostinger hosting.

If the Hostinger plan already includes static hosting, upload the folder to `public_html` instead.

After the domain works:

1. Set `SITE_URL` and replace `https://yourdomain.com` in canonical tags, Open Graph tags, `sitemap.xml`, `robots.txt` and the JSON-LD.
2. Prefer one hostname (root or `www`) and redirect the other.
3. Confirm HTTPS.
4. Add the site in Google Search Console and submit `sitemap.xml`.

## Pages

- `index.html`
- `flight-tickets.html`
- `visa-tour-packages.html` (`#visa`, `#tours`)
- `umrah-services.html`
- `other-travel-services.html` (`#bus`, `#train`, `#taxi`, `#local`)
- `contact.html`
- `privacy-policy.html`
- `terms.html`
- `404.html`

## Tests

Verified in this environment:

- Every internal HTML link and image path points at a file in the project.
- `data/services.json` parses.
- `js/config.js`, `js/main.js` and `js/analytics.js` pass `node --check`.
- CSS braces are balanced.
- A search of the project found no alternate mobile number.

Not verified here:

- A real browser at 320, 360, 375, 390, 430, 768, 1024 and 1440 pixels.
- PageSpeed or Lighthouse.
- Opening WhatsApp, the phone dialler, or email on a device.
- Google Analytics or Google Ads in a live account.
- Deployment, HTTPS, or Search Console.

## Edit the site

Service wording that must stay crawlable lives in the HTML, not in a fetch. `data/services.json` is the short reference list for the five services. Replace images in `assets/images/` and keep the same file names, or update both the JPEG and WebP references together.
