// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Open_Punctuation`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000028,
    0x00005B,
    0x00007B,
    0x000F3A,
    0x000F3C,
    0x00169B,
    0x00201A,
    0x00201E,
    0x002045,
    0x00207D,
    0x00208D,
    0x002308,
    0x00230A,
    0x002329,
    0x002768,
    0x00276A,
    0x00276C,
    0x00276E,
    0x002770,
    0x002772,
    0x002774,
    0x0027C5,
    0x0027E6,
    0x0027E8,
    0x0027EA,
    0x0027EC,
    0x0027EE,
    0x002983,
    0x002985,
    0x002987,
    0x002989,
    0x00298B,
    0x00298D,
    0x00298F,
    0x002991,
    0x002993,
    0x002995,
    0x002997,
    0x0029D8,
    0x0029DA,
    0x0029FC,
    0x002E22,
    0x002E24,
    0x002E26,
    0x002E28,
    0x002E42,
    0x003008,
    0x00300A,
    0x00300C,
    0x00300E,
    0x003010,
    0x003014,
    0x003016,
    0x003018,
    0x00301A,
    0x00301D,
    0x00FD3F,
    0x00FE17,
    0x00FE35,
    0x00FE37,
    0x00FE39,
    0x00FE3B,
    0x00FE3D,
    0x00FE3F,
    0x00FE41,
    0x00FE43,
    0x00FE47,
    0x00FE59,
    0x00FE5B,
    0x00FE5D,
    0x00FF08,
    0x00FF3B,
    0x00FF5B,
    0x00FF5F,
    0x00FF62
  ],
  ranges: []
});
testPropertyEscapes(
  /^\p{General_Category=Open_Punctuation}+$/u,
  matchSymbols,
  "\\p{General_Category=Open_Punctuation}"
);
testPropertyEscapes(
  /^\p{General_Category=Ps}+$/u,
  matchSymbols,
  "\\p{General_Category=Ps}"
);
testPropertyEscapes(
  /^\p{gc=Open_Punctuation}+$/u,
  matchSymbols,
  "\\p{gc=Open_Punctuation}"
);
testPropertyEscapes(
  /^\p{gc=Ps}+$/u,
  matchSymbols,
  "\\p{gc=Ps}"
);
testPropertyEscapes(
  /^\p{Open_Punctuation}+$/u,
  matchSymbols,
  "\\p{Open_Punctuation}"
);
testPropertyEscapes(
  /^\p{Ps}+$/u,
  matchSymbols,
  "\\p{Ps}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000F3B,
    0x002309,
    0x002769,
    0x00276B,
    0x00276D,
    0x00276F,
    0x002771,
    0x002773,
    0x0027E7,
    0x0027E9,
    0x0027EB,
    0x0027ED,
    0x002984,
    0x002986,
    0x002988,
    0x00298A,
    0x00298C,
    0x00298E,
    0x002990,
    0x002992,
    0x002994,
    0x002996,
    0x0029D9,
    0x002E23,
    0x002E25,
    0x002E27,
    0x003009,
    0x00300B,
    0x00300D,
    0x00300F,
    0x003015,
    0x003017,
    0x003019,
    0x00FE36,
    0x00FE38,
    0x00FE3A,
    0x00FE3C,
    0x00FE3E,
    0x00FE40,
    0x00FE42,
    0x00FE5A,
    0x00FE5C
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000027],
    [0x000029, 0x00005A],
    [0x00005C, 0x00007A],
    [0x00007C, 0x000F39],
    [0x000F3D, 0x00169A],
    [0x00169C, 0x002019],
    [0x00201B, 0x00201D],
    [0x00201F, 0x002044],
    [0x002046, 0x00207C],
    [0x00207E, 0x00208C],
    [0x00208E, 0x002307],
    [0x00230B, 0x002328],
    [0x00232A, 0x002767],
    [0x002775, 0x0027C4],
    [0x0027C6, 0x0027E5],
    [0x0027EF, 0x002982],
    [0x002998, 0x0029D7],
    [0x0029DB, 0x0029FB],
    [0x0029FD, 0x002E21],
    [0x002E29, 0x002E41],
    [0x002E43, 0x003007],
    [0x003011, 0x003013],
    [0x00301B, 0x00301C],
    [0x00301E, 0x00DBFF],
    [0x00E000, 0x00FD3E],
    [0x00FD40, 0x00FE16],
    [0x00FE18, 0x00FE34],
    [0x00FE44, 0x00FE46],
    [0x00FE48, 0x00FE58],
    [0x00FE5E, 0x00FF07],
    [0x00FF09, 0x00FF3A],
    [0x00FF3C, 0x00FF5A],
    [0x00FF5C, 0x00FF5E],
    [0x00FF60, 0x00FF61],
    [0x00FF63, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Open_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Open_Punctuation}"
);
testPropertyEscapes(
  /^\P{General_Category=Ps}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Ps}"
);
testPropertyEscapes(
  /^\P{gc=Open_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{gc=Open_Punctuation}"
);
testPropertyEscapes(
  /^\P{gc=Ps}+$/u,
  nonMatchSymbols,
  "\\P{gc=Ps}"
);
testPropertyEscapes(
  /^\P{Open_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{Open_Punctuation}"
);
testPropertyEscapes(
  /^\P{Ps}+$/u,
  nonMatchSymbols,
  "\\P{Ps}"
);
