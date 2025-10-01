/**
 * Basic usage example for baddie-product-styler
 * 
 * Run this example:
 * 1. Build the project: npm run build
 * 2. Run the example: node examples/basic-usage.js
 */

const { styleMyProduct, formatPrice } = require('../dist/index.js');

console.log('=== Baddie Product Styler Examples ===\n');

// Example 1: Style a handbag with modern template
console.log('Example 1: Modern Template');
console.log('------------------------');
const handbag = {
  name: 'Designer Handbag',
  description: 'Authentic luxury handbag, gently used',
  price: 450,
  imageUrl: 'https://example.com/handbag.jpg'
};

const modernStyled = styleMyProduct(handbag, { 
  template: 'modern', 
  addBranding: true 
});

console.log(`Product: ${modernStyled.name}`);
console.log(`Price: ${formatPrice(modernStyled.price)}`);
console.log(`\nStyled Description:\n${modernStyled.styledDescription}\n`);

// Example 2: Style a watch with classic template
console.log('Example 2: Classic Template');
console.log('------------------------');
const watch = {
  name: 'Vintage Watch',
  description: 'Swiss-made timepiece from the 1970s',
  price: 1200
};

const classicStyled = styleMyProduct(watch, { template: 'classic' });
console.log(`Product: ${classicStyled.name}`);
console.log(`Price: ${formatPrice(classicStyled.price)}`);
console.log(`\nStyled Description:\n${classicStyled.styledDescription}\n`);

// Example 3: Style sneakers with minimal template
console.log('Example 3: Minimal Template');
console.log('------------------------');
const sneakers = {
  name: 'Limited Edition Sneakers',
  description: 'Brand new, never worn',
  price: 299
};

const minimalStyled = styleMyProduct(sneakers, { template: 'minimal' });
console.log(`Product: ${minimalStyled.name}`);
console.log(`Price: ${formatPrice(minimalStyled.price)}`);
console.log(`\nStyled Description:\n${minimalStyled.styledDescription}\n`);

// Example 4: Multiple products with different currencies
console.log('Example 4: Batch Processing');
console.log('------------------------');
const products = [
  { name: 'Jacket', description: 'Leather jacket', price: 350 },
  { name: 'Sunglasses', description: 'Designer shades', price: 180 },
  { name: 'Wallet', description: 'Genuine leather', price: 95 }
];

products.forEach(product => {
  const styled = styleMyProduct(product, { template: 'modern' });
  console.log(`${styled.name}: ${formatPrice(styled.price)}`);
});

console.log('\n=== Examples Complete ===');
