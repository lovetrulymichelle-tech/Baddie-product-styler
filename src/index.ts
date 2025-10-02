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
  
  // Validate product name
  if (!productToStyle.name || productToStyle.name.trim() === '') {
    throw new Error('Product name is required and cannot be empty');
  }
  
  // Validate price if provided
  if (productToStyle.price !== undefined && (productToStyle.price < 0 || !isFinite(productToStyle.price))) {
    throw new Error('Product price must be a valid positive number');
  }
  
  const template = options.template || 'modern';

  let styledDescription = (productToStyle.description || '').trim();
  
  // Handle empty descriptions
  if (!styledDescription) {
    styledDescription = 'Quality product available for purchase';
  }

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
    default:
      // Fallback to modern template for any unexpected values
      styledDescription = `✨ ${styledDescription} ✨\n🔥 LIMITED AVAILABILITY 🔥\n💎 Premium Quality`;
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
  // Validate price
  if (typeof price !== 'number' || !isFinite(price)) {
    throw new Error('Price must be a valid number');
  }
  
  if (price < 0) {
    throw new Error('Price cannot be negative');
  }
  
  // Validate currency
  if (!currency || currency.trim() === '') {
    currency = '$';
  }
  
  return `${currency}${price.toFixed(2)}`;
}

// Default export
export default {
  styleMyProduct,
  formatPrice,
};
