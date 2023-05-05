codePointRange = function codePointRange(start, end) {
    const codePoints = [];
    let length = 0;
    for (codePoint = start; codePoint < end; codePoint++) {
        codePoints[length++] = codePoint;
    }
    return String.fromCodePoint.apply(null, codePoints);
}

function buildString({ loneCodePoints, ranges }) {
    let result = String.fromCodePoint.apply(null, loneCodePoints);
    for (const [start, end] of ranges) {
        result += codePointRange(start, end + 1);
    }
    return result;
}

const str = buildString({
    loneCodePoints: [],
    ranges: [
        [0x000000, 0x00002F],
        [0x00003A, 0x0111FF],
        //[0x00003A, 0x10FFFF],
    ],
});