/**
 * Product Styler Interface
 */
export interface Product {
  name: string;
  description?: string;
  price?: number;
  imageUrl?: string;
}

/**
 * Styling Options
 */
export interface StyleOptions {
  template?: 'modern' | 'classic' | 'minimal';
  addBranding?: boolean;
}

/**
 * Styled Product Result
 */
export interface StyledProduct extends Product {
  styledDescription: string;
  template: string;
}

/**
 * Main function to style a product for reselling
 * @param product - The product to style
 * @param options - Styling options
 * @returns Styled product with enhanced description
 */
export function styleMyProduct(
  product?: Product,
  options: StyleOptions = {}
): StyledProduct {
  const defaultProduct: Product = {
    name: 'Sample Product',
    description: 'A great product for resale',
    price: 0,
  };

  const productToStyle = product || defaultProduct;
  const template = options.template || 'modern';

  let styledDescription = productToStyle.description || '';

  // Apply styling based on template
  switch (template) {
    case 'modern':
      styledDescription = `✨ ${styledDescription} ✨\n🔥 LIMITED AVAILABILITY 🔥\n💎 Premium Quality`;
      break;
    case 'classic':
      styledDescription = `${styledDescription}\n\nClassic Quality | Trusted by Thousands`;
      break;
    case 'minimal':
      styledDescription = `${styledDescription}\n\nSimple. Clean. Quality.`;
      break;
  }

  if (options.addBranding) {
    styledDescription += '\n\n👑 Styled by Baddie Product Styler';
  }

  return {
    ...productToStyle,
    styledDescription,
    template,
  };
}

/**
 * Utility function to format price
 * @param price - Price to format
 * @param currency - Currency symbol (default: $)
 * @returns Formatted price string
 */
export function formatPrice(price: number, currency: string = '$'): string {
  return `${currency}${price.toFixed(2)}`;
}

// Default export
export default {
  styleMyProduct,
  formatPrice,
};
