/**
 * Product Styler Interface
 */
export interface Product {
  name: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  imageUrls?: string[];
  condition?: string;
  brand?: string;
  originalPrice?: number;
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
  shortDescription?: string;
  longDescription?: string;
  recommendedPrice?: number;
  pricingGuidance?: {
    newPriceEquivalent?: string;
    usedMarketAssessment?: string;
    highEndThriftJustification?: string;
    recommendedPriceRange?: string;
    whySuggestedPrice?: string;
  };
  formattedOutput?: string;
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

  // Generate short and long descriptions
  const shortDescription = generateShortDescription(productToStyle.description || '');
  const longDescription = generateLongDescription(productToStyle, template);
  
  // Generate pricing guidance
  const recommendedPrice = productToStyle.price || 0;
  const pricingGuidance = generatePricingGuidance(productToStyle);
  
  const result: StyledProduct = {
    ...productToStyle,
    styledDescription,
    template,
    shortDescription,
    longDescription,
    recommendedPrice,
    pricingGuidance,
  };
  
  // Generate formatted output
  result.formattedOutput = formatProductListing(result);

  return result;
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

/**
 * Generate a short description from a longer description
 * @param description - Full description
 * @returns Short description (first sentence or up to 100 characters)
 */
function generateShortDescription(description: string): string {
  if (!description) return '';
  
  // Try to get first sentence
  const firstSentence = description.match(/^[^.!?]+[.!?]/);
  if (firstSentence && firstSentence[0].length <= 100) {
    return firstSentence[0].trim();
  }
  
  // Otherwise truncate to 100 characters
  if (description.length <= 100) {
    return description.trim();
  }
  
  return description.substring(0, 97).trim() + '...';
}

/**
 * Generate a long description with enhanced styling
 * @param product - Product information
 * @param template - Style template
 * @returns Enhanced long description
 */
function generateLongDescription(product: Product, template: string): string {
  let longDesc = product.description || '';
  
  // Add condition information if available
  if (product.condition) {
    longDesc += `\n\nCondition: ${product.condition}`;
  }
  
  // Add brand information if available
  if (product.brand) {
    longDesc += `\n\nBrand: ${product.brand}`;
  }
  
  // Apply template-specific enhancements
  switch (template) {
    case 'modern':
      longDesc += '\n\n✨ This is a premium piece perfect for those who appreciate quality and style.\n🔥 Don\'t miss out on this limited opportunity!\n💎 Carefully curated for discerning buyers.';
      break;
    case 'classic':
      longDesc += '\n\nA timeless piece that combines quality with value.\nPerfect addition to any collection.';
      break;
    case 'minimal':
      longDesc += '\n\nQuality item. Well maintained. Ready for its next owner.';
      break;
  }
  
  return longDesc;
}

/**
 * Generate pricing guidance based on product details
 * @param product - Product information
 * @returns Pricing guidance object
 */
function generatePricingGuidance(product: Product) {
  const price = product.price || 0;
  const originalPrice = product.originalPrice || price * 2;
  const condition = product.condition || 'good';
  
  // Calculate price ranges
  const minPrice = Math.round(price * 0.85);
  const maxPrice = Math.round(price * 1.15);
  
  // Determine condition multiplier
  let conditionMultiplier = 0.6;
  if (condition.toLowerCase().includes('new') || condition.toLowerCase().includes('mint')) {
    conditionMultiplier = 0.8;
  } else if (condition.toLowerCase().includes('excellent') || condition.toLowerCase().includes('like new')) {
    conditionMultiplier = 0.7;
  } else if (condition.toLowerCase().includes('good')) {
    conditionMultiplier = 0.6;
  }
  
  const usedMarketPrice = Math.round(originalPrice * conditionMultiplier);
  
  return {
    newPriceEquivalent: `Original retail price approximately ${formatPrice(originalPrice)}`,
    usedMarketAssessment: `Typical used market value for this condition: ${formatPrice(usedMarketPrice - 20)} - ${formatPrice(usedMarketPrice + 20)}`,
    highEndThriftJustification: `This item is priced as "high-end thrift" because it offers ${product.brand ? `${product.brand} ` : ''}quality at a fraction of retail cost, while being in ${condition} condition.`,
    recommendedPriceRange: `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`,
    whySuggestedPrice: `${formatPrice(price)} is recommended because it positions the item competitively in the resale market while reflecting its ${condition} condition and quality.`
  };
}

/**
 * Format the complete product listing output
 * @param styled - Styled product
 * @returns Formatted listing text
 */
function formatProductListing(styled: StyledProduct): string {
  let output = `### Product Listing: ${styled.name}\n\n`;
  
  // Product Images
  output += '**Product Images:**\n';
  if (styled.imageUrls && styled.imageUrls.length > 0) {
    styled.imageUrls.forEach((url, index) => {
      output += `[Image ${index + 1} URL/Embed - with chosen background]\n${url}\n`;
    });
  } else if (styled.imageUrl) {
    output += `[Image 1 URL/Embed - with chosen background]\n${styled.imageUrl}\n`;
  } else {
    output += '[Image 1 URL/Embed - with chosen background]\n';
    output += '[Image 2 URL/Embed - with chosen background]\n';
    output += '[Image 3 URL/Embed - with chosen background]\n';
  }
  output += '(Each image displayed separately as requested)\n\n';
  
  // Short Description
  output += '**Short Description:**\n';
  output += `${styled.shortDescription}\n\n`;
  
  // Recommended Price
  if (styled.recommendedPrice) {
    output += `**Recommended Price:** ${formatPrice(styled.recommendedPrice)}\n\n`;
  }
  
  output += '---\n\n';
  output += '**Options for Your Listing:**\n\n';
  output += '*   **Description Type:**\n';
  output += `    *   **[Short Description]** (as above)\n`;
  output += `    *   **[Long Description]** (See below for full text)\n`;
  output += '*   **Price Selection:**\n';
  if (styled.recommendedPrice) {
    output += `    *   **[Recommended Price: ${formatPrice(styled.recommendedPrice)}]**\n`;
  }
  output += `    *   **[Custom Price]** (Refer to detailed pricing guidance below to choose your own)\n\n`;
  
  output += '---\n\n';
  output += '**Full Product Description for IONOS/Website:**\n\n';
  output += `**Product Title:** ${styled.name}\n\n`;
  output += `${styled.longDescription}\n\n`;
  
  output += '---\n\n';
  output += '**Detailed Pricing Guidance:**\n\n';
  if (styled.pricingGuidance) {
    output += `*   New Price Equivalent: ${styled.pricingGuidance.newPriceEquivalent}\n`;
    output += `*   Used Market Assessment: ${styled.pricingGuidance.usedMarketAssessment}\n`;
    output += `*   "High-End Thrift" Justification: ${styled.pricingGuidance.highEndThriftJustification}\n`;
    output += `*   Recommended Price Range: ${styled.pricingGuidance.recommendedPriceRange}\n`;
    output += `*   Why ${formatPrice(styled.recommendedPrice || 0)}?: ${styled.pricingGuidance.whySuggestedPrice}\n`;
  }
  
  return output;
}

// Default export
export default {
  styleMyProduct,
  formatPrice,
};
