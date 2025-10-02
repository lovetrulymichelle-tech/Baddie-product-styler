# Deployment Guide

This guide explains how to deploy baddie-product-styler to npm.

## Recent Improvements ✨

Before deploying, note these recent enhancements:
- ✅ Added comprehensive input validation
- ✅ Created mobile-friendly web demo (works on all devices)
- ✅ Added commercial licensing documentation
- ✅ Improved error handling and edge case support
- ✅ Enhanced documentation for mobile and commercial users

Make sure to test the `demo/index.html` file works correctly before publishing!

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **npm CLI**: Make sure you have npm installed (comes with Node.js)
3. **Authentication**: Log in to npm via CLI

## Initial Setup

### 1. Login to npm

```bash
npm login
```

This will prompt you for:
- Username
- Password
- Email
- One-time password (if 2FA is enabled)

### 2. Verify Login

```bash
npm whoami
```

This should display your npm username.

## Publishing the Package

### 1. Prepare for Publishing

Before publishing, make sure:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Verify package contents
npm pack --dry-run
```

The `npm pack --dry-run` command shows what files will be included in the package.

### 2. Version Management

Update the version in `package.json` following [Semantic Versioning](https://semver.org/):

```bash
# For a patch release (1.0.0 -> 1.0.1)
npm version patch

# For a minor release (1.0.0 -> 1.1.0)
npm version minor

# For a major release (1.0.0 -> 2.0.0)
npm version major
```

Or manually edit the `version` field in `package.json`.

### 3. Publish to npm

```bash
npm publish
```

**Note**: The `prepublishOnly` script in package.json will automatically run `npm run build` before publishing.

### 4. Verify Publication

After publishing, verify the package is available:

```bash
npm view baddie-product-styler
```

Or visit: https://www.npmjs.com/package/baddie-product-styler

## Testing Before Publishing

### Local Testing

Test the package locally before publishing:

```bash
# Create a test directory
mkdir ../test-package
cd ../test-package
npm init -y

# Install your package from the parent directory
npm install ../Baddie-product-styler

# Test it
node -e "const {styleMyProduct} = require('baddie-product-styler'); console.log(styleMyProduct());"
```

### Using npm link

Alternatively, use npm link:

```bash
# In the package directory
npm link

# In a test project
npm link baddie-product-styler

# Test your package
```

## Updating the Package

To publish an update:

1. Make your changes
2. Update the version number
3. Build the project
4. Publish

```bash
npm version patch  # or minor/major
npm run build
npm publish
```

## Managing Access

### Make Package Public/Private

```bash
# Make public (default for scoped packages)
npm publish --access public

# Make private (requires paid npm account)
npm publish --access restricted
```

### Add Collaborators

```bash
npm owner add <username> baddie-product-styler
```

## Unpublishing

⚠️ **Warning**: Unpublishing is discouraged and has restrictions.

```bash
# Unpublish a specific version (within 72 hours)
npm unpublish baddie-product-styler@1.0.0

# Unpublish entire package (within 72 hours, if no other packages depend on it)
npm unpublish baddie-product-styler --force
```

## Best Practices

1. **Always test locally** before publishing
2. **Use semantic versioning** properly
3. **Update CHANGELOG.md** with each release
4. **Tag releases** in git:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
5. **Enable 2FA** on your npm account for security
6. **Review package contents** with `npm pack --dry-run` before publishing

## Troubleshooting

### Permission Denied

If you get permission errors:
```bash
npm logout
npm login
```

### Package Name Already Exists

If the package name is taken, you can:
1. Choose a different name
2. Use a scoped package: `@yourusername/baddie-product-styler`

To use a scoped package, update `package.json`:
```json
{
  "name": "@yourusername/baddie-product-styler"
}
```

### Build Errors

Make sure all dependencies are installed and the build succeeds:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Additional Resources

- [npm Documentation](https://docs.npmjs.com/)
- [Publishing npm Packages](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
