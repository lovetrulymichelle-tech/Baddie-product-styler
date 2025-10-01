/**
 * ESM (ES Modules) usage example for baddie-product-styler
 * 
 * Run this example:
 * 1. Build the project: npm run build
 * 2. Run the example: node examples/esm-usage.mjs
 */

import { styleMyProduct, formatPrice } from '../dist/index.mjs';

console.log('=== Baddie Product Styler - ESM Example ===\n');

// Example: E-commerce batch styling
const inventory = [
  {
    name: 'Retro Gaming Console',
    description: 'Classic gaming system with original controllers',
    price: 250
  },
  {
    name: 'Designer Scarf',
    description: 'Silk scarf with unique pattern',
    price: 125
  },
  {
    name: 'Collectible Vinyl Record',
    description: 'First edition pressing, mint condition',
    price: 85
  }
];

console.log('Styling inventory with different templates...\n');

const templates = ['modern', 'classic', 'minimal'];

inventory.forEach((item, index) => {
  const template = templates[index % templates.length];
  const styled = styleMyProduct(item, { template });
  
  console.log(`📦 ${styled.name}`);
  console.log(`   Price: ${formatPrice(styled.price)}`);
  console.log(`   Template: ${styled.template}`);
  console.log(`   Styled:\n   ${styled.styledDescription.replace(/\n/g, '\n   ')}`);
  console.log('');
});

console.log('=== ESM Example Complete ===');
