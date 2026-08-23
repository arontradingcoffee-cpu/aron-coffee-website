# Aron Coffee & Tea Export PLC — GitHub Pages Website

This package contains a mobile-first, Android-phone-friendly, GitHub Pages-ready website for **Aron Coffee & Tea Export PLC / Aron Farm to Cup Coffee**.

## What is included

- `index.html` — complete one-page website
- `styles.css` — mobile-first responsive styling
- `script.js` — mobile menu, inquiry form mailto behaviour, service worker registration
- `manifest.webmanifest` — Android/PWA install support
- `sw.js` — simple offline cache support
- `.nojekyll` — prevents GitHub Pages from ignoring special folders/files
- `assets/` — optimised images, icons and downloadable company profile PDF
- `.github/workflows/pages.yml` — optional GitHub Actions workflow for Pages deployment

## Fast GitHub Pages deployment

1. Create a new GitHub repository, for example: `aron-coffee-website`.
2. Upload all files and folders from this package to the repository root.
3. Commit the files to the `main` branch.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose either:
   - **Deploy from a branch** → Branch: `main` → Folder: `/root`; or
   - **GitHub Actions** if you want to use the included workflow.
6. Wait for GitHub to publish the site.
7. Open the published GitHub Pages link on an Android phone and test the menu, buttons and form.

## Optional custom domain

If Aron wants to use `aroncoffeetrading.com`, add a file named `CNAME` at the root of the repository with this single line:

```txt
aroncoffeetrading.com
```

Then configure the domain DNS records according to GitHub Pages instructions.

## Before publishing

Please confirm:

- Exact export volumes
- Exact packaging sizes
- Final certification documentation
- Social media links
- Confirmed sensory notes for Nekemete, Limu/Limousine and Djimma coffee

Do not publish unverified claims about certifications, awards, export volumes, client names or factory capacity.

## Update included: Leadership profiles

This package updates the GitHub Pages website with:

- Abebe Tafere Mulu added as Export Manager using the black-shirt portrait supplied in the update document.
- Mr Getnet Shimekt Biratu's profile image updated to the standardised blue-shirt portrait.
- Leadership section revised into a consistent two-card layout for mobile and desktop viewing.

To publish the update, upload and overwrite the files in the existing `aron-coffee-website` GitHub repository, keeping `index.html` at the repository root.
