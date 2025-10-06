# Avatar Assets

This directory contains processed avatar images for the leadership team.

## File Structure

### Provided Avatars
- `akintunde_abimbola_agbonde.png` - Akintunde Abimbola Agbonde (150px, 300px, 512px variants)
- `ugoji_nkechika_christian.png` - Ugoji Nkechika Christian (150px, 300px, 512px variants)

### Initials Fallbacks
- `on_initials.svg` - Ogunbajo Nathaniel initials (ON)
- `oh_initials.svg` - Olaitan Hafis initials (OH)

## Image Processing Requirements

### Avatar Specifications
- **Format**: PNG
- **Sizes**: 150px, 300px, 512px (square)
- **Crop**: Face-centered, 1:1 aspect ratio
- **Style**: Circular crop with object-fit: cover
- **Quality**: Web-optimized (lossless compression)

### CSS Implementation
```css
.avatar-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  display: block;
}

.avatar-image {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  display: block;
}
```

## Adding New Avatars

1. **Prepare the image**: Crop to square, center the face
2. **Export sizes**: Create 150px, 300px, and 512px versions
3. **Name convention**: `firstname_lastname.png`
4. **Place in directory**: Save to `assets/branding/avatars/`
5. **Update config**: Add to `src/config/site.ts` team members

## Fallback System

If no photo is provided for a team member:
- Use initials SVG from `assets/branding/avatars/[initials]_initials.svg`
- Background color from branding tokens
- Maintains consistent circular styling
