# Commercial License Setup Guide

## Quick Start for Commercial Users

If you're using Baddie Product Styler for your business, follow these steps:

### Step 1: Choose Your License

Review the [pricing options](PRICING.md) and select the tier that fits your needs:
- **Solo License** ($29/mo): Individual entrepreneurs
- **Business License** ($99/mo): Small teams and growing businesses
- **Enterprise License** (Custom): Large organizations

### Step 2: Purchase Your License

Contact us to purchase:
- Email: sales@baddieproductstyler.com (update with your email)
- Include: Your name, company, and chosen license tier

Payment options:
- Credit/Debit Card
- PayPal
- Bank Transfer
- Cryptocurrency (Bitcoin, Ethereum)

### Step 3: Receive Your License Key

After purchase, you'll receive:
1. Invoice/Receipt
2. License Key
3. Commercial Terms Document
4. Support Portal Access

### Step 4: Activate Your License

#### For Node.js Applications:

```javascript
// Set environment variable
process.env.BADDIE_LICENSE_KEY = 'your-license-key-here';

// Or create a .env file:
// BADDIE_LICENSE_KEY=your-license-key-here

import { styleMyProduct } from 'baddie-product-styler';

const styled = styleMyProduct(product);
```

#### For Web Applications:

```javascript
// In your app initialization
window.BADDIE_LICENSE_KEY = 'your-license-key-here';

import { styleMyProduct } from 'baddie-product-styler';
```

### Step 5: Verify License

After setup, verify your license is active:

```javascript
import { styleMyProduct } from 'baddie-product-styler';

const product = {
  name: 'Test Product',
  description: 'Verification test',
  price: 99.99
};

try {
  const styled = styleMyProduct(product);
  console.log('✅ License active!');
  console.log(styled.styledDescription);
} catch (error) {
  console.error('❌ License issue:', error.message);
}
```

## Team Setup

### Adding Team Members

For Business and Enterprise licenses:

1. **Invite team members** via support portal
2. **Share license key** securely (use password manager)
3. **Set up in team repo** (use environment variables)

### Best Practices

- ✅ Store license key in environment variables (`.env`)
- ✅ Never commit license keys to version control
- ✅ Use secrets management for production
- ✅ Rotate keys annually
- ⚠️ Don't share keys outside your organization

Example `.env` file:
```
BADDIE_LICENSE_KEY=your-key-here
```

Add to `.gitignore`:
```
.env
.env.local
.env.production
```

## Support & Resources

### Commercial User Benefits

- 📧 **Priority Email Support**: Response within 24 hours
- 📚 **Advanced Documentation**: Best practices and guides
- 🔧 **Custom Integration Help**: Setup assistance
- 🆙 **Early Access**: New features before public release

### Getting Help

1. **Email Support**: support@baddieproductstyler.com (update with your email)
2. **Support Portal**: Access via license dashboard
3. **Slack Channel**: Enterprise customers only
4. **Phone Support**: Enterprise customers only

### Support Hours

- Email: 24/7 (response within 24h)
- Live Support: Mon-Fri, 9am-5pm EST
- Emergency Support: Enterprise only

## Frequently Asked Questions

### Can I use one license across multiple projects?

- **Solo**: 1 commercial project
- **Business**: Up to 5 commercial projects  
- **Enterprise**: Unlimited projects

### What happens if my license expires?

- You'll receive renewal reminders 30, 14, and 7 days before expiration
- Grace period of 7 days after expiration
- After grace period, commercial features will be restricted

### Can I transfer my license?

Yes, contact support to transfer licenses between:
- Team members
- Projects
- Companies (with approval)

### Do you offer discounts?

Yes! Discounts available for:
- Annual subscriptions (save 2 months)
- Nonprofits (25% off)
- Students (50% off with valid ID)
- Bulk licenses (contact sales)

### Can I upgrade/downgrade?

Absolutely:
- **Upgrade**: Instant, prorated credit applied
- **Downgrade**: Effective at next billing cycle

Contact support to change plans.

### What about refunds?

- 30-day money-back guarantee
- No questions asked
- Full refund minus transaction fees

## Invoicing

### Request an Invoice

Email with:
- Company name and address
- Tax ID / VAT number
- Purchase order number (if applicable)
- Contact information

### Payment Terms

- Credit card: Automatic monthly/annual
- Invoice: Net 30 days
- Wire transfer: Advance payment

### Currency

Prices listed in USD. We accept:
- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- Other currencies upon request

## Compliance

### License Agreement

Your commercial license includes:
- Commercial use rights
- Redistribution rights (within your applications)
- No attribution required
- Warranty and support terms

### Terms & Conditions

Full terms at: [Link to Terms]

Key points:
- License is per user/organization
- Not sublicensable
- Subject to fair use policy
- Automatic renewal unless cancelled

## Cancellation

### How to Cancel

1. Email support@baddieproductstyler.com
2. Specify account and reason (optional)
3. Receive confirmation within 24 hours

### What Happens After Cancellation

- Access continues until end of billing period
- No automatic refunds (use within 30 days for refund)
- Can reactivate anytime
- Data retained for 90 days

## Migration Guide

### From Personal to Commercial

Upgrading is easy:

1. Purchase commercial license
2. Add license key to your project
3. No code changes required!
4. Continue using all features

### From Competitor Products

We offer free migration assistance:
- Code conversion help
- Feature mapping
- Best practices guide
- 1-on-1 setup call (Business/Enterprise)

## Security

### License Key Security

- Keys are encrypted in transit and at rest
- Rotate keys from support portal
- Report compromised keys immediately
- Use environment variables, never hardcode

### Data Privacy

- We don't collect usage analytics
- No tracking in production builds
- GDPR compliant
- Privacy policy: [Link]

## Contact Sales

Have questions? We're here to help!

**Email**: sales@baddieproductstyler.com (update with actual email)

**Subject Line Format**: `Commercial License - [Your Company]`

**Include**:
- Your name and company
- Team size
- Use case
- Any specific requirements

Response time: Within 24 hours on business days.

---

Thank you for choosing Baddie Product Styler for your business! 🎉
