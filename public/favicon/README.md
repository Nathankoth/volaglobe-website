# Favicon Assets

This directory contains the processed favicon files from the Volaris mark logo.

## File Structure

### Required Files
- `favicon.ico` - Multi-size ICO file (16px, 32px, 48px)
- `favicon-16x16.png` - 16x16 PNG favicon
- `favicon-32x32.png` - 32x32 PNG favicon  
- `favicon-48x48.png` - 48x48 PNG favicon
- `apple-touch-icon-180x180.png` - 180x180 Apple touch icon

## Source Image
- **Source**: `assets/branding/volaris_mark.png`
- **Usage**: Mark-only logo for favicon and small placements

## Processing Requirements

### Favicon Specifications
- **Format**: ICO (multi-size), PNG (individual sizes)
- **Sizes**: 16px, 32px, 48px, 180px
- **Quality**: Web-optimized, lossless compression
- **Background**: Transparent or white (as appropriate)

### HTML Integration
The favicon links are automatically updated in `index.html`:
```html
<link rel="icon" href="/public/favicon/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/public/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/public/favicon/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/public/favicon/apple-touch-icon-180x180.png">
```

## Updating Favicon

1. **Replace source**: Update `assets/branding/volaris_mark.png`
2. **Regenerate sizes**: Create all required sizes
3. **Update files**: Replace files in `public/favicon/`
4. **Test**: Verify favicon displays in browser tab
