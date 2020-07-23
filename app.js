'use strict';

var buf = new Map()
buf.set(0, 0);
buf.set(1, 1);

function fib(n) {
    if (buf.has(n)) {
        return buf.get(n);
    }
    const val = fib(n - 1) + fib(n - 2);
    buf.set(n, val);
    return val;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}

