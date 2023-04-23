// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Saurashtra`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00A880, 0x00A8C5],
    [0x00A8CE, 0x00A8D9]
  ]
});
testPropertyEscapes(
  /^\p{Script=Saurashtra}+$/u,
  matchSymbols,
  "\\p{Script=Saurashtra}"
);
testPropertyEscapes(
  /^\p{Script=Saur}+$/u,
  matchSymbols,
  "\\p{Script=Saur}"
);
testPropertyEscapes(
  /^\p{sc=Saurashtra}+$/u,
  matchSymbols,
  "\\p{sc=Saurashtra}"
);
testPropertyEscapes(
  /^\p{sc=Saur}+$/u,
  matchSymbols,
  "\\p{sc=Saur}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A87F],
    [0x00A8C6, 0x00A8CD],
    [0x00A8DA, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Saurashtra}+$/u,
  nonMatchSymbols,
  "\\P{Script=Saurashtra}"
);
testPropertyEscapes(
  /^\P{Script=Saur}+$/u,
  nonMatchSymbols,
  "\\P{Script=Saur}"
);
testPropertyEscapes(
  /^\P{sc=Saurashtra}+$/u,
  nonMatchSymbols,
  "\\P{sc=Saurashtra}"
);
testPropertyEscapes(
  /^\P{sc=Saur}+$/u,
  nonMatchSymbols,
  "\\P{sc=Saur}"
);
