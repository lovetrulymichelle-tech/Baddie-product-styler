# Quick Start Guide

Welcome to Baddie Product Styler! This guide will get you started in minutes.

## Choose Your Path

### 🚀 I Want to Try It Now (Mobile/Desktop)

**Fastest way - No installation needed!**

1. Open `demo/index.html` in your browser
2. Fill in your product details
3. Click "Style My Product"
4. Copy the styled description!

Perfect for:
- Testing the tool
- Using on your phone
- Quick product styling

[→ Read the Mobile Guide](MOBILE_GUIDE.md)

---

### 👨‍💻 I'm a Developer

**Install via npm:**

```bash
npm install baddie-product-styler
```

**Use in your code:**

```javascript
import { styleMyProduct, formatPrice } from 'baddie-product-styler';

const product = {
  name: 'Designer Handbag',
  description: 'Authentic luxury handbag',
  price: 299.99
};

const styled = styleMyProduct(product, { template: 'modern' });
console.log(styled.styledDescription);
console.log(formatPrice(styled.price)); // $299.99
```

[→ See More Examples](examples/)

---

### 💼 I'm Using This for Business

**Commercial License Required**

Starting at $29/month for commercial use.

1. Review [pricing options](PRICING.md)
2. Purchase your license
3. Get priority support

[→ Commercial License Setup](COMMERCIAL_SETUP.md)

---

## Features at a Glance

### Templates

Choose from three styling templates:

**Modern** (default)
```
✨ Your description ✨
🔥 LIMITED AVAILABILITY 🔥
💎 Premium Quality
```

**Classic**
```
Your description

Classic Quality | Trusted by Thousands
```

**Minimal**
```
Your description

Simple. Clean. Quality.
```

### Price Formatting

```javascript
formatPrice(299.99);        // $299.99
formatPrice(299.99, '€');   // €299.99
formatPrice(299.99, '£');   // £299.99
```

### Input Validation

The tool automatically validates:
- ✅ Product names (cannot be empty)
- ✅ Prices (must be positive numbers)
- ✅ Currency symbols (defaults to $)
- ✅ Descriptions (provides defaults if empty)

---

## Common Use Cases

### 1. Reselling on Poshmark

```javascript
const product = {
  name: 'Designer Dress',
  description: 'Size M, never worn',
  price: 89.99
};

const styled = styleMyProduct(product, { 
  template: 'modern',
  addBranding: false  // Most platforms don't allow branding
});

// Copy styled.styledDescription to Poshmark listing
```

### 2. eBay Listings

```javascript
const styled = styleMyProduct(product, { 
  template: 'classic'  // Classic works well on eBay
});
```

### 3. Batch Processing

```javascript
const products = [...]; // Your products array

products.forEach(product => {
  const styled = styleMyProduct(product);
  console.log(`${styled.name}: ${styled.styledDescription}`);
});
```

### 4. Mobile App Integration

```javascript
// React Native / Expo
import { styleMyProduct } from 'baddie-product-styler';

function StyleButton({ product }) {
  const handleStyle = () => {
    const styled = styleMyProduct(product, { template: 'modern' });
    // Use styled.styledDescription in your app
  };
  
  return <Button onPress={handleStyle}>Style Product</Button>;
}
```

---

## Platform-Specific Tips

### Poshmark
- Use `modern` or `minimal` templates
- Keep descriptions concise
- Don't use external branding

### eBay
- `classic` template works best
- Include price in title
- Add detailed specifications

### Mercari
- `modern` template for appeal
- Emphasize condition
- Quick shipping mention

### Facebook Marketplace
- `minimal` for local sales
- Focus on pickup/delivery
- Include location info

---

## Troubleshooting

### "Product name is required" Error

Make sure your product has a name:
```javascript
// ❌ Wrong
styleMyProduct({ description: 'test' });

// ✅ Correct
styleMyProduct({ name: 'Product Name', description: 'test' });
```

### "Price must be valid" Error

Ensure price is a positive number:
```javascript
// ❌ Wrong
styleMyProduct({ name: 'Product', price: -10 });
styleMyProduct({ name: 'Product', price: 'free' });

// ✅ Correct
styleMyProduct({ name: 'Product', price: 10 });
styleMyProduct({ name: 'Product', price: 0 });
```

### Import Errors

Make sure you've installed the package:
```bash
npm install baddie-product-styler
```

And you're using the correct import syntax for your environment:
```javascript
// ES Modules
import { styleMyProduct } from 'baddie-product-styler';

// CommonJS
const { styleMyProduct } = require('baddie-product-styler');
```

---

## Next Steps

### Learn More
- 📖 [Full README](README.md) - Complete documentation
- 📱 [Mobile Guide](MOBILE_GUIDE.md) - Mobile-specific instructions
- 💼 [Pricing](PRICING.md) - Commercial licensing
- 🔧 [Contributing](CONTRIBUTING.md) - Help improve the project

### Get Help
- 🐛 [Report Issues](https://github.com/lovetrulymichelle-tech/Baddie-product-styler/issues)
- 💬 [Discussions](https://github.com/lovetrulymichelle-tech/Baddie-product-styler/discussions)
- 📧 Email: support@baddieproductstyler.com (update with actual email)

### Share Your Success
Using Baddie Product Styler successfully? We'd love to hear about it!
- ⭐ Star the repo
- 📣 Share on social media
- 💝 Tell other resellers

---

## Quick Reference

### Basic Syntax

```javascript
import { styleMyProduct, formatPrice } from 'baddie-product-styler';

// Minimum required
styleMyProduct({ name: 'Product Name' });

// With all options
styleMyProduct(
  {
    name: 'Product Name',
    description: 'Product description',
    price: 99.99,
    imageUrl: 'https://...'
  },
  {
    template: 'modern', // or 'classic', 'minimal'
    addBranding: true
  }
);

// Format prices
formatPrice(99.99);        // $99.99
formatPrice(99.99, '€');   // €99.99
```

### Templates

| Template | Best For | Style |
|----------|----------|-------|
| `modern` | Fashion, trending items | Emojis, energetic |
| `classic` | Vintage, professional | Traditional, trustworthy |
| `minimal` | High-end, sophisticated | Clean, understated |

---

Happy styling! 🎨✨
