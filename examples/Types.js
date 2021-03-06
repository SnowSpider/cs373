// --------
// Types.js
// --------

function assert (b) {
    if (!b) {
        throw "Assertion Error"}}

print("Types.js\n");

b = false;
b = true;
assert((typeof b) == "boolean");

i = 2;
assert((typeof i) == "number");

f = 2.3;
assert((typeof f) == "number");

s = "abc";
assert((typeof s) == "string");

a = [2, 3, 4];
assert((typeof a) == "object");
assert(a     instanceof Array);
assert(Array instanceof Function);

function inc (v) {
    return v + 1;}

assert((typeof inc) == "function");
assert(inc      instanceof Function);
assert(Function instanceof Function);

function A () {
    this.n = 2;
    this.s = "abc";}

x = new A();
assert((typeof x) == "object");
assert(x      instanceof A);
assert(x      instanceof Object);
assert(A      instanceof Function);
assert(Object instanceof Function);

print("Done.\n");
