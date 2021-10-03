const jsts = require("../dist/jsts.min");

console.log("Ensuring JSTS has been built with the correct methods");
console.assert(jsts !== undefined);
console.log("BufferOp");
console.assert(jsts.BufferOp !== undefined, true);
console.log("BufferOp is present!");

console.log("GeoJSONReader");
console.assert(jsts.GeoJSONReader !== undefined, true);
console.log("GeoJSONReader is present");

console.log("GeoJSONWriter");
console.assert(jsts.GeoJSONWriter !== undefined, true);
console.log("GeoJSONWriter is present");
