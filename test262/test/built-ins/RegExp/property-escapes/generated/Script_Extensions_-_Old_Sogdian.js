// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Old_Sogdian`
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
    [0x010F00, 0x010F27]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Old_Sogdian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Old_Sogdian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Sogo}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sogo}"
);
testPropertyEscapes(
  /^\p{scx=Old_Sogdian}+$/u,
  matchSymbols,
  "\\p{scx=Old_Sogdian}"
);
testPropertyEscapes(
  /^\p{scx=Sogo}+$/u,
  matchSymbols,
  "\\p{scx=Sogo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010EFF],
    [0x010F28, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Old_Sogdian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Old_Sogdian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Sogo}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sogo}"
);
testPropertyEscapes(
  /^\P{scx=Old_Sogdian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Old_Sogdian}"
);
testPropertyEscapes(
  /^\P{scx=Sogo}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sogo}"
);
