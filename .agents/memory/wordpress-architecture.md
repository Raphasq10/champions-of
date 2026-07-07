---
type: wordpress-architecture
created: 2026-07-04
updated: 2026-07-04
---

# WordPress Architecture Decision

## Context
The user requested a WordPress implementation but possesses the following skill metrics:
* **HTML**: 60%
* **CSS**: 30%
* **WordPress**: 30%
* **Elementor**: 50%
* **PHP**: 1%
* **JS**: 5%

To avoid codebase bloat, complex PHP loops, database vulnerabilities, and to maintain the user's highly profitable freelance maintenance workflow (charging 2h for 5min of work), we chose a **Hybrid Static WordPress Theme** architecture.

## Architectural Decision

### 1. Theme Files Setup
The theme is located at `/wp-content/themes/champions-theme/` and contains:
* `style.css`: Theme metadata header + global layout styles.
* `functions.php`: Simple enqueue scripts script (loads styles, scripts, and `product.js`).
* `front-page.php`: Pure HTML/CSS home page.
* `page-product.php`: Pure HTML/CSS product details layout.
* `product.js`: JavaScript data object holding all product information.

### 2. Maintenance and Update Flow
* All product texts, slogans, image links, and specs are loaded dynamically by client-side Javascript from `product.js`.
* To edit products, the user logs in to the **WordPress Admin Dashboard** $\rightarrow$ **Appearance** $\rightarrow$ **Theme File Editor**, edits `product.js` directly in the browser, and saves it.
* **0% PHP / 5% JS skills required** for maintaining/updating the catalog.

### 3. Performance Optimization
* Full Page Caching (via WP Super Cache or Nginx FastCGI) serves pages as flat `.html` files.
* Bypasses PHP and MySQL execution entirely for visitors, ensuring response times under 100ms (identical to a static website).
