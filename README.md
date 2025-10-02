# Baddie-product-styler

Baddie-product-styler is a tool designed for resellers and online sellers who want to streamline their sales process. If you're looking to sell items without the heavy lifting of manual setup, this tool helps automate and simplify the tasks involved in listing and managing products.

## Features

- 🎨 Multiple styling templates (modern, classic, minimal)
- ✨ Auto-enhance product descriptions with validation
- 💰 Price formatting utilities with error handling
- 📦 Works with both CommonJS and ESM
- 🔧 TypeScript support included
- 📱 Mobile-friendly web demo included
- ✅ Input validation and error handling
- 💼 Commercial licensing available

## Installation

### For Developers

Install the package via npm:

```bash
npm install baddie-product-styler
```

### For Mobile/Quick Use

Want to try it on your phone? Check out our [mobile-friendly demo](demo/README.md)!

Simply open `demo/index.html` in any browser (mobile or desktop) to start styling products immediately - no installation required!

## Usage

### Basic Usage

```javascript
import { styleMyProduct } from 'baddie-product-styler';

// Style a product with default settings
const product = {
  name: 'Luxury Handbag',
  description: 'Designer handbag in excellent condition',
  price: 299.99
};

const styled = styleMyProduct(product);
console.log(styled.styledDescription);
// Output: ✨ Designer handbag in excellent condition ✨
//         🔥 LIMITED AVAILABILITY 🔥
//         💎 Premium Quality
```

### With Templates

```javascript
import { styleMyProduct } from 'baddie-product-styler';

const product = {
  name: 'Vintage Watch',
  description: 'Rare timepiece',
  price: 599
};

// Modern template (default)
const modern = styleMyProduct(product, { template: 'modern' });

// Classic template
const classic = styleMyProduct(product, { template: 'classic' });

// Minimal template
const minimal = styleMyProduct(product, { template: 'minimal' });
```

### With Branding

```javascript
import { styleMyProduct } from 'baddie-product-styler';

const styled = styleMyProduct(product, { 
  template: 'modern',
  addBranding: true 
});
```

### Format Prices

```javascript
import { formatPrice } from 'baddie-product-styler';

console.log(formatPrice(299.99));        // $299.99
console.log(formatPrice(299.99, '€'));   // €299.99
```

### CommonJS

```javascript
const { styleMyProduct, formatPrice } = require('baddie-product-styler');

const styled = styleMyProduct({ name: 'Product', description: 'Great item' });
```

## API Reference

### `styleMyProduct(product?, options?)`

Styles a product for reselling with enhanced descriptions.

**Parameters:**
- `product` (optional): Product object with `name`, `description`, `price`, and `imageUrl`
- `options` (optional): Styling options
  - `template`: `'modern'` | `'classic'` | `'minimal'` (default: `'modern'`)
  - `addBranding`: `boolean` (default: `false`)

**Returns:** Styled product with enhanced `styledDescription` and `template` fields

### `formatPrice(price, currency?)`

Formats a price with currency symbol.

**Parameters:**
- `price`: Number to format
- `currency` (optional): Currency symbol (default: `'$'`)

**Returns:** Formatted price string

## Mobile Usage

### Quick Access on Your Phone

1. Open `demo/index.html` in your mobile browser
2. Bookmark it to your home screen for instant access
3. Style products on-the-go while shopping or listing items
4. Copy styled descriptions directly to your selling platforms

Perfect for resellers who work from their phones! See the [demo guide](demo/README.md) for more details.

## Pricing & Commercial Use

Baddie Product Styler is **free for personal use** under the MIT License.

For **commercial use** (businesses, revenue-generating activities), we offer affordable commercial licenses starting at $29/month.

📄 [View Pricing & Licensing Options](PRICING.md)

### When Do I Need a Commercial License?

You need a commercial license if you're:
- Running a business that uses this tool
- Selling products styled with this tool for profit
- Using it in a commercial application or service
- Part of a company using this tool

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is dual-licensed:
- **MIT License** for personal, non-commercial use
- **Commercial License** required for commercial use - see [PRICING.md](PRICING.md)

See [LICENSE](LICENSE) for the full MIT license text.
