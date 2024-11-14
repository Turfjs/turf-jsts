const jsts = require("../dist/jsts.min");

console.log("Ensuring JSTS has been built with the correct methods");

if (jsts !== undefined && typeof jsts === "object") {
  console.log("jsts looks good");
} else {
  console.log("jsts undefined or not an object");
  return;
}

if (jsts.BufferOp !== undefined && typeof jsts.BufferOp === "function") {
  console.log("jsts.BufferOp looks good");
} else {
  console.log("jsts.BufferOp undefined or not a function");
  return;
}

if (
  jsts.GeoJSONReader !== undefined &&
  typeof jsts.GeoJSONReader === "function"
) {
  console.log("jsts.GeoJSONReader looks good");
} else {
  console.log("jsts.GeoJSONReader undefined or not a function");
  return;
}

if (
  jsts.GeoJSONWriter !== undefined &&
  typeof jsts.GeoJSONWriter === "function"
) {
  console.log("jsts.GeoJSONWriter looks good");
} else {
  console.log("jsts.GeoJSONWriter undefined or not a function");
  return;
}
