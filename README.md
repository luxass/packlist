# packlist

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

Retrieve a list of files to include in a npm package

> [!NOTE]
> This is a complete rewrite of the original `npm-packlist` package with more power.
> You can view the full list of changes that differentiate this package from the original [here](#changes-from-npm-packlist).

## Usage

```ts
import { packlist } from "packlist";

packlist({
  cwd: "./path/to/package",
});
```

## Changes from `npm-packlist`

Some of the changes that differentiate this package from the original `npm-packlist` package are:

## 📄 License

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/packlist?style=flat&colorA=18181B&colorB=4169E1
[npm-version-href]: https://npmjs.com/package/packlist
[npm-downloads-src]: https://img.shields.io/npm/dm/packlist?style=flat&colorA=18181B&colorB=4169E1
[npm-downloads-href]: https://npmjs.com/package/packlist
