# Examples

This directory contains examples showing how to use baddie-product-styler.

## Running the Examples

First, make sure you've built the project:

```bash
npm run build
```

Then run any example:

```bash
# CommonJS example
node examples/basic-usage.js

# ESM example
node examples/esm-usage.mjs
```

## Available Examples

### basic-usage.js

CommonJS example demonstrating:
- Styling products with different templates
- Using the formatPrice utility
- Batch processing multiple products

### esm-usage.mjs

ES Modules example demonstrating:
- Using import syntax
- Styling an inventory of products
- Rotating through different templates

## Creating Your Own Examples

Feel free to create your own examples! The basic structure is:

**CommonJS:**
```javascript
const { styleMyProduct, formatPrice } = require('../dist/index.js');

const product = {
  name: 'Your Product',
  description: 'Product description',
  price: 99.99
};

const styled = styleMyProduct(product, { template: 'modern' });
console.log(styled.styledDescription);
```

**ESM:**
```javascript
import { styleMyProduct, formatPrice } from '../dist/index.mjs';

const product = {
  name: 'Your Product',
  description: 'Product description',
  price: 99.99
};

const styled = styleMyProduct(product, { template: 'modern' });
console.log(styled.styledDescription);
```
