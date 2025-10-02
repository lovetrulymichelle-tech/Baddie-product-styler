# Mobile-Friendly Demo

This directory contains a mobile-friendly web demo of Baddie Product Styler.

## Quick Start

### Option 1: Open Locally
Simply open `index.html` in your web browser (works on mobile too!).

### Option 2: Use a Local Server
For the best experience, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000/demo/` in your browser.

## Mobile Usage

The demo is fully responsive and works great on:
- 📱 iPhone and Android phones
- 📱 Tablets
- 💻 Desktop browsers

### On Your Phone:
1. Open the demo in your mobile browser
2. Enter your product details
3. Choose a template style
4. Tap "Style My Product"
5. Copy the styled description for use in your listings!

## Features

- ✨ Real-time product styling
- 🎨 Three template options (Modern, Classic, Minimal)
- 💰 Price formatting
- 👑 Optional branding
- 📱 Fully mobile responsive
- 🚀 No installation required

## Using in Your Mobile Workflow

1. **Bookmark the page** on your phone's home screen for quick access
2. **Style products on-the-go** while you're shopping or listing items
3. **Copy and paste** styled descriptions directly into your selling platforms

## For Developers

To integrate this into your mobile app or website:

```html
<!-- Include via CDN (when published) -->
<script type="module">
  import { styleMyProduct, formatPrice } from 'https://cdn.jsdelivr.net/npm/baddie-product-styler/dist/index.mjs';
  
  const styled = styleMyProduct({
    name: 'Product Name',
    description: 'Product description',
    price: 99.99
  });
  
  console.log(styled.styledDescription);
</script>
```

## Commercial Use

If you're using this for your business, please review our [commercial licensing options](../PRICING.md).
