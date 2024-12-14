const jsts = require("../dist/jsts.min");
const test = require("tape");

// Ensuring JSTS has been built with the correct methods.

test("jsts", function (t) {
  t.notEqual(jsts, undefined, "jsts is defined");

  t.equal(typeof jsts, "object", "jsts is an object");

  t.end();
});

test("jsts.BufferOp", function (t) {
  t.notEqual(jsts.BufferOp, undefined, "jsts.BufferOp is defined");

  t.equal(typeof jsts.BufferOp, "function", "jsts.BufferOp is a function");

  t.end();
});

test("jsts.GeoJSONReader", function (t) {
  t.notEqual(jsts.GeoJSONReader, undefined, "jsts.GeoJSONReader is defined");

  t.equal(
    typeof jsts.GeoJSONReader,
    "function",
    "jsts.GeoJSONReader is a function"
  );

  t.end();
});

test("jsts.GeoJSONWriter", function (t) {
  t.notEqual(jsts.GeoJSONWriter, undefined, "jsts.GeoJSONWriter is defined");

  t.equal(
    typeof jsts.GeoJSONWriter,
    "function",
    "jsts.GeoJSONWriter is a function"
  );

  t.end();
});
