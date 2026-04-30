```yaml
title: Customising icons with CSS variables
```

# Customising icons with CSS variables

This applies to all SVG + CSS component packages:

- [@iconify-vue/\* packages](./vue/index.md) for Vue.
- [@iconify-svelte/\* packages](./svelte/index.md) for Svelte.
- [@iconify-react/\* packages](./react/index.md) for React.
- [@iconify-solid/\* packages](./solid/index.md) for SolidJS.

You can customise icons using CSS variables, without editing icons.

This is done by setting custom CSS variables, which override default values used in icons. See examples below.

## What is customisable?

The following properties can be customised:

- all colors
- stroke width
- opacity

## Variable names

Variables are generated based on icon content (see examples below):

- `[prop]--svg-color--{color}` for colors, where `[prop]{color}` is color value in lower case without "#"
- `[prop]--svg-stroke-width--{stroke}` for stroke width, where `[prop]{stroke}` is original stroke width "px" suffix and without dots
- `[prop]--svg-opacity--{value}` for opacity, where `[prop]{value}` is original value
- `[prop]--svg-fill-opacity--{value}` for fill-opacity, same as above

Variable names are generated from original value in lower case, replacing:

- All characters other than 0-9 and a-z are replaced with dash
- Leading and trailing dashes are removed, except for when value starts with '-' (negative number)

Examples:

- Color "#F80" becomes "f80"
- Stroke width "1.5px" becomes "1-5px"
- Negative number "-0.5" becomes "-0-5"

## Examples

Usage examples with usable CSS

### Stroke width

Example customising stroke width in [Tabler Icons](https://icon-sets.iconify.design/tabler/):

```css
svg {
  /* replace 2px stroke width with 1.5px */
  --svg-stroke-width--2px: 1.5px;
}
```

### Opacity

Example customising opacity in two tone [Google Material Icons](https://icon-sets.iconify.design/ic/):

```css
svg {
  /* replace 0.3 with 0.5 */
  --svg-opacity--0-3: 0.5;
}
```

Example customising opacity in two tone [IconaMoon](https://icon-sets.iconify.design/iconamoon/):

```css
svg {
  /* replace 0.15 with 0.4 */
  --svg-opacity--0-16: 0.4;
}
```

### Colors

Example customising colors in [Freehand color icons](https://icon-sets.iconify.design/streamline-freehand-color/):

```css
svg {
  /* replace blue color */
  --svg-color--0c6fff: red;
  /* replace black color */
  --svg-color--020202: currentColor;
}
```

This does not apply to `[prop]currentColor` used in monotone icons.

To change `[prop]currentColor`, simply change text color:

```css
svg {
  color: red;
}
```

## Icon specific variables

To customise icon, first you need to know what colors, opacity and stroke-width values are used in that specific icon.

Most icon sets are consistent, icons in one icon set usually use the same value, however, that is not always the case.

### Inspect icon

Where to see actual variables used in a specific icon?

Currently the only way is to inspect icon in browser or editor.

Soon you will be able to do that on [Iconify icon sets website](https://icon-sets.iconify.design/).
