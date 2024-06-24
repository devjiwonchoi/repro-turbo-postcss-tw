## Steps to reproduce:

> NOTE: There's postcss config inside the [package.json](./package.json).

1. Run `pnpm next dev`, the tailwind works fine.
2. Run `pnpm next dev --turbo`, the tailwind is broken.
3. Add `postcss.config.js` with the following content:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
  },
}
```

4. Run `pnpm next dev --turbo`, the tailwind works.